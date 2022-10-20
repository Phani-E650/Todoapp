import { Component, OnInit } from '@angular/core';
import { ErrorComponent} from '../error/error.component';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  obj=new ErrorComponent;
  msg=this.obj.errorMessage;
  constructor(public hardcodedAuth:HardcodedAuthService) { }
  ngOnInit(): void {

  }

}
