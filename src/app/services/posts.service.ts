import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/post.interface";
import {urls} from "../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  byUserId(id:number): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts.byUserId(id))
  }

  byId(id: number): Observable<IPost>{
    return this.httpClient.get<IPost>(urls.posts.byId(id))
  }
}
