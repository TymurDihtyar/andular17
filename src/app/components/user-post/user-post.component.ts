import {Component, Input} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";
import {ActivatedRoute, Router} from "@angular/router";

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
        this.router.navigate(['/posts/details'], {
            relativeTo: this.activatedRoute,
            state: this.userPost
        })
    }
}
