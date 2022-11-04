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

  deleteComment() {
    this.cs.delete(this.comment.id!)
      .subscribe(() => {
        if (this.comment.parentCommentId === null) {
          this.game.comments = this.game.comments
            ?.filter(c => c.id !== this.comment.id);
          return;
        }

        let parent = this.game.comments?.find(c => c.id === this.comment.parentCommentId);
        parent!.replies = parent!.replies?.filter(r => r.id !== this.comment.id);
      });
  }
}
