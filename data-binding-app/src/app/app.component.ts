import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  imgPath = './assets/black-hole.png'
  buttonStatus=true
  customerName=""

  public myEvent(event:any){
    console.log("I am clicked, WOW!! ",event)
  }
}
