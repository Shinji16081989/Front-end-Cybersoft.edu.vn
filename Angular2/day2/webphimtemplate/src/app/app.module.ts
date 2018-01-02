import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';


@NgModule({
  declarations: [
    AppComponent,
    OnewaybindingComponent,
    PropertybindingComponent,
    EventbindingComponent,
  ],
  imports: [
    BrowserModule, LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
