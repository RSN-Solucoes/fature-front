import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans-form',
  templateUrl: './plans-form.component.html',
  styleUrls: ['./plans-form.component.scss']
})
export class PlansFormComponent implements OnInit {

  public plansForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createPlansForm();
  }
  
  createPlansForm(): void {
    this.plansForm = this.fb.group({
      name: [null],
      description: [null],
    });
  }

  clearForm(): void {
    this.plansForm.reset();
  }

  submitForm(): void {
    alert('plano criado');
  }

  cancel(): void {
    this.router.navigate(['painel/recorrencias']);
  }

}
