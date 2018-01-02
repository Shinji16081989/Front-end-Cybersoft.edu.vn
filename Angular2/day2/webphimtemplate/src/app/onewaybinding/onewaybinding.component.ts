import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  template: `<input value="{{name}}"/>`,
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent implements OnInit {
  name:string = "cybersoft";
  constructor(){}
  ngOnInit() {
  }
}
