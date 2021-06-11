import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defoultQestion = 'pet';
  submited = false;
  answer: string = '';
  genders = ['male', 'female'];
  user = { user: '', mail: '', secret: '' };
  suggestUserName() {
    const suggestedName = 'Superuser';
    // подписать всех разом
    //   this.signupForm.setValue({
    //     userData: { username: suggestedName, email: 'tt@gmail.com' },
    //     secret: 'pet',
    //     questionAnswer: 'smth',
    //     gender: 'male',
    //   });
    // }

    // только выбранные
    this.signupForm.form.patchValue({
      userData: { username: suggestedName, email: 'thth@gds.com' },
    });
  }
  onSubmit(form: NgForm) {
    console.log(form);
    this.submited = true;
    //нужно добавить группу userData
    this.user.user = this.signupForm.form.value.userData.username;
    this.user.mail = this.signupForm.form.value.userData.email;
    this.user.secret = this.signupForm.form.value.secret;

    this.signupForm.reset(); //сбросывает поля и стейт формы
  }
}
