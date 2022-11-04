import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../models/game/game";
import {UsersService} from "../../services/users.service";
@Component({
  selector: 'app-game-comments',
  templateUrl: './game-comments.component.html',
  styleUrls: ['./game-comments.component.css']
})
export class GameCommentsComponent implements OnInit {
  @Input() game: Game = new Game();
  isAdding: boolean = false;
  constructor(public us: UsersService) {
  }

  ngOnInit(): void {

  }
}
