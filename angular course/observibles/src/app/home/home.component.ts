import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}

  private obsSub: Subscription; // саб переменная
  ngOnInit() {
    //   this.obsSub = interval(1000).subscribe((count) => {
    //     //подписка счетчик интервальный
    //     console.log(count);
    //   });
    // }
    let count = 0;
    const customObs = Observable.create((observer) => {
      setInterval(() => {
        observer.next(count); //сам эвент
        if (count === 2) {
          observer.complete(); // завершение, ставит на паузу
        }
        if (count > 3) {
          observer.error(new Error('count 3!')); //брос ошибки, если ошибка нет необходимости отписываться
        }
        count++;
      }, 1000);
    });

    this.obsSub = customObs
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          // опеараторы к пайпу, сначала фильтр потом мап

          return ' Round:' + (data + 1);
        })
      )
      .subscribe(
        (count) => {
          //     //подписка счетчик интервальный
          console.log(count);
        }, // евент ошибки
        (error) => {
          alert(error.massage);
        }, //евент конца, без аргумента, мождно не уничтажать
        () => {
          console.log('complite');
        }
      );
  }

  ngOnDestroy() {
    // отписка
    this.obsSub.unsubscribe();
  }
}
