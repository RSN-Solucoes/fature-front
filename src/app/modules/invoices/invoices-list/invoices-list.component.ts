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

  public invoices: any[] = [];

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

  transformPaymentMethods(invoice: any) {
    const methods: string[] = [];

    if (invoice.billing.bankSlip) {
      methods.push('Boleto');
    }
    if (invoice.billing.carnet) {
      methods.push('Carnê');
    }
    if (invoice.billing.creditCard) {
      methods.push('Cartão de crédito');
    }
    if (invoice.billing.debitCard) {
      methods.push('Cartão de débito');
    }
    if (invoice.billing.pix) {
      methods.push('Pix');
    }

    return methods.join(' / ');
  }

  getInvoices() {
    const pagination = `page=${this.pageIndex}&limit=${this.pageLimit}`;
    this.invoiceService.getInvoices(pagination).subscribe({
      next: (res) => {
        res.data.forEach((el: any) => {
          this.invoices.push(
            {
              user: el.user.name,
              referringDate: el.billing.referringDate,
              dueDate: el.billing.dueDate,
              paymentMethod: this.transformPaymentMethods(el),
              status: el.status,
              paid: el.payment.paid,
              value: el.billing.amount
            }
          );
        });
      },
      error: (err) => {
      }
    });
  }

  navigateToForm() {
    this.router.navigate(['painel/faturas/novo']);
  }

}
