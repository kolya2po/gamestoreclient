import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../models/game/game";
import {UsersService} from "../../services/users.service";
import {CommentsService} from "../../services/comments.service";
import {Comment} from "../../models/comment/comment";

@Component({
  selector: 'app-game-comments',
  templateUrl: './game-comments.component.html',
  styleUrls: ['./game-comments.component.css']
})
export class GameCommentsComponent implements OnInit {
  @Input() game: Game = new Game();
  isAdding: boolean = false;
  constructor(public us: UsersService,
              private cs: CommentsService) { }

  ngOnInit(): void {
  }

  deleteComment(comment: Comment) {
    this.cs.delete(comment.id!)
      .subscribe(() => {
        if (comment.parentCommentId === null) {
          this.game.comments = this.game.comments
            ?.filter(c => c.id !== comment.id);
          return;
        }

        let parent = this.game.comments?.find(c => c.id === comment.parentCommentId);
        parent!.replies = parent!.replies?.filter(r => r.id !== comment.id);
      });
  }
}
