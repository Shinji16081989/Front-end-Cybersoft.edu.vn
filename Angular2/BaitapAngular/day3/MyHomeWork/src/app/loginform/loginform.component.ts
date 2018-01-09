import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  public status:boolean = true;
  DangNhap()
  {
    this.status = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
