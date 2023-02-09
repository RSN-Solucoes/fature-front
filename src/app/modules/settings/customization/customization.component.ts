import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss']
})
export class CustomizationComponent implements OnInit {

  public color!: string;

  constructor() { }

  ngOnInit(): void {
  }

  clearForm() {
    alert('clear form');
  }

  submitForm() {
    alert('submit form');
  }

}
