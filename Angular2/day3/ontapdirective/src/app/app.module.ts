import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule1} from './common/common.module';

import { AppComponent } from './app.component';
import { TestderectiveComponent } from './testderective/testderective.component';
import { PipesModule } from './pipes/pipes.module';
import { PhimComponent } from './phim/phim.component';


@NgModule({
  declarations: [
    AppComponent,
    TestderectiveComponent,
    PhimComponent
  ],
  imports: [
    BrowserModule,CommonModule1,PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
