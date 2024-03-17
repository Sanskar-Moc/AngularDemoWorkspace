import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-app';
  employees=["Jack","Jill","James","Jimmy"];
  myPwd = "";
  /*
  Component is a special type of Directive.
   3 types of Directives are - 1. Component, Structural, and Attribute
   Structural Directives manipulate/change appearance of DOM dynamically
   Add * before structural directives
   ngFor,ngIf are structural directive

  Attribute Directives add Cosmetics to the Element.
    * is no more required
    ngClass,ngStyle are attribute directive
  
  */
}
