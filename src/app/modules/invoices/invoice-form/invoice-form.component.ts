import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { UFS_SELECT_LIST } from 'src/app/shared/constants/ufs.const';
import { ProductsServicesService } from 'src/app/services/products-services.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  public clientDataForm!: FormGroup;
  public formSubmited: boolean = false;

  public ufSelectItems: any = UFS_SELECT_LIST;

  // Users
  public clients: any[] = [];
  public selectedClient!: any;

  // Products
  public productsServices: any[] = [];

  // Forms
  public carnetForm!: FormGroup;

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
    this.createClientDataForm();

    this.getClients();
    this.getProductsServices();
  }

  createClientDataForm() {
    this.clientDataForm = this.fb.group({
      name: [null],
      corporateReason: [null],
      email: [null],
      tel: [null],
      cep: [null],
      address: [null],
      addressNumber: [null],
      addressComplement: [null],
      district: [null],
      uf: [null],
      city: [null],

      product: [null],
    });

    this.carnetForm = this.fb.group({
      messages: this.fb.array([]),
    })
  }

  selectClient(user: any) {
    this.selectedClient = user;

    console.log(this.selectedClient)

    this.clientDataForm.patchValue({
      name: user.name,
      corporateReason: user.corporateReason,
      email: user.email,
      tel: user.tel,
      cep: user.cep,
      address: user.address,
      addressNumber: user.addressNumber,
      addressComplement: user.addressComplement,
      district: user.district,
      uf: user.uf,
      city: user.city,
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

  cancel() {
    this.router.navigate(['painel/faturas']);
  }

}
