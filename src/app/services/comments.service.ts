import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/post.interface";
import {urls} from "../constants/urls";
import {IComment} from "../interfaces/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) { }
  byPostId(id:number): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(urls.comments.byPostId(id))
  }
}
