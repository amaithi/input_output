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
