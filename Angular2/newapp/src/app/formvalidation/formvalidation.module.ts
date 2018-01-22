import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyvalidationComponent } from './myvalidation/myvalidation.component';
// import FormsModule
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports:[MyvalidationComponent],
  declarations: [MyvalidationComponent]
})
export class FormvalidationModule { }
