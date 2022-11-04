import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../models/comment/comment";
import {CommentsService} from "../../services/comments.service";
import {Game} from "../../models/game/game";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() game: Game = new Game();
  @Input() comment: Comment = new Comment();

  constructor(private cs: CommentsService) { }

  ngOnInit(): void {
  }

  prepareDeleting() {

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
