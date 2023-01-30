import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-debit-form',
  templateUrl: './debit-form.component.html',
  styleUrls: ['./debit-form.component.scss']
})
export class DebitFormComponent implements OnInit, AfterViewInit {
  public debitCardForm!: FormGroup;

  @Input() formValue!: any;

  @Output() removeMethod: EventEmitter<any> = new EventEmitter;
  @Output() debitCardFormData: EventEmitter<any> = new EventEmitter;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createDebitCardForm();

    this.sendChanges();

    if(this.formValue) {
      this.patchFormValues();
    }
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.debitCardFormData.emit(this.debitCardForm.getRawValue());
    }, 500);
  }

  createDebitCardForm() {
    this.debitCardForm = this.fb.group({
      description: [null],
    });
  }

  resetForm() {
    this.debitCardForm.reset();
  }

  removeDebitCardMethod(form: string) {
    this.resetForm();

    this.removeMethod.emit(form);
  }

  patchFormValues() {
    this.debitCardForm.patchValue({
      ...this.formValue,
    });
  }

  sendChanges() {
    this.debitCardForm.valueChanges.subscribe({
      next: (change) => {
        this.debitCardFormData.emit(change);
      }
    });
  }
}
