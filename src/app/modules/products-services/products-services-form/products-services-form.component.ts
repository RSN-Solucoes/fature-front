import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-services-form',
  templateUrl: './products-services-form.component.html',
  styleUrls: ['./products-services-form.component.scss']
})
export class ProductsServicesFormComponent implements OnInit {
  public productsServicesForm!: FormGroup;
  public formSubmited: boolean = false;

  public productForm!: boolean;
  public serviceForm!: boolean;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.productsServicesForm = this.fb.group({
      productName: [null],
      value: [null],
      quantity: [null],
      description: [null],
    })
  }

  submitForm() {
    this.formSubmited = !this.productsServicesForm.valid;

    if(!this.productsServicesForm.valid) return;

    alert('Criar produto');
  }

  clearForm() {
    this.productsServicesForm.reset();
  }

  cancel() {
    this.router.navigate(['painel/produtos-e-servicos']);
  }

}
