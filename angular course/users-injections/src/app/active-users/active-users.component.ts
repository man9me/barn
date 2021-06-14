import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private UsersServiceService: UsersServiceService) {
    this.users = this.UsersServiceService.activeUsers;
  }

  //@Input() users: string[] = [];
  // @Output() userSetToInactive = new EventEmitter<number>();
  ngOnInit() {
    this.users = this.UsersServiceService.activeUsers;
  }

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.UsersServiceService.SetToInactive(id);
  }
}
