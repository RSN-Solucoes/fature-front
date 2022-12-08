import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService,
  ) { }

  ngOnInit(): void {
    this.createClientsForm();

  }

  createClientsForm() {
    this.clientsForm = this.fb.group({
      name: [null],
      email: [null],
      tel: [null],
      document: [null],
      address: [null],
      addressNumber: [null],
      addressComplement: [null],
      cep: [null],
      district: [null],
      city: [null],
      uf: [null],
    });
  }
  
  clearForm() {
    this.clientsForm.reset();
  }

  submitForm() {
    this.formSubmited = !this.clientsForm.valid;

    if(!this.clientsForm.valid) return;

    this.clientsService.createClient(this.clientsForm.getRawValue()).subscribe({
      next: (res) => {
        console.log(res);

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
