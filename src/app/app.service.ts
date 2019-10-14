import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

import { Cookie } from 'ng2-cookies/ng2-cookies';

import { HttpClient, HttpHeaders} from '@angular/common/http';

import { HttpErrorResponse,HttpParams} from '@angular/common/http';

import 'rxjs/operator/catch';
import 'rxjs/operator/do';
import 'rxjs/operator/toPromise';
import { Observable } from 'rxjs/observable';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url= 'https://chatapi.edwisor.com';

  constructor(public http: HttpClient) { }

  public signupFunction(data): any{


  }

  public signinFunction(data): any{

  }
  public setUserInfoInLocalStorage=(data) =>{

  }
  public getUserInfoInLocalStorage=() =>{
    
  }
private handleError(err: HttpErrorResponse) {

    console.log(err.message);
    return Observable.throw(err.message);
    
   }
}
