import {Component, Input} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input() user:IUser

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
  }

  toDeteils():void {
  this.router.navigate([this.user.id], {relativeTo: this.activatedRoute})
  }
}
