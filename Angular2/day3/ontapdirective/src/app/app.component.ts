import { Component } from '@angular/core';
import { DanhSachPhim } from '../Models/DanhSachPhim';
import { Phim } from '../Models/Phim';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public status:boolean = false;
  private lessons:Array<any> = ['a','b','c'];

  //Tao Danh Sach phim empty
  dsPhim:DanhSachPhim = new DanhSachPhim();
  
  constructor(){
    console.log(this.dsPhim);
    let phim:Phim = new Phim("Để Mốt Tính 1", "Chị Hội 1");
    let phim2:Phim = new Phim("Để Mốt Tính 2", "Chị Hội 2");
    let phim3:Phim = new Phim("Để Mốt Tính 3", "Chị Hội 3");
    this.dsPhim.ThemPhim(phim);
    this.dsPhim.ThemPhim(phim2);
    this.dsPhim.ThemPhim(phim3);
  }

  DangNhap(){
    this.status = true;
  }
  DangXuat(){
    this.status = false;
  }
}
