import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

import {IPost} from "../../interfaces";
import {UserPostComponent} from "../user-post/user-post.component";

@Component({
    selector: 'app-user-posts',
    standalone: true,
    imports: [
        UserPostComponent,
        NgForOf,
        NgIf
    ],
    templateUrl: './user-posts.component.html',
    styleUrl: './user-posts.component.css'
})
export class UserPostsComponent {
    userPosts: IPost[]

    constructor(private router: Router, private activatedRoute: ActivatedRoute,) {
        this.userPosts = this.router.getCurrentNavigation()?.extras.state as IPost[]
    }
}
