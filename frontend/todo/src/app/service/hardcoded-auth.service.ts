import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }
  auhtenticate(username:any,password:any){

    if(username=="phani" && password=="kumar"){

      sessionStorage.setItem('authenticaterUser',username);
      return true;

    }
    else{

      return false;

    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user===null)
  }
  
  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }


}
