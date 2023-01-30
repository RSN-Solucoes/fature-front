import { I_Client } from './../../../core/interfaces/client.interface';
import { I_Product } from './../../../core/interfaces/product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnDestroy, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { UFS_SELECT_LIST } from 'src/app/shared/constants/ufs.const';
import { ProductsServicesService } from 'src/app/services/products-services.service';
import { Dropdown } from 'primeng/dropdown';
import { InputNumber } from 'primeng/inputnumber';
import { DISCOUNT_TYPE_SELECT_LIST, INSTALLMENTS_SELECT_LIST, PAYMENT_METHODS_SELECT_LIST } from './invoice-form.const';
import { OverlayPanel } from 'primeng/overlaypanel';
import { InvoiceService } from 'src/app/services/invoice.service';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit, OnDestroy {
  public invoiceId = this.activatedRoute.snapshot.paramMap.get('id') || '';
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
  public form!: FormGroup;
  public clientDataForm!: FormGroup;
  public displayForm!: string;
  public paymentMethods: any = PAYMENT_METHODS_SELECT_LIST;
  public selectedMethods: any[] = [];
  public invoiceAmount = 0;
  public actualDate: Date = new Date();

  // public emptyDate: Date[] = [];
  
  // Carnet
  public carnetFormValues!: any;
  
  // BankSlip
  public bankSlipFormValues!: any;
  
  //CreditCard
  public creditCardFormValues!: any;
  
  //DebitCard
  public debitCardFormValues!: any;
  
  //Pix
  public pixFormValues!: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private clientsService: ClientsService,
    private invoiceService: InvoiceService,
    private productsServicesService: ProductsServicesService,
    private requestMessageService: RequestMessageService,
  ) { }

  ngOnInit(): void {
    this.createForms();

    this.getClients();
    this.getProductsServices();

    if(this.invoiceId) {
      this.getInvoiceData();
    };
  }

  ngOnDestroy(): void {
    this.selectedMethods.forEach(el => {
      this.paymentMethods.push(el);
    })
  }

  createForms() {
    this.form = this.fb.group({
      user: this.fb.group({
        id: [null, Validators.required],
      }),
      products: this.fb.array([]),
      billing: this.fb.group({
        dueDate: [null, Validators.required],
        referringDate: [null, Validators.required],
        reference: [null],
        amount: [null],
      }),
    });
    const products = this.form.controls['products'] as FormArray;
    products.addValidators(Validators.required);

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
  }

  patchFormData(changedObject: any, form: string) {
    switch(form) {
      case 'bankSlip':
        this.bankSlipFormValues = changedObject;
        break;
      case 'creditCard':
        this.creditCardFormValues = changedObject;
        break;
      case 'debitCard':
        this.debitCardFormValues = changedObject;
        break;
      case 'pix':
        this.pixFormValues = changedObject;
        break;
      case 'carnet':
        this.carnetFormValues = changedObject;
        break;
    }
  }

  getInvoiceData() {
    this.invoiceService.getInvoice(this.invoiceId).subscribe({
      next: (res) => {
        this.form.patchValue({
          ...res.data,
          billing: {
            amount: res.data.billing.amount,
            referringDate: new Date(res.data.billing.referringDate),
            dueDate: new Date(res.data.billing.dueDate),
            reference: res.data.billing.reference
          },
        });
        this.invoiceAmount = res.data.billing.amount;

        this.clientsService.getClient(res.data.user.id).subscribe(client => {
          this.selectClient(client.data);
        });

        this.selectedProducts = res.data.products;
        const products = this.form.controls['products'] as FormArray;

        res.data.products.forEach((el: any) => {
          products.push(
            this.fb.group({
              id: el.id,
              quantity: el.quantity,
            }));
        });

        this.patchPaymentMethodForm(res.data.billing);
      },
      error: (err) => {

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
      price: productValue.value
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

    this.invoiceAmount -= product.price;
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

  showPaymentMethodForm(paymentMethod: string) {
    if(this.displayForm == paymentMethod) {
      this.displayForm = '';
      return;
    };

    this.displayForm = paymentMethod;
  }

  patchPaymentMethodForm(data: any) {
    let index = 0;

    if(data.bankSlip) {
      this.selectedMethods.push(this.paymentMethods.find((el: any, i: any) => {
        index = i;
        return el.value == 'bankSlip';
      }));

      this.paymentMethods.splice(index , 1);

      this.patchFormData(data.bankSlip, 'bankSlip');
    };

    if(data.creditCard) {
      this.selectedMethods.push(this.paymentMethods.find((el: any, i: any) => {
        index = i;
        return el.value == 'creditCard';
      }));

      this.paymentMethods.splice(index , 1);

      this.patchFormData(data.creditCard, 'creditCard');
    };

    if(data.debitCard) {
      this.selectedMethods.push(this.paymentMethods.find((el: any, i: any) => {
        index = i;
        return el.value == 'debitCard';
      }));

      this.paymentMethods.splice(index , 1);

      this.patchFormData(data.debitCard, 'debitCard');
    };

    if(data.pix) {
      this.selectedMethods.push(this.paymentMethods.find((el: any, i: any) => {
        index = i;
        return el.value == 'pix';
      }));

      this.paymentMethods.splice(index , 1);

      this.patchFormData(data.pix, 'pix');
    };

    if(data.carnet) {
      this.selectedMethods.push(this.paymentMethods.find((el: any, i: any) => {
        index = i;
        return el.value == 'carnet';
      }));

      this.paymentMethods.splice(index , 1);

      this.patchFormData(data.carnet, 'carnet');
    };

    if(this.selectedMethods.length > 0) {
      this.showPaymentMethodForm(this.selectedMethods[0].value);
    }
  }

  submitForm() {
    this.formSubmited = this.form.valid;
    
    if(!this.form.valid) {
      this.requestMessageService.show(
        `Preencha todos os campos obrigatórios`,
        'error'
      )
      return;
    };

    const body = this.form.getRawValue();

    if(this.selectedMethods.length) {
      this.selectedMethods.forEach(el => {
        
        switch(el.value) {
          case 'bankSlip':
            body.billing.bankSlip = {
              ...this.bankSlipFormValues,
            };
            break;
          case 'creditCard':
            body.billing.creditCard = {
              ...this.creditCardFormValues,
            }
            break;
          case 'debitCard':
            body.billing.debitCard = {
              ...this.debitCardFormValues,
            }
            break;
          case 'pix':
            body.billing.pix = {
              ...this.pixFormValues,
            }
            break;
          case 'carnet':
            body.billing.carnet = {
              ...this.carnetFormValues,
            }
            break;
          }
        });
    };

    // Conversão da data para ISOString
    body.billing.dueDate = body.billing.dueDate.toISOString();
    body.billing.referringDate = body.billing.referringDate.toISOString();
    if (body.billing.bankSlip?.discount?.dueDate ) {
      body.billing.bankSlip.discount.dueDate = body.billing.bankSlip.discount.dueDate.toISOString();
    };
    if (body.billing?.pix?.dueDate) body.billing.pix.dueDate = body.billing.pix.dueDate.toISOString();

    if(body.billing.carnet?.bankSlips.length > 0) {
      for(let i = 0; body.billing.carnet.bankSlips.length > i; i++) {
        body.billing.carnet.bankSlips[i].dueDate = 
        body.billing.carnet.bankSlips[i].dueDate.toISOString();
        if(
          body.billing.carnet.bankSlips[i].discount.discountDue instanceof Date && 
          !isNaN(body.billing.carnet.bankSlips[i].discount.discountDue)
        ) {
          body.billing.carnet.bankSlips[i].discount.discountDue = 
          body.billing.carnet?.bankSlips[i].discount.discountDue.toISOString();
        }
      }
    };
    // Fim Conversão das datas

    this.invoiceService.createInvoice(body).subscribe({
      next: (res) => {
        this.requestMessageService.show(
          `Fatura ${this.invoiceId ? 'atualizada' : 'cadastrada'} com sucesso.`,
          'success'
        );

        setTimeout(() => {
          this.router.navigate([`painel/faturas/editar/${res.data._id}`]);
        }, 1500);
      },
      error: (err) => {
        console.log(err.message.error);
      }
    });
  }

  cancel() {
    this.router.navigate(['painel/faturas']);
  }

}
