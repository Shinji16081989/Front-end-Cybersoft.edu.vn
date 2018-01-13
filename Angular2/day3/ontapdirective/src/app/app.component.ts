import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public status:boolean = false;
  private lessons:Array<any> = ['a','b','c'];
  constructor(){}
  DangNhap(){
    this.status = true;
  }
  DangXuat(){
    this.status = false;
  }
}
