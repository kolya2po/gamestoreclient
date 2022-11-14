import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CreateComment} from "../../models/comment/create-comment";
import {CommentsService} from "../../services/comments.service";
import {UsersService} from "../../services/users.service";
import {Comment} from "../../models/comment/comment";
import {Game} from "../../models/game/game";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() game: Game = new Game();
  @Input() parentCommentId: number = 0;
  @Output() isAdded = new EventEmitter<boolean>();

  comment: CreateComment = new CreateComment();
  constructor(private cs: CommentsService,
              private us: UsersService) { }

  ngOnInit(): void {
  }

  create() {
    if (this.inputIsValid()) {
      this.comment.authorId = this.us.user.id;
      this.comment.gameId = this.game.id;
      if (this.parentCommentId !== 0) {
        this.comment.parentCommentId = this.parentCommentId;
      }
      this.cs.create(this.comment)
        .subscribe((c) => {
          this.addToGame(c);
          this.isAdded.emit(false);
          this.parentCommentId = 0;
        });
    }
  }

  addToGame(comment: Comment) {
     comment.author = this.us.user.userName;
     if (this.parentCommentId === 0) {
       this.game.comments?.push(comment);
        return;
     }

    let parentInReplies = this.game.comments?.flatMap(c => c.replies!)
      .find(r => r.id === this.parentCommentId);

    if (parentInReplies !== null) {
      parentInReplies!.replies!.push(comment);
      return;
    }

    let parent = this.game.comments?.find(c => c.id === this.parentCommentId);
    parent!.replies!.push(comment);
    return;
  }

  cancel() {
    this.isAdded.emit(false)
    this.comment.text = "";
    this.parentCommentId = 0;
  }

  inputIsValid() {
    return this.comment.text !== undefined && this.comment.text.length !== 0;
  }
}
