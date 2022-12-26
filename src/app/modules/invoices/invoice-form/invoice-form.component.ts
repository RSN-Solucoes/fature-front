import { ProductsServicesFormComponent } from './../../products-services/products-services-form/products-services-form.component';
import { I_Client } from './../../../core/interfaces/client.interface';
import { I_Product } from './../../../core/interfaces/product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { UFS_SELECT_LIST } from 'src/app/shared/constants/ufs.const';
import { ProductsServicesService } from 'src/app/services/products-services.service';
import { Dropdown } from 'primeng/dropdown';
import { InputNumber } from 'primeng/inputnumber';
import { DISCOUNT_TYPE_SELECT_LIST, INSTALLMENTS_SELECT_LIST } from './invoice-form.const';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  public form!: FormGroup;
  public formSubmited: boolean = false;

  public ufSelectItems: any = UFS_SELECT_LIST;

  // Users
  public clients: I_Client[] = [];
  public selectedClient!: any;

  // Products
  public productsServices: I_Product[] = [];

  public selectedProducts: any[] = [];

  // Forms
  public clientDataForm!: FormGroup;
  public productForm!: FormGroup;

  public debitCardForm!: FormGroup;
  public pixForm!: FormGroup;
  
  public displayForm!: string;
  
  // Carnet
  public messages: string[] = [];
  public carnetForm!: FormGroup;
  
  // BankSlip
  public bankSlipForm!: FormGroup;
  public discountTypeSelectItems = DISCOUNT_TYPE_SELECT_LIST;
  
  //CreditCard
  public creditCardForm!: FormGroup;
  public installmentsSelectItems = INSTALLMENTS_SELECT_LIST;

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
        bankSlip: [null],
        creditCard: [null],
        debitCard: [null],
        pix: [null],
        carnet: [null],
      }),
    });

    this.clientDataForm = this.fb.group({
      name: [null],
      email: [null],
      tel: [null],
      cep: [null],
      address: [null],
      addressNumber: [null],
      addressComplement: [null],
      district: [null],
      uf: [null],
      city: [null],
      id: [null],
    });

    this.bankSlipForm = this.fb.group({
      messages: [null],
      description: [null],
      discount: this.fb.group({
        enabled: [null],
        mode: [null],
        amount: [null],
        dueDate: [null],
      }),
      fees: this.fb.group({
        enabled: [null],
        penaltyRate: [null],
        interestRate: [null],
      })
    });

    this.creditCardForm = this.fb.group({
      description: [null],
      maxInstallmentsQuantity: [null],
      fees: this.fb.group({
        enabled: [null],
        interestRate: [null],
      })
    });

    this.debitCardForm = this.fb.group({
      description: [null],
    });

    this.pixForm = this.fb.group({
      expiration: [null],
      description: [null],
    });

    this.carnetForm = this.fb.group({
      description: [null],
      fees: this.fb.group({
        enabled: [null],
        penaltyRate: [null],
        interestRate: [null],
      }),
      bankSlips: this.fb.array([]),
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

  addProduct(productDropdown: Dropdown, productQuantity: InputNumber, productValue: InputNumber) {
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

    productDropdown.writeValue(undefined);
    productQuantity.writeValue(undefined);

    console.log(this.form.getRawValue());
  }

  removeProduct(index: number) {
    const product = this.selectedProducts[index];
    const productsForm = this.form.controls['products'] as FormArray;

    this.selectedProducts.splice(index, 1);

    productsForm.removeAt(index);
  }

  calculateProductValue(productDropdown: Dropdown, productQuantity: InputNumber, productValue: InputNumber) {
    if (!productDropdown.value) return;

    let value = productDropdown.value.price * productQuantity.value;

    productValue.writeValue(value)
  }

  addMessage(message: HTMLInputElement) {
    if (!message.value) return;
    if (this.messages.length == 9) return;

    const messagesForm = this.carnetForm.controls['messages'] as FormArray;

    messagesForm.push(new FormControl(message));

    this.messages.push(message.value);

    message.value = '';
  }

  removeMessage(index: number) {
    const messagesForm = this.carnetForm.controls['messages'] as FormArray;
    messagesForm.removeAt(index);

    this.messages.splice(index, 1);
  }

  showPaymentMethodForm(paymentMethod: string) {
    if(this.displayForm == paymentMethod) {
      this.displayForm = '';
      return;
    };

    this.displayForm = paymentMethod;
  }

  resetForm(form: FormGroup) {
    form.reset();
  }

  submitForm() {
    console.log(this.form.getRawValue());
  }

  cancel() {
    this.router.navigate(['painel/faturas']);
  }

}
