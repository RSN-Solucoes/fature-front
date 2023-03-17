import { ClientsService } from './../../../../services/clients.service';
import { I_Client } from './../../../../core/interfaces/client.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriptions-form',
  templateUrl: './subscriptions-form.component.html',
  styleUrls: ['./subscriptions-form.component.scss']
})
export class SubscriptionsFormComponent implements OnInit {

  public subscriptionsForm!: FormGroup;

  public clientsList!: I_Client[];
  public plansList: any[] = [
    {
      title: 'Plano 1'
    },
    {
      title: 'Plano 2'
    },
    {
      title: 'Plano 3'
    },
  ];

  public detailsLength: number = 0;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private clientsService: ClientsService,
  ) { }

  ngOnInit(): void {
    this.createSubscriptionsForm();

    this.getClients();
  }

  createSubscriptionsForm(): void {
    this.subscriptionsForm = this.fb.group({
      name: [null],
      plan: [null],
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

  updateDetailsLength(): void {
    this.detailsLength = this.subscriptionsForm.get('details')?.value.length;
  }

  clearForm(): void {
    this.subscriptionsForm.reset();
  }

  submitForm(): void {
    alert('assinante criado');
  }

  cancel(): void {
    this.router.navigate(['painel/recorrencias']);
  }

}
