import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CreateComment} from "../../models/comment/create-comment";
import {CommentsService} from "../../services/comments.service";
import {UsersService} from "../../services/users.service";
import {Comment} from "../../models/comment/comment";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() gameId: number = 0;
  @Output() newComment = new EventEmitter<Comment>();

  isAdding = false;
  comment: CreateComment = new CreateComment();
  constructor(private cs: CommentsService,
              private us: UsersService) { }

  ngOnInit(): void {
  }

  create(parentId?: number) {
    if (this.inputIsValid()) {
      this.comment.authorId = this.us.user.id;
      this.comment.gameId = this.gameId;
      this.comment.parentCommentId = parentId;
      this.cs.create(this.comment)
        .subscribe((c) => {
        this.newComment.emit(c);
        this.comment.text = "";
      });
    }
  }

  cancel() {
    this.isAdding = false;
    this.comment.text = "";
  }

  inputIsValid() {
    return this.comment.text !== undefined && this.comment.text.length !== 0;
  }
}
