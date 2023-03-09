import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';
import { UFS_SELECT_LIST } from 'src/app/shared/constants/ufs.const';

@Component({
  selector: 'app-clients-create',
  templateUrl: './clients-create.component.html',
  styleUrls: ['./clients-create.component.scss']
})
export class ClientsCreateComponent implements OnInit {
  public clientsForm!: FormGroup;
  public formSubmited: boolean = false;

  public ufSelectItems: any = UFS_SELECT_LIST;

  public clientId = this.activatedRoute.snapshot.paramMap.get('id') || '';

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService,
    private requestMessageService: RequestMessageService
  ) { }

  ngOnInit(): void {
    this.createClientsForm();
  }

  createClientsForm(): void {
    this.clientsForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      tel: [null, Validators.required],
      document: [null, Validators.required],
      address: [{ value: null, disabled: true }, Validators.required],
      addressNumber: [null, Validators.required],
      addressComplement: [null],
      cep: [null, Validators.required],
      district: [{ value: null, disabled: true }, Validators.required],
      city: [{ value: null, disabled: true }, Validators.required],
      uf: [{ value: null, disabled: true }, Validators.required],
      codeIbge: [null],
    });
  }

  getClientAddressData(): void {
    const CEP = this.clientsForm.get('cep')?.value;

    if (CEP.length < 8) return;

    this.clientsService.getUserCEP(CEP).subscribe({
      next: (res) => {
        this.clientsForm.patchValue({
          address: res.logradouro,
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

  clearForm(): void {
    this.clientsForm.reset();
  }

  submitForm(): void {
    this.formSubmited = !this.clientsForm.valid;

    if (!this.clientsForm.valid) return;

    this.clientsService.createClient(this.clientsForm.getRawValue()).subscribe({
      next: (res) => {
        this.requestMessageService.show(
          `Cliente criado com sucesso.`,
          'success'
        );

        setTimeout(() => {
          this.cancel();
        }, 1500);
      },
    });
  }

  cancel(): void {
    this.router.navigate(['painel/clientes']);
  }

}
