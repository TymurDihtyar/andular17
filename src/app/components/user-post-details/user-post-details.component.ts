import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

import {IPost, IComment} from "../../interfaces";
import {CommentsService, PostsService} from "../../services";
import {CommentComponent} from "../comment/comment.component";

@Component({
  selector: 'app-user-post-details',
  standalone: true,
  imports: [
    NgIf,
    CommentComponent,
    NgForOf
  ],
  templateUrl: './user-post-details.component.html',
  styleUrl: './user-post-details.component.css'
})
export class UserPostDetailsComponent {
  userPost:IPost
  comments: IComment[]

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postsService:PostsService, private  commentsService:CommentsService) {
    this.activatedRoute.params.subscribe(({postId}) => {
      this.userPost = this.router.getCurrentNavigation()?.extras.state as IPost;

      if (!this.userPost) {
        this.postsService.byId(postId).subscribe(value => this.userPost = value)
      }

      this.commentsService.byPostId(postId).subscribe(value => this.comments = value)

    })
  }
}
