import { NavbarModule } from './../../../shared/components/navbar/navbar.module';
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

  public statesAndCities!: any[];

  public ufList: any[] = [];
  public companyCityList: any[] = [];
  public responsibleCityList: any[] = [];

  constructor(
    private settingsService: SettingsService,
    private fb: FormBuilder,
    private requestMessageService: RequestMessageService,
  ) { }

  ngOnInit(): void {
    this.createCompanyDataForm();

    this.getCompanyData();

    this.getStatesAndCities();
  }

  createCompanyDataForm(): void {
    this.companyDataForm = this.fb.group({
      name: [{value: null, disabled: true}],
      fantasyName: [{value: null, disabled: true}],
      cnpj: [{value: null, disabled: true}],
      companyPhone: [null],
      companyEmail: [{value: null, disabled: true}],
      responsible: this.fb.group({
        name: [{value: null, disabled: true}],
        cpf: [{value: null, disabled: true}],
        phone: [null],
        email: [{value: null, disabled: true}],
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
        this.setUf('address');
        this.setUf('responsible');
        this.companyDataForm.patchValue({
          responsible: {
            city: this.companyData.responsible.city,
          },
          address: {
            city: this.companyData.address.city,
          }
        })
      },
      error: (err) =>
      {
      }
    });
  }

  getStatesAndCities(): void {
    this.settingsService.getStatesAndCities().subscribe({
      next: (res) => {
        this.statesAndCities = res.states;
        this.ufList = this.statesAndCities.map(el => {
          return {
            uf: el.uf,
            name: el.name
          }
        });
      }
    });
  }

  checkFormFieldsValue(path: string): boolean {
    return this.companyDataForm.get(path)?.value;
  }

  setUf(path: string): void {
    const ufFormValue = this.companyDataForm.get(`${path}.uf`)?.value;
    
    if(!ufFormValue) {
      this.companyDataForm.get(`${path}.city`)?.disable();
      return;
    };
    
    this.companyDataForm.get(`${path}.city`)?.enable();

    const selectedUf = this.statesAndCities.find(el => {
      return el.uf == ufFormValue;
    });

    path == 'address' ? 
    this.companyCityList = selectedUf.cities.map((el: any) => {
      return {
        city: el
      }
    }) :
    this.responsibleCityList = selectedUf.cities.map((el: any) => {
      return {
        city: el
      }
    });
  }

  submitForm() {
    const body = this.companyDataForm.getRawValue();

    console.log(body)

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
