import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  public status:boolean = true;
  DangNhap(user, password)
  {
    if (user === "cybersoft" && password === "cybersoft"){
      this.status = false;
    }else{
      this.status = true;
      alert("Sai Thong Tin");
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
