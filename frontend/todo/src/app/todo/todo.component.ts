import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id!: number;
  todo: Todo = {} as Todo;
  constructor(private service:TodoDataService,
    private route:ActivatedRoute,
    private router:Router) { }
  

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.retrieveTodo(this.id,"Phani").subscribe(
      data=>this.todo=data

    )

  }

  submit(){
    this.service.updateTodo(this.id,'phani',this.todo).subscribe(
      data=>{console.log(data)
        this.router.navigate(['list'])
      }
    )

  }

}
