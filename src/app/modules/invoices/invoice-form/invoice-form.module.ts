import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { InvoiceFormComponent } from './invoice-form.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { BankslipFormComponent } from './bankslip-form/bankslip-form.component';
import { CreditFormComponent } from './credit-form/credit-form.component';
import { DebitFormComponent } from './debit-form/debit-form.component';
import { PixFormComponent } from './pix-form/pix-form.component';
import { CarnetFormComponent } from './carnet-form/carnet-form.component';

@NgModule({
  declarations: [
    InvoiceFormComponent, 
    BankslipFormComponent, CreditFormComponent, DebitFormComponent, PixFormComponent, CarnetFormComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    NavbarModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    NgxMaskModule,
    CalendarModule,
    AccordionModule,
    OverlayPanelModule,
    InputSwitchModule,
  ],
  exports: [InvoiceFormComponent],
})
export class InvoiceFormModule { }
