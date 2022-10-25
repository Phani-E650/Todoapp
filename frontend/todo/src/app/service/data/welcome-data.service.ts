import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';




export class HelloWorldBean{
  constructor(public message:string){

  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { 

  }


  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hellobean/')
  }

  
  executeHelloWorldBeanServicePath(name:string){
    let basicAuthHeaderString =this.createBasicAuthHttpHeaders();
    let headers = new HttpHeaders({
      Authorization:basicAuthHeaderString
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hellobean/pathvar/${name}`,{headers});
  }

  createBasicAuthHttpHeaders(){
    let username='phani'
    let password='sample'
    let basicAuthHeaderString= 'Basic'+window.btoa(username+':'+password)
    return basicAuthHeaderString;
  }




  handleResponse(p: HelloWorldBean): HelloWorldBean {
    return p;
  }



  
  
}
