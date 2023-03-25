import { SettingsService } from './../../../services/settings.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.scss'],
})
export class CompanyDataComponent implements OnInit {
  public companyDataForm!: FormGroup;

  public companyData!: any;

  public statesAndCities!: any[];

  public ufList: any[] = [];

  public companyCityList: any[] = [];

  public responsibleCityList: any[] = [];

  constructor(
    private settingsService: SettingsService,
    private fb: FormBuilder,
    private requestMessageService: RequestMessageService,
    private clientsService: ClientsService
  ) {}

  ngOnInit(): void {
    this.createCompanyDataForm();

    this.getCompanyData();
  }

  createCompanyDataForm(): void {
    this.companyDataForm = this.fb.group({
      name: [{ value: null, disabled: true }],
      fantasyName: [{ value: null, disabled: true }],
      cnpj: [{ value: null, disabled: true }],
      companyPhone: [null],
      companyEmail: [{ value: null, disabled: true }],
      responsible: this.fb.group({
        name: [{ value: null, disabled: true }],
        cpf: [{ value: null, disabled: true }],
        phone: [null],
        email: [{ value: null, disabled: true }],
      }),
      address: this.fb.group({
        cep: [null],
        street: [{ disabled: true, value: null }],
        number: [null],
        district: [{ disabled: true, value: null }],
        city: [{ disabled: true, value: null }],
        uf: [{ disabled: true, value: null }],
        country: [{ disabled: true, value: null }],
        address: [{ disabled: true, value: null }],
        complement: [null],
      }),
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
      error: (err) => {},
    });
  }

  checkFormFieldsValue(path: string): boolean {
    return this.companyDataForm.get(path)?.value;
  }

  getClientAddressData() {
    const CEP = this.companyDataForm.get('address.cep')?.value;

    if (CEP.length < 8) return;

    this.clientsService.getUserCEP(CEP).subscribe({
      next: (res) => {
        this.companyDataForm.get('address')?.patchValue({
          street: res.logradouro,
          district: res.bairro,
          city: res.localidade,
          uf: res.uf,
          codeIbge: res.ibge,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submitForm() {
    const body = this.companyDataForm.getRawValue();

    console.log(body);

    this.settingsService.updateCompanyData(body).subscribe({
      next: () => {
        this.requestMessageService.show(
          `Dados da empresa salvos com sucesso.`,
          'success'
        );
      },
      error: (err) => {
        this.requestMessageService.show(`Ocorreu um erro: ${err}`, 'error');
      },
    });
  }
}
