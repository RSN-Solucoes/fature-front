import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss']
})
export class CustomizationComponent implements OnInit {

  public color!: string;
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.createCustomizationForm();
  }

  createCustomizationForm() {
    this.form = this.fb.group({
      color: this.fb.group({
        background: [null],
        button: [null]
      }),
      url: [null],
    });
  }

  updateColorField(color: string, type: string) {
    if(type === 'button') {
      this.form.patchValue({
        color: {
          button: color
        }
      });
    };
    if(type === 'background') {
      this.form.patchValue({
        color: {
          background: color
        }
      });
    };
  }

  clearForm() {
    alert('clear form');
  }

  submitForm() {
    alert('submit form');
  }

}
