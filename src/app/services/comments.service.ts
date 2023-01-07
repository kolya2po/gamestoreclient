import { Injectable } from '@angular/core';
import {CreateComment} from "../models/comment/create-comment";
import {HttpClient} from "@angular/common/http";
import {Comment} from "../models/comment/comment";
import {UpdateComment} from "../models/comment/update-comment";
import {COMMENTS_URL} from "../routes/api-routes";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private http: HttpClient) { }

  public create(comment: CreateComment) {
    return this.http.post<Comment>(COMMENTS_URL, comment);
  }

  public delete(id: number) {
    return this.http.delete(`${COMMENTS_URL}/${id}`);
  }

  public update(comment: UpdateComment) {
    return this.http.put(COMMENTS_URL, comment);
  }
}
