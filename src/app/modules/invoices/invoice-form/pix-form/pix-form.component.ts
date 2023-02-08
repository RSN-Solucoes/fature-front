import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pix-form',
  templateUrl: './pix-form.component.html',
  styleUrls: ['./pix-form.component.scss']
})
export class PixFormComponent implements OnInit, OnChanges, AfterViewInit {
  public pixForm!: FormGroup;
  public actualDate: Date = new Date();

  @Input() invoice!: any;
  @Input() formValue!: any;

  @Output() removeMethod: EventEmitter<any> = new EventEmitter;
  @Output() pixFormData: EventEmitter<any> = new EventEmitter;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createPixForm();

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

  ngAfterViewInit(): void {
    setInterval(() => {
      this.pixFormData.emit(this.pixForm.getRawValue());
    }, 500);
  }

  createPixForm() {
    this.pixForm = this.fb.group({
      dueDate: [null],
      description: [null],
    });

    this.setDefaultDueDate();
  }

  setDefaultDueDate() {
    this.pixForm.get('dueDate')?.setValue(this.invoice.billing.dueDate);
  }

  resetForm() {
    this.pixForm.reset();
  }

  removePixMethod(form: string) {
    this.resetForm();

    this.removeMethod.emit(form);
  }

  patchFormValues() {
    this.pixForm.patchValue({
      ...this.formValue,
    });

    if(typeof(this.formValue.dueDate) === typeof('')) {
      this.pixForm.get('dueDate')?.setValue(
        new Date(this.formValue.dueDate)
      );
    }
  }

  sendChanges() {
    this.pixForm.valueChanges.subscribe({
      next: (change) => {
        this.pixFormData.emit(change);
      }
    });
  }
}
