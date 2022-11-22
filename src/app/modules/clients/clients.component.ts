import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UF_SELECT_LIST } from 'src/app/shared/constants/ufs.const';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public clientsForm!: FormGroup;
  public formSubmited: boolean = false;

  public ufSelectItems: any = UF_SELECT_LIST;

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
      name: [null],
      document: [null],
      email: [null],
      tel: [null],
      cep: [null],
      address: [null],
      addressNumber: [null],
      addressComplement: [null],
      district: [null],
      uf: [null],
      city: [null],
    });
  }

}
