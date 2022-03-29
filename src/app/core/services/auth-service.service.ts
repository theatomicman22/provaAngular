import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user = 'admin';
  password = 'admin';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  userToken:string;
  error : string;

  login(email:string, pass:string){

    console.log(this.user, this.password);
  
    if(email === this.user && pass === this.password)
    {
      this.userToken = 'token1234';
      this.router.navigateByUrl('pokemon-list');
      console.log('login')
    }
    else
    {
      this.error =  'Wrong user or password';
      
    }
    /*
    const params= new HttpParams()
    .set('email',email)
    .set('password', pass);

    this.http.post<any>('https://reqres.in/api/login', params)
    .subscribe(res=>{
      this.userToken= res.token;
      this.router.navigateByUrl('pokemon-list');
    },
    
    err=> {this.error =err;}

    );*/
  }

  signUp(email: string, pass:string){

    /*
    const params= new HttpParams()
    .set('email',email)
    .set('password', pass);

    this.http.post<any>('https://reqres.in/api/register', params)
    .subscribe(res=>{
      this.userToken= res.token;
      this.router.navigateByUrl('pokemon-list');
    },
    
    err=> {this.error =err;}

    );*/
  }

  logout(){
    this.userToken= '';
    this.router.navigateByUrl('login');
  }

  isLogged(): boolean{
    return !!(this.userToken );
  }

}
