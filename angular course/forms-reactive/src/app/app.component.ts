import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames: ['anna'];

  //валидаторы указываются как референс, без ()
  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('Defoult', [
          Validators.required,
          Validators.minLength(4),
          //this.forbiddenNames.bind(this),
          this.forbiddenNameValidator(/anna/i),
        ]),
        email: new FormControl(
          'asd@gasd.com',
          [Validators.required, Validators.email],
          this.validate
        ),
      }),

      gender: new FormControl('male'),
      hobbies: new FormArray([new FormControl('smth', Validators.required)]),
    });

    //подписка на изменения занчений и статуса фрмы
    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.signupForm.statusChanges.subscribe((status) => {
      console.log(status);
    });

    //установка значений
    this.signupForm.setValue({
      userData: {
        username: 'Max',
        email: 'max@test.com',
      },
      gender: 'male',
      hobbies: [],
    });
    //патч конкретных значений
    this.signupForm.patchValue({
      userData: {
        username: 'Anna',
      },
    });
  }
  //свой валидатор
  //вариант с курса, не пашет
  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null as any;
  }
  //return null; //в валидаторе в случаи успеха проходит обязательно налл или нет второго ретёрна

  //валидатор с ангуляра, рабочий
  /** A hero's name can't match the given regular expression */
  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  //example of async validator, not work
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'smth@mail.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
  // based on angular example - work
  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (ctrl.value === 'smth@mail.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
  // return this.heroesService.isAlterEgoTaken(ctrl.value).pipe(
  //   map(isTaken => (isTaken ? { uniqueAlterEgo: true } : null)),
  //   catchError(() => of(null))
  // );

  //ссылка на масив и его контролы
  //*ngFor="let hobbyControl of hobbies.controls;
  // в примере курса для анг2 было иначе, напрямую, не работало,
  //по обучалке ангуляра, через метод класса, работает.
  get hobbies() {
    return this.signupForm.get('hobbies') as FormArray;
  }

  onAdd() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  onSubmit() {
    console.log(this.signupForm);
    // this.signupForm.reset();
  }
}
