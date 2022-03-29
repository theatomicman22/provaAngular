import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router :Router, private auth: AuthServiceService) { }

  canActivate() {
    const isLogged = this.auth.isLogged()
    if(!isLogged)
      this.router.navigateByUrl('login');
    return isLogged;
  }
}
