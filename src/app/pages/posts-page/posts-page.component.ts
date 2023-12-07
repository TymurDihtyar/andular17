import {Component} from '@angular/core';
import {NgIf} from "@angular/common";

import {UserPostsComponent} from "../../components/user-posts/user-posts.component";

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [
    UserPostsComponent,
    NgIf
  ],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {

}
