import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.scss']
})
export class ServicesFormComponent implements OnInit {
  public servicesForm!: FormGroup;
  public formSubmited: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.createServicesForm();
  }

  createServicesForm() {
    this.servicesForm = this.fb.group({
      serviceName: [null, Validators.required],
      value: [null, Validators.required],
      description: [null],
    });
  }

  submitForm() {
    this.formSubmited = !this.servicesForm.valid;

    if(!this.servicesForm.valid) return;

    alert('Criar servico');
  }

  clearForm() {
    this.servicesForm.reset();
  }

  cancel() {
    this.router.navigate(['painel/produtos-e-servicos']);
  }

}
