import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  constructor(private UsersServiceService: UsersServiceService) {
    this.users = this.UsersServiceService.inactiveUsers;
  }

  //@Input() users: string[] = [];
  // @Output() userSetToInactive = new EventEmitter<number>();
  ngOnInit() {
    this.users = this.UsersServiceService.inactiveUsers;
  }

  onSetToActive(id: number) {
    // this.userSetToInactive.emit(id);
    this.UsersServiceService.SetToActive(id);
  }
}
