import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spacex';
  launch="";
  land="";
  date="";

chageLaunch(val){
  this.launch=val;
}
chageDate(val){
  this.date=val;
}
chageLand(val){
  this.land=val;
}
}

