import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public test:boolean = true;
  test1:boolean = false;
  DangNhap()
  {
    this.test = false;
  }
  DangXuat()
  {
    this.test1 = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
