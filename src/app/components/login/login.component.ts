import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { AuthServiceService } from '../../core/services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user : User;

  constructor(public auth: AuthServiceService) { }

  ngOnInit(): void {
  }

 login(form :NgForm){
    this.auth.login(form.value.email,form.value.password);
 }
}
