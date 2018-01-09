import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  DanhSach:Array<any> = [
    {Hoten:"Nguyen Van A",tuoi: 20},
    {Hoten:"Nguyen Van B",tuoi: 22},
    {Hoten:"Nguyen Van C",tuoi: 25},
    {Hoten:"Nguyen Van D",tuoi: 18}
  ];
  title = 'app';
}
