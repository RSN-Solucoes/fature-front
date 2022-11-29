import { Component, OnInit } from '@angular/core';
import {
  PRODUCTS_SERVICES_TABLE_COLUMNS,
  PRODUCTS_SERVICES_TABLE_FIELDS,
  PRODUCTS_SERVICES_TABLE_PIPES,
  PRODUCTS_SERVICES_VALUE_SELECT_LIST,
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

  public productsServices = PRODUCTS_SERVICES_VALUE_SELECT_LIST;

  public productsServicesActions = [
    {
      label: 'Visualizar',
      icon: 'pi-eye',
      action: () => {
        alert('Visualizar');
      },
    },
    {
      label: 'Deletar',
      icon: 'pi-trash',
      action: () => {
        alert('Deletar');
      },
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
