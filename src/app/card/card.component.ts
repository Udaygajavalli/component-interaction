import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() 
  dataFromParent:any;

  count:any = 0;
  @Output() 
  
  myEvent=new EventEmitter();
  sendDataToParent(){
    this.myEvent.emit(this.count++);
  } 

}
