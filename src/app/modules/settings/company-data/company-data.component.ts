import { SettingsService } from './../../../services/settings.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.scss']
})
export class CompanyDataComponent implements OnInit {

  public companyDataForm!: FormGroup;
  public companyData!: any;

  public ufList = [
    {
      name: 'São Paulo',
      value: 'SP'
    },
    {
      name: 'Bahia',
      value: 'BA'
    },
    {
      name: 'Rio de Janeiro',
      value: 'RJ'
    },
    {
      name: 'Minas Gerais',
      value: 'MG'
    },
  ];

  public cityList = [
    {
      name: 'Salto',
    },
    {
      name: 'São Paulo',
    },
    {
      name: 'Indaiatuba',
    },
  ];

  constructor(
    private settingsService: SettingsService,
    private fb: FormBuilder,
    private requestMessageService: RequestMessageService,
  ) { }

  ngOnInit(): void {
    this.createCompanyDataForm();

    this.getCompanyData();
  }

  createCompanyDataForm(): void {
    this.companyDataForm = this.fb.group({
      name: [null],
      fantasyName: [null],
      cnpj: [null],
      companyPhone: [null],
      companyEmail: [null],
      responsible: this.fb.group({
        name: [null],
        cpf: [null],
        phone: [null],
        email: [null],
        uf: [null],
        city: [null],
      }),
      address: this.fb.group({
        cep: [null],
        street: [null],
        number: [null],
        district: [null],
        city: [null],
        uf: [null],
        country: [null],
        address: [null],
        complement: [null],
      })
    });
  }

  getCompanyData(): void {
    this.settingsService.getCompanyData().subscribe({
      next: (res) => {
        this.companyData = res.data;
        this.companyDataForm.patchValue({
          ...this.companyData,
        });
      },
      error: (err) =>
      {
      }
    });
  }

  clearForm() {
    this.companyDataForm.reset();
  }

  submitForm() {
    const body = this.companyDataForm.getRawValue();

    this.settingsService.updateCompanyData(body).subscribe({
      next: () => {
        this.requestMessageService.show(
          `Dados da empresa salvos com sucesso.`,
          'success'
        );
      },
      error: (err) => {
        this.requestMessageService.show(
          `Ocorreu um erro: ${err}`,
          'error'
        );
      }
    });
  }

}
