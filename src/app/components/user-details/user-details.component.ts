import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../interfaces/user.interface";
import {NgIf} from "@angular/common";
import {UsersService} from "../../services/users.service";
import {IPost} from "../../interfaces/post.interface";
import {PostsService} from "../../services/posts.service";

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

      this.postsService.byUserId(id).subscribe(value => this.userPosts = value)
    })
  }

  getPosts() {
    this.router.navigate(['posts'], {
      relativeTo: this.activatedRoute,
      state: this.userPosts
    })
  }
}
