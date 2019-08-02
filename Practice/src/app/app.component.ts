import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Array Methods';

  subjects: any[] = ['Maths', 'Science', 'Social'];
  students: any[] = [{fName: "Raghu", lName: "Bokka", age: 25},
  {fName: "Divya", lName: "Vasarla", age: 16} ]
  subject: string;
  search;
  searchStudent = "";
  filterList;
  filterObject;
  isMajor = false;

  constructor(){
    this.subjects.forEach((item) => {
      this.subject = item;
      return;
    });

       
  }

  ngOnInit(){
    this.filterList = this.subjects;
    this.filterObject = this.students;
  }

  filterSubject(){
    let searchString = this.search.toLowerCase();
    this.filterList = this.subjects.filter((s) => {
      return s.toLowerCase().indexOf(searchString) > -1 
    })
  }

  filterStudent(){
    let searchString = this.searchStudent.toLowerCase();
    this.filterObject = this.students.filter((st) => {
      return ((st.fName.toLowerCase().indexOf(searchString)) > -1 || (st.lName.toLowerCase().indexOf(searchString)) > -1 ) && (this.isMajor ? st.age > 21 : true)
    })
  }





}
