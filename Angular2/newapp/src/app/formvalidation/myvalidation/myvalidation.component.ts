import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myvalidation',
  templateUrl: './myvalidation.component.html',
  styleUrls: ['./myvalidation.component.css']
})
export class MyvalidationComponent implements OnInit {
  public schools:any = [{id:'1',name:'cybersoft'},{id:'2',name:'myclass'}]
  constructor() { }
  Submit(value:any){
    console.log(value)
  }
  ngOnInit() {
  }

}
