import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthServiceService } from './core/services/auth-service.service';
import {Pokemon, Result, Sprites, Other, OfficialArtwork, Detail, AbilityDetail} from './pokemon-list/pokemon';


@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public auth: AuthServiceService){}
  
}
