import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

import {IPost, IUser} from "../../interfaces";
import {UserService} from "../../services";
import {UserComponent} from "../user/user.component";
import {PostsComponent} from "../posts/posts.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    PostsComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit{
  users:IUser[]
  userPosts: IPost[]

  constructor(private userService:UserService) {
  }
  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getUserPosts(id: number) {
    this.userService.getPosts(id).subscribe(value => this.userPosts = value)
  }
}
