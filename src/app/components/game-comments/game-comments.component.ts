import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../models/game/game";
import {Comment} from "../../models/comment/comment";

@Component({
  selector: 'app-game-comments',
  templateUrl: './game-comments.component.html',
  styleUrls: ['./game-comments.component.css']
})
export class GameCommentsComponent implements OnInit {
  @Input() game: Game = new Game();
  constructor() { }

  ngOnInit(): void {
  }

  addComment(comment: Comment) {
    let parent = this.game.comments?.find(c => c.parentCommentId === comment.parentCommentId);
    if (parent !== undefined) {
      parent.replies!.push(comment);
      return;
    }

    this.game?.comments?.push(comment);
  }
}
