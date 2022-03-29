import { Component, OnInit } from '@angular/core';
import {User } from '../login/user'
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user : User;

  constructor(public auth: AuthServiceService) { }

  signUp(form: NgForm){
    if(form.value.password === form.value.passwordConfirm)
      this.auth.signUp(form.value.email, form.value.password);
  }

}
