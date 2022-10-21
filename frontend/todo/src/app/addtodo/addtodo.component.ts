import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  id!: number;
  todo: Todo = {} as Todo;
  constructor(private service:TodoDataService,
    private route:ActivatedRoute,
    private router:Router) { }
  

  ngOnInit(): void {

  }

  submit(){
    this.service.addTodo('phani',this.todo).subscribe(
      data=>{console.log(data)
        this.router.navigate(['list'])
      }
    )

  }

}

