import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



//fontawesome icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faAnglesUp  as fasAnglesUp ,faAnglesDown as fasAnglesDown  } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CapitalizePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(library : FaIconLibrary){
      library.addIcons(fasAnglesUp, fasAnglesDown);
  }

 }
