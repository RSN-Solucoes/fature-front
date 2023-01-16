import { I_Client } from './../../../core/interfaces/client.interface';
import { I_Product } from './../../../core/interfaces/product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { UFS_SELECT_LIST } from 'src/app/shared/constants/ufs.const';
import { ProductsServicesService } from 'src/app/services/products-services.service';
import { Dropdown } from 'primeng/dropdown';
import { InputNumber } from 'primeng/inputnumber';
import { DISCOUNT_TYPE_SELECT_LIST, INSTALLMENTS_SELECT_LIST, PAYMENT_METHODS_SELECT_LIST } from './invoice-form.const';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public formSubmited: boolean = false;

  public ufSelectItems: any = UFS_SELECT_LIST;

  // Users
  public clients: I_Client[] = [];
  public selectedClient!: any;

  // Products
  public productsServices: I_Product[] = [];
  public selectedProducts: any[] = [];
  public disabledProductButton: boolean = true;

  // Forms
  public clientDataForm!: FormGroup;
  public displayForm!: string;
  public paymentMethods: any = PAYMENT_METHODS_SELECT_LIST;
  public selectedMethods: any[] = [];
  public invoiceAmount = 0;
  public actualDate: Date = new Date();
  public maxDiscountDate: Date = new Date();
  
  // Carnet
  public carnetForm!: FormGroup;
  public carnetMessages: string[] = [];
  public carnetBankSlips: any[] = [];
  public carnetDiscountEnabled: boolean = false;
  
  // BankSlip
  public bankSlipForm!: FormGroup;
  public discountTypeSelectItems = DISCOUNT_TYPE_SELECT_LIST;
  public bankSlipMessages: string[] = [];
  
  //CreditCard
  public creditCardForm!: FormGroup;
  public installmentsSelectItems = INSTALLMENTS_SELECT_LIST;
  
  //DebitCard
  public debitCardForm!: FormGroup;
  
  //Pix
  public pixForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private clientsService: ClientsService,
    private productsServicesService: ProductsServicesService,
  ) { }

  ngOnInit(): void {
    this.createForms();

    this.getClients();
    this.getProductsServices();
  }

  ngOnDestroy(): void {
    this.selectedMethods.forEach(el => {
      this.paymentMethods.push(el);
    })
  }

  createForms() {
    this.form = this.fb.group({
      user: this.fb.group({
        id: [null],
      }),
      products: this.fb.array([]),
      billing: this.fb.group({
        dueDate: [null],
        referringDate: [null],
        reference: [null],
        amount: [null],
      }),
    });

    this.clientDataForm = this.fb.group({
      name: [{value: null, disabled: true}],
      email: [{value: null, disabled: true}],
      tel: [{value: null, disabled: true}],
      cep: [{value: null, disabled: true}],
      address: [{value: null, disabled: true}],
      addressNumber: [{value: null, disabled: true}],
      addressComplement: [{value: null, disabled: true}],
      district: [{value: null, disabled: true}],
      uf: [{value: null, disabled: true}],
      city: [{value: null, disabled: true}],
      id: [null],
    });

    this.bankSlipForm = this.fb.group({
      messages: this.fb.array([]),
      description: [null],
      discount: this.fb.group({
        enabled: [null],
        mode: [{value: null, disabled: true}],
        amount: [{value: null, disabled: true}],
        dueDate: [{value: null, disabled: true}],
      }),
      fees: this.fb.group({
        enabled: [null],
        penaltyRate: [{value: null, disabled: true}],
        interestRate: [{value: null, disabled: true}],
      })
    });

    this.creditCardForm = this.fb.group({
      description: [null],
      maxInstallmentsQuantity: [null],
      fees: this.fb.group({
        enabled: [null],
        interestRate: [{value: null, disabled: true}],
      })
    });

    this.debitCardForm = this.fb.group({
      description: [null],
    });

    this.pixForm = this.fb.group({
      dueDate: [null],
      description: [null],
    });

    this.carnetForm = this.fb.group({
      description: [null],
      fees: this.fb.group({
        enabled: [null],
        penaltyRate: [{value: null, disabled: true}],
        interestRate: [{value: null, disabled: true}],
      }),
      bankSlips: this.fb.array([]),
    });

    this.form.valueChanges.subscribe({
      next: (change) => {
        this.maxDiscountDate.setDate(
          new Date(change.billing.dueDate).getDate() - 1
        );
      },
    });
  }

  selectClient(user: any) {
    this.selectedClient = user;

    const invoiceForm = this.form.controls['user'] as FormGroup;
    
    this.clientDataForm.patchValue({
      ...user,
    });

    invoiceForm.patchValue({
      id: this.selectedClient.id,
    });
  }

  getClients() {
    const pagination = `page=1&limit=10`;
    this.clientsService.getClients(pagination).subscribe({
      next: (res) => {
        this.clients = res.data;
      },
      error: (err) => {
      }
    });
  }

  getProductsServices() {
    const pagination = `page=1&limit=10`;
    this.productsServicesService.getProductsServices(pagination).subscribe({
      next: (res) => {
        this.productsServices = res.data;
      },
      error: (err) => {
      }
    });
  }

  resetFormFields(fields: string[], form: FormGroup) {
    fields.forEach(field => {
      form.get(field)?.reset();
    });
  }

  addProduct(productDropdown: Dropdown, productQuantity: HTMLInputElement, productValue: InputNumber) {
    if (!productDropdown.value || !productQuantity.value) return;
    const productsForm = this.form.controls['products'] as FormArray;

    this.selectedProducts.push({
      ...productDropdown.value,
      quantity: productQuantity.value,
      totalValue: productValue.value
    });

    productsForm.push(
      this.fb.group({
        id: productDropdown.value.id,
        quantity: productQuantity.value,
      })
    );

    this.invoiceAmount += productValue.value;
    this.form.get('billing.amount')?.setValue(this.invoiceAmount);

    productDropdown.writeValue(undefined);
    productQuantity.value = '';
    productValue.writeValue(null);
  }

  removeProduct(index: number) {
    const product = this.selectedProducts[index];
    const productsForm = this.form.controls['products'] as FormArray;

    this.invoiceAmount -= product.totalValue;
    this.form.get('billing.amount')?.setValue(this.invoiceAmount);

    this.selectedProducts.splice(index, 1);

    productsForm.removeAt(index);
  }

  calculateProductValue(productDropdown: Dropdown, productQuantity: HTMLInputElement, productValue: InputNumber) {
    if (!productDropdown.value) return;

    this.disabledProductButton = false;

    let value = productDropdown.value.price * Number(productQuantity.value);

    productValue.writeValue(value)
  }

  addMessage(message: HTMLInputElement, form: string) {
    if (!message.value) return;

    switch(form) {
      case 'bankSlip':
        if (this.bankSlipMessages.length == 9) return;

        const messagesBankSlipForm = this.bankSlipForm.controls['messages'] as FormArray;
        messagesBankSlipForm.push(new FormControl(message));
        this.bankSlipMessages.push(message.value);
        break;
      case 'carnet':
        if (this.carnetMessages.length == 9) return;

        this.carnetMessages.push(message.value);
        break;
    }

    message.value = '';
  }

  removeMessage(index: number, form: string) {
    switch(form) {
      case 'bankSlip':
        const messagesBankSlipForm = this.bankSlipForm.controls['messages'] as FormArray;
        messagesBankSlipForm.removeAt(index);
        this.bankSlipMessages.splice(index, 1);
        break;
      case 'carnet':
        this.carnetMessages.splice(index, 1);
        break;
    }
  }

  addPaymentMethod(index: number, op: OverlayPanel, paymentMethod: string) {
    op.hide();
    this.showPaymentMethodForm(paymentMethod);

    this.selectedMethods.push(this.paymentMethods[index]);

    this.paymentMethods.splice(index, 1);
  }

  removePaymentMethod(formName: string) {
    const method = this.selectedMethods.find(el => {
      return el.value == formName;
    });

    const index = this.selectedMethods.indexOf(method);
    
    this.paymentMethods.push(method);
    this.selectedMethods.splice(index, 1);

    this.displayForm = '';
  }

  resetForm(form: FormGroup, fields: any[] = []) {
    switch(form) {
      case this.bankSlipForm:
        const messagesBankSlipForm = this.bankSlipForm.controls['messages'] as FormArray;

        messagesBankSlipForm.reset();
        while(this.bankSlipMessages.length) {
          this.bankSlipMessages.pop();
        }
        break;
      case this.carnetForm:
        while(this.carnetMessages.length || this.carnetBankSlips.length) {
          this.carnetMessages.length ? this.carnetMessages.pop() : this.carnetBankSlips.pop();
        }
        fields.forEach(el => {
          el.writeValue('')
        });

        this.carnetDiscountEnabled = false;
        break;
    }

    form.reset();
  }

  showPaymentMethodForm(paymentMethod: string) {
    if(this.displayForm == paymentMethod) {
      this.displayForm = '';
      return;
    };
    if(paymentMethod == 'pix') {
      this.pixForm.get('dueDate')?.setValue(this.form.get('billing.dueDate')?.value);
    }

    this.displayForm = paymentMethod;
  }

  generateBankSlips(installments: HTMLInputElement, discountDue: InputNumber, discountValue: InputNumber) {
    if(!installments.value || !discountDue.value || !discountValue.value || !this.form.get('billing.dueDate')?.value) {
      return alert("preencha todos os campos para gerar os boletos!!!");
      
    }
    const carnetInstallments = Number(installments.value);
    const bankSlips = this.carnetForm.controls['bankSlips'] as FormArray;

    const formatCarnetDates = (
      firstDate: any,
      totalMonths: number
    ) => {
      const dates: any = [];

      for (let i = 0; i < totalMonths; i++) {
        if (i == 0) dates.push(firstDate.toISOString());
        else {
          const tempDate = new Date(firstDate);

          tempDate.setMonth(tempDate.getMonth() + i);

          dates.push(tempDate.toISOString());
        }
      }
      return dates;
    };

    const bankSlipDueDates = formatCarnetDates(
      this.form.get('billing.dueDate')?.value,
      carnetInstallments
    );

    const discountDueDates = formatCarnetDates(
      new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        discountDue.value
      ),
      carnetInstallments
    );

    const bankSlipAmount = this.invoiceAmount / carnetInstallments;

    for(let j = 0; j < carnetInstallments; j++) {
      this.carnetBankSlips.push({
        dueDate: bankSlipDueDates[j],
        amount: bankSlipAmount,
        messages: this.carnetMessages,
        discount: {
          enabled: this.carnetDiscountEnabled,
          amount: discountValue.value,
          discountDue: discountDueDates[j],
        }
      });
    };

    bankSlips.push(new FormControl(this.carnetBankSlips));

    // Conversão das datas para os inputs da tela
    this.carnetBankSlips.map((el, index) => {
      el.dueDate = new Date(el.dueDate);
      el.discount.discountDue = new Date(el.discount.discountDue);
      el.installmentNumber = index + 1;
    });
  }

  toggleSwitchFields(fields: string[], toggle: boolean, form: FormGroup) {
    fields.forEach((field) => {
      if (toggle) {
        form.get(field)?.enable();
        form.get(field)?.updateValueAndValidity();
      } else {
        form.get(field)?.disable();
        form.get(field)?.reset();
      }
    });
  }

  submitForm() {
    const body = this.form.getRawValue();

    if(this.selectedMethods.length) {
      this.selectedMethods.forEach(el => {
        
        switch(el.value) {
          case 'bankSlip':
            body.billing.bankSlip = {
              ...this.bankSlipForm.getRawValue()
            }
            break;
          case 'creditCard':
            body.billing.creditCard = {
              ...this.creditCardForm.getRawValue()
            }
            break;
          case 'debitCard':
            body.billing.debitCard = {
              ...this.debitCardForm.getRawValue()
            }
            break;
          case 'pix':
            body.billing.pix = {
              ...this.pixForm.getRawValue()
            }
            break;
          case 'carnet':
            body.billing.carnet = {
              ...this.carnetForm.getRawValue()
            }
            break;
          }
        });
    }

    console.log(body);
  }

  cancel() {
    this.router.navigate(['painel/faturas']);
  }

}
