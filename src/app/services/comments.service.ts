import { Injectable } from '@angular/core';
import {CreateComment} from "../models/comment/create-comment";
import {HttpClient} from "@angular/common/http";
import {Comment} from "../models/comment/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url = 'https://localhost:5001/api/comments';
  constructor(private http: HttpClient) { }

  public create(comment: CreateComment) {
    return this.http.post<Comment>(this.url, comment);
  }
}
