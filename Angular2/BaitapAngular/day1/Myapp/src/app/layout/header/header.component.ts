import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <h2> Register form </h2>
  <p><strong> Email </strong></p>
  <input type ="text" [(ngModel)] = "email">
  <p><strong> FullName: </strong></p>
  <input type="text" #fname />
  <br>
  <br>
  <button class="btn btn-success" (click) = "ButtonInput(fname)"> Submit </button>
  <br>
  <br>
  <p><b> Email: {{ email }}</b></p>
  <p><b> FullName: {{ fname.value }}</b></p>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
