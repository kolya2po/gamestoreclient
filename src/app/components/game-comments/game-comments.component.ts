import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Game} from "../../models/game/game";
import {UsersService} from "../../services/users.service";
import {Comment} from "../../models/comment/comment";
import {CommentsService} from "../../services/comments.service";
@Component({
  selector: 'app-game-comments',
  templateUrl: './game-comments.component.html',
  styleUrls: ['./game-comments.component.css']
})
export class GameCommentsComponent implements OnInit, OnDestroy {
  @Input() game: Game = new Game();
  isAdding: boolean = false;

  commentsToDel: Comment[] = [];
  constructor(public us: UsersService,
              private cs: CommentsService) {
  }

  ngOnDestroy(): void {
    for (let comment of this.commentsToDel) {
      this.cs.delete(comment.id!).subscribe();
    }
  }

  ngOnInit(): void {

  }

  changeItemsToDel(comment: Comment) {
    if (this.commentsToDel.includes(comment)) {
      this.commentsToDel = this.commentsToDel.filter(c => c.id !== comment.id);
      console.log(this.commentsToDel);
      return;
    }

    this.commentsToDel.push(comment);

    console.log(this.commentsToDel);
  }
}
