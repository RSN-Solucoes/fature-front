import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { INSTALLMENTS_SELECT_LIST } from '../invoice-form.const';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.scss']
})
export class CreditFormComponent implements OnInit {
  public creditCardForm!: FormGroup;
  public installmentsSelectItems = INSTALLMENTS_SELECT_LIST;

  @Input() formValue!: any;

  @Output() removeMethod: EventEmitter<any> = new EventEmitter;
  @Output() creditCardFormData: EventEmitter<any> = new EventEmitter;
  
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createCreditCardForm();

    this.sendChanges();

    if(this.formValue) {
      this.patchFormValues();
    }
  }

  createCreditCardForm() {
    this.creditCardForm = this.fb.group({
      description: [null],
      maxInstallmentsQuantity: [null],
      fees: this.fb.group({
        enabled: [false],
        interestRate: [{value: null, disabled: true}],
      })
    });

    if(this.formValue?.fees?.enabled) {
      this.toggleSwitchFields(
        ['fees.interestRate'],
        true
      );
    }
  }

  toggleSwitchFields(fields: string[], toggle: boolean) {
    fields.forEach((field) => {
      if (toggle) {
        this.creditCardForm.get(field)?.enable();
        this.creditCardForm.get(field)?.updateValueAndValidity();
      } else {
        this.creditCardForm.get(field)?.disable();
        this.creditCardForm.get(field)?.reset();
      }
    });
  }

  resetForm() {
    this.creditCardForm.reset();
  }

  removeCreditCardMethod(form: string) {
    this.resetForm();

    this.removeMethod.emit(form);
  }

  patchFormValues() {
    this.creditCardForm.patchValue({
      ...this.formValue,
    });
  }

  sendChanges() {
    this.creditCardForm.valueChanges.subscribe({
      next: (change) => {
        this.creditCardFormData.emit(change);
      }
    });
  }
}
