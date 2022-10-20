import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(public id :number, 
    public desc: string,
    public targetDate: Date,
    public done: Boolean,
    )
    {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
   todos: Todo[] = [];
   message!: string;

  //   new Todo(1,"want to expert in angular", new Date(), false ),
  //   new Todo(2,"want to expert in springboot", new Date(), false ),
  //   new Todo(3,"want to expert in react", new Date(), false ),

  // ]


  constructor(private todoservice:TodoDataService,
    private route: Router) {
     }


  ngOnInit(): void {
    this.refresh()
  
  }
  deleteTodos(id: any){
    console.log(`delete todo ${id}`)
    this.todoservice.deleteTodo(id,'Phani').subscribe(
      response=>{
        console.log(response)
        this.message=`Delete todo ${id} successfull`
        this.refresh()
      }
    )
  }

  updateTodos(id:any){
    this.route.navigate(['todo',id])

  }



  refresh(){
    this.todoservice.retriveAllTodos("Phani").subscribe(
      response=>{
        this.todos=response
      }

    )
  }
}




