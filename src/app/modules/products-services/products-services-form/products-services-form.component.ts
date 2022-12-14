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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.activatedRoute.params.subscribe({
      next: (res) => {
        res['type'] === 'produto' ? this.productForm = true
        : this.productForm = false;
      },
    });

  }

  createForm() {
    this.productsServicesForm = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      quantity: [null],
      description: [null],
    })
  }

  submitForm() {
    this.formSubmited = !this.productsServicesForm.valid;

    if(!this.productsServicesForm.valid) return;

    let body = this.productsServicesForm.getRawValue();

    this.productForm ? body = { ...body, type: 'product' }
      : body = { ...body, type: 'service' };

    
  }

  clearForm() {
    this.productsServicesForm.reset();
  }

  cancel() {
    this.router.navigate(['painel/produtos-e-servicos']);
  }

}
