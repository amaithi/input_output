# input_output
@Input @Output Decorator

Parent to Child-> message communication-> @Input
Child to Parent-> message communication-> @Output

ng g c parent

ng g c child

parent.component.ts:

import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-parent',
  
  templateUrl: './parent.component.html',
  
  styleUrls: ['./parent.component.css']
  
})

export class ParentComponent implements OnInit {

  public firstName:any;
  
  constructor() { }

  ngOnInit(): void {
  
  	var a = {
    
  		name:"amaithi",
      
  		age:'20'
      
  	}
    
  	this.firstName = JSON.stringify(a)
    
  }
  
  receivedData(event){
  
  	alert(event)
    
  }

}

parent.component.html:

<p>parent works!</p>

<app-child name={{firstName}} (sendData)="receivedData($event)"></app-child>

child.component.ts:

import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({

  selector: 'app-child',
  
  templateUrl: './child.component.html',
  
  styleUrls: ['./child.component.css']
  
})

export class ChildComponent implements OnInit {

  @Input() name:any;
  
  @Output() sendData:EventEmitter<any> = new EventEmitter;
 
  @Output() lastName:any;
  
  constructor() { }

  ngOnInit(): void {
  
  	console.log(this.name)  	
    
  }
  
  sendDataToParent(){
  
  	this.sendData.emit('child data...')
    
  }
  
}


child.component.html:

<p>First Name : {{name}} </p>

<button (click)="sendDataToParent()">send Data to Parent</button>





