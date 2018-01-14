import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.css']
})
export class PhimComponent implements OnInit {
  @Input() TieuDePhim:string;
  @Input() TenDaoDien:string;
  constructor() { }
    
  ngOnInit() {
  }

}
