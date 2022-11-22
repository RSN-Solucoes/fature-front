import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public clientsForm!: FormGroup;
  public formSubmited: boolean = false;

  public uf!: any;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createClientsForm();

    this.uf = [
      {name: "Acre", uf: "AC"},
      {name: "Alagoas", uf: "AL"},
      {name: "Amapá", uf: "AP"},
      {name: "Amazonas", uf: "AM"},
      {name: "Bahia", uf: "BA"},
      {name: "Ceará", uf: "CE"},
      {name: "Distrito Federal", uf: "DF"},
      {name: "Espírito Santo", uf: "ES"},
      {name: "Goiás", uf: "GO"},
      {name: "Maranhão", uf: "MA"},
      {name: "Mato Grosso", uf: "MT"},
      {name: "Mato Grosso do Sul", uf: "MS"},
      {name: "Minas Gerais", uf: "MG"},
      {name: "Pará", uf: "PA"},
      {name: "Paraíba", uf: "PB"},
      {name: "Paraná", uf: "PR"},
      {name: "Pernambuco", uf: "PE"},
      {name: "Piauí", uf: "PI"},
      {name: "Rio de Janeiro", uf: "RJ"},
      {name: "Rio Grande do Norte", uf: "RN"},
      {name: "Rio Grande do Sul", uf: "RS"},
      {name: "Rondônia", uf: "RO"},
      {name: "Roraima", uf: "RR"},
      {name: "Santa Catarina", uf: "SC"},
      {name: "São Paulo", uf: "SP"},
      {name: "Sergipe", uf: "SE"},
      {name: "Tocantins", uf: "TO"}
  ];
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
