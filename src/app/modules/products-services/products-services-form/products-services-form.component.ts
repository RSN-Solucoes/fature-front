import { ProductsServicesService } from './../../../services/products-services.service';
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

  public productServiceId = this.activatedRoute.snapshot.paramMap.get('id') || '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productsServicesService: ProductsServicesService,
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.activatedRoute.params.subscribe({
      next: (res) => {
        res['type'] === 'produto' ? this.productForm = true
        : this.productForm = false;
      },
    });

    if(this.productServiceId) {
      this.getProductService(this.productServiceId);
    }

  }

  createForm() {
    this.productsServicesForm = this.fb.group({
      name: [null, Validators.required],
      price: [null, Validators.required],
      quantity: [null],
      description: [null],
    })
  }

  getProductService(id: string) {
    this.productsServicesService.getProductService(id).subscribe({
      next: (res) => {
        this.productForm
          ? this.productsServicesForm.patchValue({
            name: res.data.name,
            price: res.data.price,
            quantity: res.data.quantity,
            description: res.data.description,
          })
          : this.productsServicesForm.patchValue({
            name: res.data.name,
            price: res.data.price,
            description: res.data.description,
          })
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  submitForm() {
    this.formSubmited = !this.productsServicesForm.valid;

    if(!this.productsServicesForm.valid) return;

    let body = this.productsServicesForm.getRawValue();

    this.productForm ? body = { ...body, type: 'product' }
      : body = { ...body, type: 'service' };

    const request = !this.productServiceId
      ? this.productsServicesService.createProductService(body)
      : this.productsServicesService.updateProductService(this.productServiceId, body);

    request.subscribe({
      next: (res) => {
        alert('Produto ou serviço criado/atualizado');

        setTimeout(() => {
          this.cancel();
        }, 1500);
      },
      error: (err) => {
      }
    });
  }

  clearForm() {
    this.productsServicesForm.reset();
  }

  cancel() {
    this.router.navigate(['painel/produtos-e-servicos']);
  }

}
