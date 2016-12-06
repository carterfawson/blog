import { Component } from '@angular/core';

@Component({
  selector: 'blog-app',
  template: `<blog-home></blog-home>`,
})
export class AppComponent  { 
  pageTitle: string = 'Angular2 on Django'; 
}
