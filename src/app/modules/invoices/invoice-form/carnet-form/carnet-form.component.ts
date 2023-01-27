import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-carnet-form',
  templateUrl: './carnet-form.component.html',
  styleUrls: ['./carnet-form.component.scss']
})
export class CarnetFormComponent implements OnInit, OnChanges {
  public carnetForm!: FormGroup;

  public messages: string[] = [];
  public bankSlips: any[] = [];
  public emptyDate: Date[] = [];
  public actualDate: Date = new Date();

  @Input() invoice!: any;
  @Input() formValue!: any;

  @Output() removeMethod: EventEmitter<any> = new EventEmitter;
  @Output() carnetFormData: EventEmitter<any> = new EventEmitter;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createCarnetForm();

    this.sendChanges();

    if(this.formValue) {
      this.patchFormValues();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.['invoice']) {
      this.invoice = changes?.['invoice'].currentValue;
    };
  }

  createCarnetForm() {
    this.carnetForm = this.fb.group({
      description: [null],
      installments: [null],
      messages: this.fb.array([]),
      fees: this.fb.group({
        enabled: [false],
        penaltyRate: [{value: null, disabled: true}],
        interestRate: [{value: null, disabled: true}],
      }),
      discount: this.fb.group({
        enabled: [false],
        amount: [{value: null, disabled: true}],
        limitDay: [{value: null, disabled: true}],
      }),
      bankSlips: this.fb.array([]),
    });

    if(this.formValue?.discount?.enabled) {
      this.toggleSwitchFields(
        ['discount.amount','discount.limitDay'],
        true
      );
    };

    if(this.formValue?.fees?.enabled) {
      this.toggleSwitchFields(
        ['fees.penaltyRate','fees.interestRate'],
        true
      );
    };
  }

  toggleSwitchFields(fields: string[], toggle: boolean) {
    fields.forEach((field) => {
      if (toggle) {
        this.carnetForm.get(field)?.enable();
        this.carnetForm.get(field)?.updateValueAndValidity();
      } else {
        this.carnetForm.get(field)?.disable();
        this.carnetForm.get(field)?.reset();
      }
    });
  }

  generateBankSlips(installments: number, discountDue: number, discountValue: number) {
    if(!installments || !this.invoice.billing.dueDate) {
      return alert("preencha todos os campos para gerar os boletos!!!");
    };

    const carnetInstallments = installments;
    const bankSlips = this.carnetForm.controls['bankSlips'] as FormArray;

    const formatCarnetDates = (
      firstDate: any,
      totalMonths: number
    ) => {
      const dates: any = [];

      for (let i = 0; i < totalMonths; i++) {
        if (i == 0) dates.push(firstDate.toISOString());
        else {
          const tempDate = new Date(firstDate);

          tempDate.setMonth(tempDate.getMonth() + i);

          dates.push(tempDate.toISOString());
        }
      }
      return dates
    };

    const bankSlipDueDates = formatCarnetDates(
      this.invoice.billing.dueDate,
      carnetInstallments
    );

    const discountDueDates = discountDue ? 
    formatCarnetDates(
      new Date
      (
        new Date().getFullYear(),
        new Date().getMonth(),
        discountDue
      ),
      carnetInstallments
    ) : 
    null;

    const bankSlipAmount = this.invoice.billing.amount / carnetInstallments;

    for(let j = 0; j < carnetInstallments; j++) {
      this.bankSlips.push({
        dueDate: bankSlipDueDates[j],
        amount: bankSlipAmount,
        messages: this.messages,
        discount: {
          enabled: this.carnetForm.get('discount.enabled')?.value,
          amount: discountValue ? discountValue : null,
        }
      });
      if(discountDue) {
        this.emptyDate.push(discountDueDates[j]);
      };
      this.bankSlips[j].discount.discountDue = this.emptyDate[j];
    };
    
    this.bankSlips.forEach(el => {
      bankSlips.push(new FormControl(el));
    });
    
    // Conversão das datas para os inputs da tela
    this.bankSlips.map((el, index) => {
      el.dueDate = new Date(el.dueDate);
      el.discount.discountDue = new Date(el.discount.discountDue);
      el.installmentNumber = index + 1;
    });

    if(this.emptyDate.length) {
      this.emptyDate = this.emptyDate.map((el) => {
         return new Date(el);
      });
    };
  }

  addMessage(message: HTMLInputElement) {
    if (!message.value) return;
    if (this.messages.length == 9) return;

    const messages = this.carnetForm.controls['messages'] as FormArray;

    this.messages.push(message.value);
    messages.push(new FormControl(message));

    message.value = '';
  }
  
  removeMessage(index: number) {
    const messages = this.carnetForm.controls['messages'] as FormArray;

    if(index === -1) {
      while(messages.length !== 0) {
        messages.removeAt(0);
      };
    };

    messages.removeAt(index);
    this.messages.splice(index, 1);
  }

  resetForm() {
    const bankSlips = this.carnetForm.controls['bankSlips'] as FormArray;

    this.removeMessage(-1);

    this.carnetForm.reset();

    while(this.messages.length) {
      this.messages.pop();
    };

    while(bankSlips.length) {
      bankSlips.removeAt(0);
    };

    while(this.bankSlips.length) {
      this.bankSlips.pop();
    };

  }

  removeCarnetMethod(form: string) {
    this.resetForm();

    this.removeMethod.emit(form);
  }

  patchFormValues() {
    const messages = this.carnetForm.controls['messages'] as FormArray;
    const bankSlips = this.carnetForm.controls['bankSlips'] as FormArray;

    this.carnetForm.patchValue({
      description: this.formValue.description,
      installments: this.formValue.installments || this.formValue.bankSlips.length,
      fees: {
        enabled: this.formValue.fees.enabled,
        penaltyRate: this.formValue.penaltyRate,
        interestRate: this.formValue.interestRate,
      },
      discount: {
        enabled: this.formValue?.discount?.enabled,
        amount: this.formValue?.discount?.amount,
        limitDay: this.formValue?.discount?.limitDay,
      },
    });

    if(this.formValue?.messages?.length > 0) {
      this.formValue.messages.forEach((message: string) => {
        messages.push(new FormControl(message));
        this.messages.push(message);
      });
    };

    if(this.formValue?.bankSlips[0]?.messages?.length > 0) {
      this.formValue.bankSlips[0].messages.forEach((message: string) => {
        messages.push(new FormControl(message));
        this.messages.push(message);
      });
    };

    if(this.formValue?.bankSlips) {
      this.formValue.bankSlips.forEach((bankSlip: any) => {
        if(typeof(bankSlip.dueDate) === typeof('')) {
          bankSlip.dueDate = new Date(bankSlip.dueDate)
        };
        if(typeof(bankSlip.discount.discountDue) === typeof('')) {
          bankSlip.discount.discountDue = new Date(bankSlip.discount.discountDue)
        };
        bankSlips.push(new FormControl(bankSlip));
        this.bankSlips.push(bankSlip);
      });
    };
  }

  sendChanges() {
    this.carnetForm.valueChanges.subscribe({
      next: (change) => {
        this.carnetFormData.emit(change);
      }
    });
  }

}
