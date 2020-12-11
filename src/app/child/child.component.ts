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
