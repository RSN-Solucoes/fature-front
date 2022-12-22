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
  public carnetForm!: FormGroup;

  public displayForm!: string;

  // Carnet
  public messages: string[] = [];

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

    this.carnetForm = this.fb.group({
      messages: this.fb.array([]),
    })
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
    this.clientsService.getClients().subscribe({
      next: (res) => {
        this.clients = res.data;
      },
      error: (err) => {
      }
    });
  }

  getProductsServices() {
    this.productsServicesService.getProductsServices().subscribe({
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

  cancel() {
    this.router.navigate(['painel/faturas']);
  }

}
