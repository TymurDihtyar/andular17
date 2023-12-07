import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../interfaces/post.interface";
import {UserPostComponent} from "../user-post/user-post.component";
import {NgForOf, NgIf} from "@angular/common";

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
