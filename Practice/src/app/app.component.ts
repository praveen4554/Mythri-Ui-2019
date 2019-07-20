import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Array Methods';

  subjects: any[] = ['Maths', 'Science', 'Social'];
  subject: string;

  constructor(){
    this.subjects.forEach((item) => {
      this.subject = item;
      return;
    });
  }





}
