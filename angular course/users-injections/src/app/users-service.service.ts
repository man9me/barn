import { EventEmitter, Injectable } from '@angular/core';
import { CountServiceService } from './count-service.service';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private CountServiceService: CountServiceService) {}
  //change = new EventEmitter<number>();
  SetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    //this.change.emit(id);
    this.CountServiceService.incrimentI();
  }

  SetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    //this.change.emit(id);
    this.CountServiceService.incrimentA();
  }
}
