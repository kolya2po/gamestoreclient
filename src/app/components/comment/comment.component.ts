import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from "../../models/comment/comment";
import {Game} from "../../models/game/game";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() game: Game = new Game();
  @Input() comment: Comment = new Comment();
  @Output() commentToDel = new EventEmitter<Comment>();

  constructor(public us: UsersService) { }

  ngOnInit(): void {
  }

  hideComment(comment: Comment) {
    comment.isVisible = true;
    this.commentToDel.emit(comment);
  }

  restore(comment: Comment) {
    comment.isDeleting = false;
    comment.isVisible = false;
    this.commentToDel.emit(comment);
  }
}
