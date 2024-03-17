import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  title='child-app'
  @Input('parentData') 
  public mycompname : any;

  name='Chandler'

  @Output() 
  public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit("Hello to Parent company Wiley from its child WileyEdge");
  }
}
