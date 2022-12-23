import { InvoiceService } from './../../../services/invoice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  INVOICES_COLUMNS,
  INVOICES_FIELDS,
  INVOICES_PIPES,
} from './invoices-lis.const';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {
  public invoicesColumns = INVOICES_COLUMNS;
  public invoicesFields = INVOICES_FIELDS;
  public invoicesPipes = INVOICES_PIPES;

  public invoices!: any[];

  public invoicesActions = [
    {
      label: 'Visualizar',
      icon: 'pi-eye',
      action: (id: string) => {
        console.log(id);
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

  private pageIndex = 1;
  private pageLimit = 10;

  constructor(
    private router: Router,
    private invoiceService: InvoiceService,
  ) { }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices() {
    const pagination = `page=${this.pageIndex}&limit=${this.pageLimit}`;
    this.invoiceService.getInvoices(pagination).subscribe({
      next: (res) => {
        this.invoices = res.data;
        console.log(this.invoices)
      },
      error: (err) => {
      }
    });
  }

  navigateToForm() {
    this.router.navigate(['painel/faturas/novo']);
  }

}
