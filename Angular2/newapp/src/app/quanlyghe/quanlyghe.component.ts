import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachGheComponent } from '../danh-sach-ghe/danh-sach-ghe.component';

@Component({
  selector: 'app-quanlyghe',
  templateUrl: './quanlyghe.component.html',
  styleUrls: ['./quanlyghe.component.css']
})
export class QuanlygheComponent implements OnInit {

  constructor() { }
  @ViewChild (DanhSachGheComponent) dsghecom:DanhSachGheComponent;
  themghe(maghe:string){
    console.log(maghe);
    this.dsghecom.themdsghe(maghe);
  }
  xoaghe(maghe:string){
    this.dsghecom.xoadsghe(maghe);
  }
  ngOnInit() {
  }

}
