import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username="phani"
  password="kumar"
  invalidLogin=false;
  errorMessage="inavalid credintials"
  constructor(private router:Router,
    private hardcodedAuth: HardcodedAuthService) { }

  ngOnInit(): void {
  }

  handleLogin(){
  //  if(this.username=="phani" && this.password=="kumar"){
  if(this.hardcodedAuth.auhtenticate(this.username,this.password)){
    this.invalidLogin=false;
    this.router.navigate(['welcome',this.username]);
   }
   else{
    this.invalidLogin=true;
   }
  }

}
