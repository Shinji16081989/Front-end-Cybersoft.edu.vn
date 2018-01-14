import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipestestComponent } from './pipestest/pipestest.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    PipestestComponent
  ]
  ,
  declarations: [PipestestComponent]
})
export class PipesModule { }
