import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  userToken:string;
  error : HttpErrorResponse;

  login(email:string, pass:string){
  
    const params= new HttpParams()
    .set('email',email)
    .set('password', pass);

    this.http.post<any>('https://reqres.in/api/login', params)
    .subscribe(res=>{
      this.userToken= res.token;
      this.router.navigateByUrl('pokemon-list');
    },
    
    err=> {this.error =err;}

    );
  }

  signUp(email: string, pass:string){
    const params= new HttpParams()
    .set('email',email)
    .set('password', pass);

    this.http.post<any>('https://reqres.in/api/register', params)
    .subscribe(res=>{
      this.userToken= res.token;
      this.router.navigateByUrl('pokemon-list');
    },
    
    err=> {this.error =err;}

    );
  }

  logout(){
    this.userToken= '';
    this.router.navigateByUrl('login');
  }

  isLogged(): boolean{
    return !!(this.userToken );
  }

}
