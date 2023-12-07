import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

import {UserDetailsComponent} from "../../components/user-details/user-details.component";

@Component({
  selector: 'app-user-details-page',
  standalone: true,
  imports: [
    RouterOutlet,
    UserDetailsComponent
  ],
  templateUrl: './user-details-page.component.html',
  styleUrl: './user-details-page.component.css'
})
export class UserDetailsPageComponent {

}
