import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  todayDate = new Date();
  currency = 1000;
  users = [
    {
     id:1,
     name:"Ram",
     location:"chennai"
    },
    {
     id:2,
     name:"Krish",
     location:"coimbatore"
    },
    {
     id:3,
     name:"Karna",
     location:"madurai"
    }
]
}
