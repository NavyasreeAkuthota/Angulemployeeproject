import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  date:number | undefined;
  constructor() { 
    setInterval(() => {
      this.date = Date.now();
    },1);
  }
  public opened: boolean = false;
  public empl: boolean = false;
 
  public toggle() {
    this.opened = !this.opened;
  }
  emp(){
    this.empl=!this.empl;
  }
}
