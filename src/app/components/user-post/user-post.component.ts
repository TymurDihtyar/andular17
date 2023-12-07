import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../interfaces";

@Component({
  selector: 'app-user-post',
  standalone: true,
  imports: [],
  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.css'
})
export class UserPostComponent {
@Input() userPost :IPost

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }

    toPostDetails() {
        this.router.navigate(['posts', this.userPost.id,'details'], {
            state: this.userPost
        })
    }
}
