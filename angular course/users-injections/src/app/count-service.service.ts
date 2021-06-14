import { Injectable } from '@angular/core';
import { UsersServiceService } from './users-service.service';

@Injectable({
  providedIn: 'root',
})
export class CountServiceService {
  numi: number = 0;
  numa: number = 0;
  constructor() {
    // this.usersService.change.subscribe((id: number) => {
    //   this.num++;})
    //console.log('smth ' + this.numi + '  ' + this.numa);
  }
  incrimentI() {
    this.numi++;
    console.log('smth ' + this.numi + '  ' + this.numa);
  }
  incrimentA() {
    this.numa++;
    console.log('smth ' + this.numi + '  ' + this.numa);
  }
}
