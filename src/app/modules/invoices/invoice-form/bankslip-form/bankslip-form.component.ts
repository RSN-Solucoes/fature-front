import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { type } from 'os';
import { DISCOUNT_TYPE_SELECT_LIST } from '../invoice-form.const';

@Component({
  selector: 'app-bankslip-form',
  templateUrl: './bankslip-form.component.html',
  styleUrls: ['./bankslip-form.component.scss']
})
export class BankslipFormComponent implements OnInit, OnChanges, AfterViewInit {
  public bankSlipForm!: FormGroup;
  public discountTypeSelectItems = DISCOUNT_TYPE_SELECT_LIST;
  public messages: string[] = [];
  public actualDate: Date = new Date();
  public maxDiscountDate: Date = new Date();

  @Input() invoice!: any;
  @Input() formValue!: any;

  @Output() removeMethod: EventEmitter<any> = new EventEmitter;
  @Output() bankSlipFormData: EventEmitter<any> = new EventEmitter;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createBankSlipForm();

    this.sendChanges();

    if(this.formValue) {
      this.patchFormValues();
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.['invoice']) {
      this.invoice = changes?.['invoice'].currentValue;
    };

    this.getMaxDiscountDate();
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.bankSlipFormData.emit(this.bankSlipForm.getRawValue());
    }, 500);
  }

  createBankSlipForm() {
    this.bankSlipForm = this.fb.group({
      messages: this.fb.array([]),
      description: [null],
      discount: this.fb.group({
        enabled: [false],
        mode: [{value: null, disabled: true}],
        amount: [{value: null, disabled: true}],
        dueDate: [{value: null, disabled: true}],
      }),
      fees: this.fb.group({
        enabled: [false],
        penaltyRate: [{value: null, disabled: true}],
        interestRate: [{value: null, disabled: true}],
      })
    });

    if(this.formValue?.discount?.enabled) {
      this.toggleSwitchFields(
        ['discount.mode','discount.amount','discount.dueDate'],
        true
      );
    }

    if(this.formValue?.fees?.enabled) {
      this.toggleSwitchFields(
        ['fees.interestRate','fees.penaltyRate'],
        true
      );
    }
  }

  getMaxDiscountDate() {
    this.maxDiscountDate.setDate(
      new Date(this.invoice.billing.dueDate).getDate() - 1
    );
  }

  toggleSwitchFields(fields: string[], toggle: boolean) {
    fields.forEach((field) => {
      if (toggle) {
        this.bankSlipForm.get(field)?.enable();
        this.bankSlipForm.get(field)?.updateValueAndValidity();
      } else {
        this.bankSlipForm.get(field)?.disable();
        this.bankSlipForm.get(field)?.reset();
      }
    });
  }

  resetForm() {
    this.removeMessage(-1);

    while(this.messages.length) {
      this.messages.pop();
    };

    this.bankSlipForm.reset();
  }

  removeBankSlipMethod(form: string) {
    this.resetForm();

    this.removeMethod.emit(form);
  }

  addMessage(message: HTMLInputElement) {
    if (!message.value) return;
    if (this.messages.length == 9) return;

    const messagesBankSlipForm = this.bankSlipForm.controls['messages'] as FormArray;

    this.messages.push(message.value);
    messagesBankSlipForm.push(new FormControl(message));

    message.value = '';
  }

  removeMessage(index: number) {
    const messagesForm = this.bankSlipForm.controls['messages'] as FormArray;

    if(index === -1) {
      while(messagesForm.length !== 0) {
        messagesForm.removeAt(0);
      };
    };

    messagesForm.removeAt(index);
    this.messages.splice(index, 1);
  }

  patchFormValues() {
    this.bankSlipForm.patchValue({
      ...this.formValue,
    });

    if(typeof(this.formValue.discount.dueDate) === typeof('')) {
      this.bankSlipForm.get('discount.dueDate')?.setValue(
        new Date(this.formValue.discount.dueDate)
      );
    }

    const messagesForm = this.bankSlipForm.controls['messages'] as FormArray;

    this.formValue?.messages?.forEach((message: string) => {
      messagesForm.push(new FormControl(message));
      this.messages.push(message);
    });
  }

  sendChanges() {
    this.bankSlipForm.valueChanges.subscribe({
      next: (change) => {
        this.bankSlipFormData.emit(change);
      }
    });
  }
}