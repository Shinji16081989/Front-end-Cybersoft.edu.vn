import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, ContentComponent, FooterComponent],
  declarations: [HeaderComponent, ContentComponent, FooterComponent]
})
export class LayoutModule { }
