import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-binput',
  template: `Name: {{ name }} - Age: {{ age }}`,
  styleUrls: ['./binput.component.css']
})
export class BinputComponent implements OnInit {
  @Input() name:string;
  @Input() age:number;
  constructor() { }

  ngOnInit() {
  }

}
