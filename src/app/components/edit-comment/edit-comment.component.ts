import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from "../../models/comment/comment";
import {CommentsService} from "../../services/comments.service";
import {UpdateComment} from "../../models/comment/update-comment";
import {Game} from "../../models/game/game";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  @Input() comment: Comment = new Comment();
  @Input() game: Game = new Game();
  @Output() isEdited = new EventEmitter<boolean>();

  constructor(private cs: CommentsService, private us: UsersService) { }

  ngOnInit(): void {
  }

  update() {
    if (this.inputIsValid()) {
      let updateDto = this.getUpdateDto();
      this.cs.update(updateDto).subscribe();
      this.isEdited.emit(false);
    }
  }

  inputIsValid() {
    return this.comment.text !== undefined && this.comment.text.length !== 0;
  }

  private getUpdateDto(): UpdateComment {
    let updateDto = new UpdateComment();
    updateDto.id = this.comment.id;
    updateDto.text = this.comment.text;
    updateDto.parentCommentId = this.comment.parentCommentId;
    updateDto.gameId = this.game.id;
    updateDto.authorId = this.us.user.id;
    return updateDto;
  }
}
