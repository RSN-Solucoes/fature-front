import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientsForm!: FormGroup;
  formSubmited: boolean = false;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createClientsForm();
  }

  createClientsForm() {
    this.clientsForm = this.fb.group({
      clientName: [null],
      document: [null],
      email: [null],
      contactNumber: [null],
      cep: [null],
      address: [null],
      addressNumber: [null],
      addressComplement: [null],
      district: [null],
      state: [null],
      city: [null],
    });
  }

}
