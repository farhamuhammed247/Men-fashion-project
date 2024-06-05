import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  constructor(private route:Router){
    console.log('App Component Created');
  }
  isolated(){
    return this.route.url== '/login' || this.route.url=='/signin'
}
transform(value: string): string {
  return value.toUpperCase();
}
}