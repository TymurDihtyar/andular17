import {Component} from '@angular/core';
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

import {IUser, IPost} from "../../interfaces";
import {UsersService, PostsService} from "../../services";


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  user: IUser
  userPosts: IPost[]

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usersService: UsersService, private postsService:PostsService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser;

      if (!this.user) {
        this.usersService.getById(id).subscribe(value => this.user = value)
      }

    })
  }

  getPosts() {
    this.router.navigate( ['users', this.user.id, 'posts'])
  }
}
