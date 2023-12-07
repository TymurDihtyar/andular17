import { Component } from '@angular/core';

import {UserPostDetailsComponent} from "../../components/user-post-details/user-post-details.component";

@Component({
  selector: 'app-posts-details-page',
  standalone: true,
  imports: [
    UserPostDetailsComponent
  ],
  templateUrl: './posts-details-page.component.html',
  styleUrl: './posts-details-page.component.css'
})
export class PostsDetailsPageComponent {

}
