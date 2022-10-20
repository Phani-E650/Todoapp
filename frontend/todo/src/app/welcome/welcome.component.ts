import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';
import { TodoDataService } from '../service/data/todo-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name='kumar'

  message : any ="hahah";
  welomeMessageFromService!: string;

  constructor(private route: ActivatedRoute,
    private service:WelcomeDataService,
    private todoservice:TodoDataService) { }
  
  ngOnInit(){
    console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name'];
    }

  getWelcomeMessage(name: string){
    this.todoservice.retriveAllTodos("kumar");
    this.service.executeHelloWorldBeanServicePath(name).subscribe(
      p=>this.handleResponse(p),
      error=>handleErrorResponse(error)
      
    )
  }

  handleResponse(p: HelloWorldBean){
    console.log(p.message)

  }


}
function handleErrorResponse(error: any): void {
  console.log(error.error.message)
}

