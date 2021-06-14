import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-assigment',
  templateUrl: './input-assigment.component.html',
  styleUrls: ['./input-assigment.component.css']
})
export class InputAssigmentComponent implements OnInit {
  username="";
  //allow = (this.username==='')?false:true;
  allow = false;
  allowDisplay=false;
  clicksArray:any = [];
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event:any){

   // ((<HTMLInputElement>event.target).value==='')?this.allow=false:this.allow=true
   //this.allow = true
   console.log(this.username)
   this.allow = (this.username==='')?false:true;
  }
  onToggle(){
    this.allowDisplay=!this.allowDisplay;
    this.clicksArray.push(new Date());
    // this.clicksArray.push(this.clicksArray.length + 1);
  };

  onClick(){
    this.username = "";
    this.allow = false;
  }

}
