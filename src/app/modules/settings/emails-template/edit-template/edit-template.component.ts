import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditorModule } from 'primeng/editor';

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

  teste(): void {
    const variableModel = 
    '<span style="background-color: #6feaa7; color: #000; font-weight: bolder; padding: 5rem"; border-radius: 10px>[NOME_CLIENTE]</span>'
    // let text = event.quill.root.innerHTML;

    // event.quill.root.innerHTML.concat(variableModel)

    let text = this.form.get('content')?.value;

    this.form.get('content')?.setValue(text.concat(variableModel))

    console.log(this.form.get('content')?.value)
  }

  cancel(): void {
    this.router.navigate(['painel/configuracoes']);
  }

}
