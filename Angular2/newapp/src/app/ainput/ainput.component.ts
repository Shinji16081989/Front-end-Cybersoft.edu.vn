import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ainput',
  templateUrl: './ainput.component.html',
  styleUrls: ['./ainput.component.css']
})
export class AinputComponent implements OnInit {
  private name:string = "cybersoft";
  private age:number = 123;
  constructor() { }

  ngOnInit() {
  }

}
