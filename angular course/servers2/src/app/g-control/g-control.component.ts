import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-g-control',
  templateUrl: './g-control.component.html',
  styleUrls: ['./g-control.component.css'],
})
export class GControlComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  n: number = 0;
  //t: any;
  t: any;
  @Output() tick = new EventEmitter<number>();

  adder(n: any) {
    console.log('tick ' + this.n);
    this.tick.emit(n);
    //this.timer();
    return n;
  }

  timer() {
    //this.n = this.n + 1;
    console.log('start ');
    //this.t = setInterval(this.adder(this.n), 1000);
    this.t = setInterval(() => {
      this.tick.emit(this.n + 1);
      this.n++;
      //console.log(this.n);
    }, 1000);
  }

  timerClear() {
    console.log('stop  ' + this.n);
    clearInterval(this.t);
    this.n = 0;
  }
}
