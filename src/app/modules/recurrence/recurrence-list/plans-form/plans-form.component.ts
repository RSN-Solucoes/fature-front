import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FREQUENCY_SELECT_LIST, WEEKLY_DAYS_SELECT_LIST } from './plans.const';

@Component({
  selector: 'app-plans-form',
  templateUrl: './plans-form.component.html',
  styleUrls: ['./plans-form.component.scss']
})
export class PlansFormComponent implements OnInit {

  public plansForm!: FormGroup;

  public descriptionLength: number = 0;
  public frequencySelectItems = FREQUENCY_SELECT_LIST;
  public weeklyDaysSelectItems = WEEKLY_DAYS_SELECT_LIST;
  public options: any[] = [
    {
      name: 'Sim',
      value: true
    },
    {
      name: 'Não',
      value: false
    }
  ]

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createPlansForm();
  }
  
  createPlansForm(): void {
    this.plansForm = this.fb.group({
      name: [null],
      description: [null],
      frequency: ['monthly'],
      enableSubscriptionTerm: [null],
    });
  }

  updateDescriptionLength(): void {
    this.descriptionLength = this.plansForm.get('description')?.value.length;
  }

  clearForm(): void {
    this.plansForm.reset();
  }

  submitForm(): void {
    alert('plano criado');
  }

  cancel(): void {
    this.router.navigate(['painel/recorrencias']);
  }

}
