import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deretive2',
  templateUrl: './deretive2.component.html',
  styleUrls: ['./deretive2.component.css']
})
export class Deretive2Component implements OnInit {
  public status:boolean = true;
  DangNhap(){
    this.status = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
