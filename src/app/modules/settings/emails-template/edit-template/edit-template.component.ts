import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.scss']
})
export class EditTemplateComponent implements OnInit {

  public displayDescription: boolean = false;

  public form!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createTemplateForm();
  }

  createTemplateForm() {
    this.form = this.fb.group({
      content: [null],
    })
  }

  setVariable(variable: string) {
    const variableHTML = `<span>${variable}</span>`
    
    if(!this.form.get('content')?.value) {
      this.form.get('content')?.setValue(variableHTML)
      return;
    }

    let emailText = this.form.get('content')?.value;
    let arrayText = emailText.split('</p>');
    let variableText = `${arrayText.join('')} ${variableHTML}</p>`;

    this.form.get('content')?.setValue(variableText);
  }

  cancel(): void {
    this.router.navigate(['painel/configuracoes']);
  }

  clear(): void {
    this.form.get('content')?.reset();
  }

  submit(): void {

  }

}
