import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FREQUENCY_SELECT_LIST, WEEKLY_DAYS_SELECT_LIST } from '../plans.const';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';
import { PlansService } from 'src/app/services/plans.service';

@Component({
  selector: 'app-plans-form',
  templateUrl: './plans-form.component.html',
  styleUrls: ['./plans-form.component.scss']
})
export class PlansFormComponent implements OnInit {
  public planId = this.activatedRoute.snapshot.paramMap.get('id') || '';
  public plan!: any;

  public formSubmited: boolean = false;
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
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private plansService: PlansService,
    private requestMessageService: RequestMessageService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.createPlansForm();

    if(this.planId) {
      this.getPlanData();
    };
  }
  
  createPlansForm(): void {
    this.plansForm = this.fb.group({
      plan: this.fb.group({
        name: [null],
        description: [null],
        enableCycle: [false],
        cycle: [null],
        subLimit: [null],
      }),
      billing: this.fb.group({
        amount: [null],
        frequency: ['monthly'],
        dueDate: [null],
        chargeNow: [true],
        proporcionalAmount: [true],
        chargeDate: [null],
        subTax: [null],
      }),
    });
  }

  getPlanData(): void {
    this.plansService.getPlan(this.planId).subscribe({
      next: (res: any)  => {
        this.plan = res.data;
        this.plansForm.patchValue({
          ...this.plan,
        });

        this.checkCycleValue();
      },
      error: (err) => {
      }
    });
  }

  updateDescriptionLength(): void {
    this.descriptionLength = this.plansForm.get('plan.description')?.value.length;
  }

  checkCycleValue(): void {
    if(this.plansForm.get('plan.cycle')?.value !== 0) {
      this.plansForm.get('plan.subLimit')?.addValidators(Validators.required);
    } else {
      this.plansForm.get('plan.subLimit')?.removeValidators(Validators.required);
    }
  }

  clearForm(): void {
    this.plansForm.reset();
  }

  submitForm(): void {
    const body = this.plansForm.getRawValue();

    this.formSubmited = this.plansForm.valid;
    
    if(!this.plansForm.valid) {
      this.requestMessageService.show(
        `Preencha todos os campos obrigatórios`,
        'error'
      )
      return;
    };

    this.plansService.createPlan(body).subscribe({
      next: (res) => {
        this.requestMessageService.show(
          `Plano criado com sucesso.`,
          'success'
        );

        setTimeout(() => {
          this.router.navigate([`painel/recorrencias/novo`]);
        }, 1500);
      },
      error: (err) => {
      }
    });
  }

  cancel(): void {
    this.router.navigate(['painel/recorrencias']);
  }

}
