import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashboard';
  sidebarOpend:boolean=true;


  toggle(){
    // what is toggle? one open and one close or true or false
    this.sidebarOpend=!this.sidebarOpend;
  }
}
