import { BANKS_SELECT_LIST, BANK_ACCOUNT_TYPE_SELECT_LIST, BANK_FREQUENCY_SELECT_LIST } from './../settings.const';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from './../../../services/settings.service';
import { Component, OnInit } from '@angular/core';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';

@Component({
  selector: 'app-bank-data',
  templateUrl: './bank-data.component.html',
  styleUrls: ['./bank-data.component.scss']
})
export class BankDataComponent implements OnInit {

  public banksSelectItems: any[] = BANKS_SELECT_LIST;
  public accountTypeSelectItems: any[] = BANK_ACCOUNT_TYPE_SELECT_LIST;
  public frequencySelectItems: any[] = BANK_FREQUENCY_SELECT_LIST;

  public bankData!: any;
  public bankDataForm!: FormGroup;

  constructor(
    private settingsService: SettingsService,
    private fb: FormBuilder,
    private requestMessageService: RequestMessageService,
  ) { }

  ngOnInit(): void {
    this.createBankDataForm();

    this.getBankData();
  }

  createBankDataForm(): void {
    this.bankDataForm = this.fb.group({
      account: [null],
      accountDigit: [null, Validators.required],
      accountType: [null],
      agency: [null],
      agencyDigit: [null],
      bankCode: [null],
      paymentDay: [null],
      paymentFrequency: [null],
    });
  }

  getBankData() {
    this.settingsService.getBankData().subscribe({
      next: (res) => {
        this.bankData = res.data;
        this.bankDataForm.patchValue({
          ...this.bankData,
        });
      },
      error: (err) => {
      }
    });
  }

  clearForm() {
    this.bankDataForm.reset();
  }

  submitForm() {
    const body = this.bankDataForm.getRawValue();

    this.settingsService.updateBankData(body).subscribe({
      next: () => {
        this.requestMessageService.show(
          `Dados salvos com sucesso.`,
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
