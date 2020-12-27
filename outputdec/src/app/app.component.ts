import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data(user:any){
    alert(`details are : name is  ${user.name}, and place is ${user.place}`);
  }
  title = 'child to parent communication';
}
