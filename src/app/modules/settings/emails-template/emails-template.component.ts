import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EMAIL_TEMPLATES } from './emails-template.const';

@Component({
  selector: 'app-emails-template',
  templateUrl: './emails-template.component.html',
  styleUrls: ['./emails-template.component.scss']
})
export class EmailsTemplateComponent implements OnInit {

  public emailTemplates: any = EMAIL_TEMPLATES;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateToEditTemplate(): void {
    this.router.navigate(['painel/configuracoes/edit-template']);
  }

}