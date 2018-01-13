import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule1} from './common/common.module';

import { AppComponent } from './app.component';
import { TestderectiveComponent } from './testderective/testderective.component';


@NgModule({
  declarations: [
    AppComponent,
    TestderectiveComponent
  ],
  imports: [
    BrowserModule,CommonModule1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
