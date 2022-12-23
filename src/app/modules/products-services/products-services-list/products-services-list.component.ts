import { ProductsServicesService } from './../../../services/products-services.service';
import { I_Product } from './../../../core/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  PRODUCTS_SERVICES_TABLE_COLUMNS,
  PRODUCTS_SERVICES_TABLE_FIELDS,
  PRODUCTS_SERVICES_TABLE_PIPES,
} from './products-services-list.const';

@Component({
  selector: 'app-products-services-list',
  templateUrl: './products-services-list.component.html',
  styleUrls: ['./products-services-list.component.scss']
})
export class ProductsServicesListComponent implements OnInit {
  public productsServicesColumns = PRODUCTS_SERVICES_TABLE_COLUMNS;
  public productsServicesFields = PRODUCTS_SERVICES_TABLE_FIELDS;
  public productsServicesPipes = PRODUCTS_SERVICES_TABLE_PIPES;

  public dialogDisplay: boolean = false;

  public productsServices!: I_Product[];

  public productsServicesActions = [
    {
      label: 'Editar',
      icon: 'pi-pencil',
      action: (row: any) => {
        this.editProductService(row);
      },
    },
    {
      label: 'Deletar',
      icon: 'pi-trash',
      action: (row: any) => {
        this.deleteProductService(row);
      },
    },
  ];

  private pageIndex = 1;
  private pageLimit = 10;

  constructor(
    private router: Router,
    private productsServicesService: ProductsServicesService,
  ) { }

  ngOnInit(): void {
    this.getProductsServices();
  }

  getProductsServices() {
    const pagination = `page=${this.pageIndex}&limit=${this.pageLimit}`;
    this.productsServicesService.getProductsServices(pagination).subscribe({
      next: (res) => {
        this.productsServices = res.data;
      },
      error: (err) => {
      }
    });
  }

  navigateToForm(type: string) {
    this.router.navigate([`painel/produtos-e-servicos/${type}/novo`]);
  }

  editProductService(row: any) {
    this.router.navigate([
      `painel/produtos-e-servicos/${row.type === 'product'
        ? 'produto'
        : 'servico'}/editar/`, row.id
      ]);
  }

  deleteProductService(row: any) {
    this.productsServicesService.deleteProductService(row.id).subscribe({
      next: (res) => {
        alert('Produto ou serviço excluído com sucesso!');
      },
      error: (err) => {
      }
    });
  }
}