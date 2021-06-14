import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string } = {
    name: 's',
    status: 'e',
  };
  @Input() id: number = 0;

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ) {}
  onSetTo(status: string) {
    // this.loggingService.logStatusChange(status);
    this.accountService.updateStatus(this.id, status);
    //console.log('A server status changed, new status: ' + status);
    this.accountService.statusUpdated.emit(status);
  }
}
