import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userData=[
    {"id": 1, "name" : "laptop"},
    {"id": 2, "name" : "mouse"},
    {"id": 3, "name" : "keyboard"},
  ];

  data(user:any){
    alert('details are : name is  ${user.name}, and place is ${user.place}');
  }
  title = 'parent to child communication';
  
}
 

