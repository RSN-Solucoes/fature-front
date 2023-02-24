import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.scss']
})
export class EditTemplateComponent implements OnInit {

  public displayDescription: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  teste(event: HTMLTextAreaElement): void {
    console.log(event.value)
  }

  cancel(): void {
    this.router.navigate(['painel/configuracoes']);
  }

}
