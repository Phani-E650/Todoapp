import { HttpClient } from '@angular/common/http';
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
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hellobean/pathvar/${name}`)
  }




  handleResponse(p: HelloWorldBean): HelloWorldBean {
    return p;
  }



  
  
}
