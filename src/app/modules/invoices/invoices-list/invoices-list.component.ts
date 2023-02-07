import { InvoiceService } from './../../../services/invoice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  INVOICES_COLUMNS,
  INVOICES_FIELDS,
  INVOICES_PIPES,
} from './invoices-lis.const';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';
import { ConfirmationService } from 'primeng/api';

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
      action: (row: any) => {
        this.editInvoice(row);
      },
    },
    {
      label: 'Cancelar',
      icon: 'pi-ban',
      action: (row: any, event: Event) => {
        if(row.status !== 'Pendente') {
          this.requestMessageService.show(
            `Não é possível cancelar uma fatura já cancelada ou estornada`,
            'error'
          )
          return;
        }
        this.deleteInvoice(row, event);
      },
    },
  ];

  public pageIndex = 1;
  public pageLimit = 10;
  public totalRecords = 0;

  constructor(
    private router: Router,
    private invoiceService: InvoiceService,
    private requestMessageService: RequestMessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.getInvoices(this.pageIndex, this.pageLimit);
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

  getInvoices(pageIndex: number, pageLimit: number) {
    const pagination = `page=${pageIndex}&limit=${pageLimit}`;
    this.invoiceService.getInvoices(pagination).subscribe({
      next: (res) => {
        this.invoices = [];
        this.totalRecords = res.pagination.totalItems;
        
        res.data.forEach((el: any) => {
          this.invoices.push(
            {
              user: el.user.name,
              referringDate: el.billing.referringDate,
              dueDate: el.billing.dueDate,
              paymentMethod: this.transformPaymentMethods(el),
              status: el.status,
              paid: el.payment.paid,
              value: el.billing.amount,
              id: el.id,
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

  editInvoice(row: any) {
    this.router.navigate([`painel/faturas/editar/${row.id}`]);
  }

  deleteInvoice(row: any, event: Event) {
    this.confirmationService.confirm({
      target: event.target ? event.target : undefined,
      message: 'Deseja cancelar a fatura?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.invoiceService.deleteInvoice(row.id).subscribe({
          next: (res) => {
            this.requestMessageService.show(
              `Fatura cancelada com sucesso`,
              'success'
            )
          },
          error: (err) => {
          }
        });
      }
    });
  }

  loadMoreItems(pageLimit: number) {
    this.getInvoices(this.pageIndex, pageLimit);
  }

}
