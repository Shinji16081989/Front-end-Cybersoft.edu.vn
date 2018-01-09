import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derective1',
  templateUrl: './derective1.component.html',
  styleUrls: ['./derective1.component.css']
})
export class Derective1Component implements OnInit {
  public status:boolean = true;
  constructor() { }
  Hidden()
  {
    this.status = false;
  }
  Show()
  {
    this.status = true;
  }
  ngOnInit() {
  }

}
