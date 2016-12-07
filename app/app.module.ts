import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogEditModalComponent } from './blog-editmodal/blog-editmodal.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    BlogHomeComponent,
    BlogEditModalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
