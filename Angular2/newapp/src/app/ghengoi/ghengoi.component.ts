import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghengoi',
  templateUrl: './ghengoi.component.html',
  styleUrls: ['./ghengoi.component.css']
})
export class GhengoiComponent implements OnInit {
  public trangthai:boolean = false;
  @Output() Chonghe = new EventEmitter();
  datghe(){
    if(this.trangthai===true){
      this.trangthai=false;
    }
    else{
      this.trangthai=true;
    }
    this.Chonghe.emit(this.trangthai);
  }
  constructor() { }

  ngOnInit() {
  }

}
