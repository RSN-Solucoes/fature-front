import { SubscriptionsService } from './../../../../services/subscriptions.service';
import { ClientsService } from './../../../../services/clients.service';
import { I_Client } from './../../../../core/interfaces/client.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlansService } from 'src/app/services/plans.service';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';

@Component({
  selector: 'app-subscriptions-form',
  templateUrl: './subscriptions-form.component.html',
  styleUrls: ['./subscriptions-form.component.scss']
})
export class SubscriptionsFormComponent implements OnInit {
  public formSubmited: boolean = false;
  public subscriptionsForm!: FormGroup;

  public clientsList!: I_Client[];
  public plansList: any[] = [];

  public detailsLength: number = 0;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private clientsService: ClientsService,
    private plansService: PlansService,
    private subscriptionsService: SubscriptionsService,
    private requestMessageService: RequestMessageService,
  ) { }

  ngOnInit(): void {
    this.createSubscriptionsForm();

    this.getClients();
    this.getPlans();
  }

  createSubscriptionsForm(): void {
    this.subscriptionsForm = this.fb.group({
      user: this.fb.group({
        id: [null]
      }),
      plan: this.fb.group({
        id: [null]
      }),
      details: [null],
    });
  }

  getClients(): void {
    const pagination = `page=1&limit=10`;

    this.clientsService.getClients(pagination).subscribe({
      next: (res) => {
        this.clientsList = res.data;
      },
      error: (err) => {
      }
    });
  }

  getPlans(): void {
    const pagination = `page=1&limit=10`;

    this.plansService.getPlans(pagination).subscribe({
      next: (res) => {
        res.data.forEach((el: any) => {
          this.plansList.push({
            name: el.plan.name,
            id: el.id
          });
        });
      },
      error: (err) => {
      }
    });
  }

  updateDetailsLength(): void {
    this.detailsLength = this.subscriptionsForm.get('details')?.value.length;
  }

  clearForm(): void {
    this.subscriptionsForm.reset();
  }

  submitForm(): void {
    const body = this.subscriptionsForm.getRawValue();

    this.formSubmited = this.subscriptionsForm.valid;
    
    if(!this.subscriptionsForm.valid) {
      this.requestMessageService.show(
        `Preencha todos os campos obrigatórios`,
        'error'
      )
      return;
    };
    
    this.subscriptionsService.createSubscription(body).subscribe({
      next: (res) => {
        this.requestMessageService.show(
          `Assinatura criada com sucesso.`,
          'success'
        );

        setTimeout(() => {
          this.router.navigate([`painel/assinaturas/novo`]);
        }, 1500);
      },
      error: (res) => {
      }
    });
  }

  cancel(): void {
    this.router.navigate(['painel/recorrencias']);
  }

}
