import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipestest',
  templateUrl: './pipestest.component.html',
  styleUrls: ['./pipestest.component.css']
})
export class PipestestComponent implements OnInit {
  private info:string = "Hoc Vien Dao Tao Cybersoft"
  private number:number = 0.86
  private number1:number = 17.987654
  private today = Date.now()
  private ObjectJson:Object = {hoten: 'Dang', lop: 'frontend3', diem: [10,6,5]}
  private array = ['pt1', 'pt2', 'pt3', 'pt4', 'pt4']
  constructor() { }

  ngOnInit() {
  }

}
