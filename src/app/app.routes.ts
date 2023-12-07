import { Routes } from '@angular/router';

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {UsersPageComponent} from "./pages/users-page/users-page.component";
import {UserDetailsPageComponent} from "./pages/user-details-page/user-details-page.component";
import {PostsDetailsPageComponent} from "./pages/posts-details-page/posts-details-page.component";
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";

export const routes: Routes = [
  {
  path: '', component:MainLayoutComponent, children:[
      {path: '', redirectTo:'users', pathMatch:'full'},
      {path:'users', component:UsersPageComponent},
      {path:'users/:id', component: UserDetailsPageComponent, children:[
          {path: 'posts',component:PostsPageComponent}
        ]},
      {path: 'posts/details', component:PostsDetailsPageComponent}
    ]
  }
];
