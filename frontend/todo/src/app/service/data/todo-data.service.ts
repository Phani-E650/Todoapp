import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { getLocaleExtraDayPeriods } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http : HttpClient) {
  }
  retriveAllTodos(username:string){
    return this.http.get<Todo[]>("http://localhost:8080/users/phani/todos")
  }

  // getTodos(p: Todo[]){
  //   console.log(p);
  // }
  deleteTodo(id:number,username:string){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodo(id:number,username:string){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(id:number,username:string,todo:Todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo)
  }


}
