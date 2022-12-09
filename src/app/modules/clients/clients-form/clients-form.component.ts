import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { UFS_SELECT_LIST } from 'src/app/shared/constants/ufs.const';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss']
})
export class ClientsFormComponent implements OnInit {
  public clientsForm!: FormGroup;
  public formSubmited: boolean = false;

  public ufSelectItems: any = UFS_SELECT_LIST;

  public clientId = this.activatedRoute.snapshot.paramMap.get('id') || '';

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService,
  ) { }

  ngOnInit(): void {
    this.createClientsForm();

    if(this.clientId) {
      this.getClient();
    }

  }

  createClientsForm() {
    this.clientsForm = this.fb.group({
      name: [null],
      email: [null],
      tel: [null],
      document: [null],
      address: [{value: null, disabled: true}, Validators.required],
      addressNumber: [null],
      addressComplement: [null],
      cep: [null],
      district: [{value: null, disabled: true}, Validators.required],
      city: [{value: null, disabled: true}, Validators.required],
      uf: [{value: null, disabled: true}, Validators.required],
      codeIbge: [null],
    });
  }

  getClient() {
    this.clientsService.getClient(this.clientId).subscribe({
      next: (res) => {
        this.clientsForm.patchValue({
          ...res.data,
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getClientAddressData() {
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
        })
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  
  clearForm() {
    this.clientsForm.reset();
  }

  submitForm() {
    this.formSubmited = !this.clientsForm.valid;

    if(!this.clientsForm.valid) return;

    const request = !this.clientId
      ? this.clientsService.createClient(this.clientsForm.getRawValue())
      : this.clientsService.updateClient(this.clientId, this.clientsForm.getRawValue());

    request.subscribe({
      next: (res) => {
        alert('Cliente criado/atualizado');

        setTimeout(() => {
          this.cancel();
        }, 1500);
      }
    });
  }

  cancel() {
    this.router.navigate(['painel/clientes']);
  }
}