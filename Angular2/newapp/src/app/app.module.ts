import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormvalidationModule } from './formvalidation/formvalidation.module';


import { AppComponent } from './app.component';
import { AinputComponent } from './ainput/ainput.component';
import { BinputComponent } from './binput/binput.component';
import { GhengoiComponent } from './ghengoi/ghengoi.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { QuanlygheComponent } from './quanlyghe/quanlyghe.component';


@NgModule({
  declarations: [
    AppComponent,
    AinputComponent,
    BinputComponent,
    GhengoiComponent,
    DanhSachGheComponent,
    QuanlygheComponent
  ],
  imports: [
    BrowserModule, FormvalidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
