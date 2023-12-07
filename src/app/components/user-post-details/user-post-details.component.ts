import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../interfaces/post.interface";
import {NgForOf, NgIf} from "@angular/common";
import {IComment} from "../../interfaces/comment.interface";
import {CommentsService} from "../../services/comments.service";
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private  commentsService:CommentsService) {
    this.activatedRoute.params.subscribe(value => {
      this.userPost = this.router.getCurrentNavigation()?.extras.state as IPost;
    })
    this.commentsService.byPostId(this.userPost.id).subscribe(value => this.comments = value)
  }
}
