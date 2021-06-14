import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { CountServiceService } from './count-service.service';
import { UsersServiceService } from './users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersServiceService],
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  numi: number = 0;
  numa: number = 0;
  constructor(
    private usersService: UsersServiceService,
    private count: CountServiceService
  ) {}
  ngDoCheck() {
    this.numa = this.count.numa;
    this.numi = this.count.numi;
  }
  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
  ngOnChanges() {}
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInactive(id: number) {
  //   this.usersService.SetToInactive(id);
  //   this.numa = this.count.numa;
  //   this.numi = this.count.numi;
  // }

  // onSetToActive(id: number) {
  //   this.usersService.SetToActive(id);
  //   this.numa = this.count.numa;
  //   this.numi = this.count.numi;
  // }
}
