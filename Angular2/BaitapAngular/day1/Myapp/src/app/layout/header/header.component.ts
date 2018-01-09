import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public Email:string;
  public Fullname:string = "Dung twoway binding";
  ButtonInput(value)
  {
    this.Fullname = value;
  }
  constructor() { }
  ngOnInit() {
  }

}
