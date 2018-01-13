import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommoninsideDirective } from './commoninside.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CommoninsideDirective
  ],
  declarations: [CommoninsideDirective]
})
export class CommonModule1 { }
