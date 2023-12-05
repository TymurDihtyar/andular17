import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

import {IPost} from "../../interfaces";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  @Input() userPosts: IPost[]
}
