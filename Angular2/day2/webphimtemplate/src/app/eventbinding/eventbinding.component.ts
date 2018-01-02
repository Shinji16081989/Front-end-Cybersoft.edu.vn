import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
  <input type="text" #thamso index='12'/>
  <button (click)="DisplayName(thamso)"> Submit </button>
  `,
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  public name:string = "cybersoft";
  constructor() { }
  DisplayName(thamso)
  {
    console.log(thamso.value); // lay value
    //console.log(thamso.getAttribute("index")); // lay Attribute
  }
  ngOnInit() {
  }

}
