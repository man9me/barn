import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Nope yet!'
  serverName = 'TestName'
  serverCreated = false;
  serverStatus:string = 'offline'
  servers =['Tests1','tests2']


  constructor() { 
   

    setTimeout(()=> {
      this.allowNewServer =true;},2000    )
  }

  ngOnInit(): void {
  }
  onCreationServer(){
 this.serverCreationStatus = ' Crup! '+ this.serverName;
 this.servers.push(this.serverName)
 this.serverCreated = true;
}

  onUpdateServerName(event:any){
  this.serverName= (<HTMLInputElement>event.target).value
}
}
