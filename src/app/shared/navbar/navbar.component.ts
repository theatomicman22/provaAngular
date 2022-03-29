import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor( private auth: AuthServiceService) { }

  logout(){
    this.auth.logout();
  }

  

}
