import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  public productsForm!: FormGroup;
  public formSubmited: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.createProductsForm();
  }

  createProductsForm() {
    this.productsForm = this.fb.group({
      productName: [null, Validators.required],
      value: [null, Validators.required],
      quantity: [null, Validators.required],
      description: [null],
    });
  }

  submitForm() {
    this.formSubmited = !this.productsForm.valid;

    if(!this.productsForm.valid) return;

    alert('Criar produto');
  }

  clearForm() {
    this.productsForm.reset();
  }

  cancel() {
    this.router.navigate(['painel/produtos-e-servicos']);
  }

}
