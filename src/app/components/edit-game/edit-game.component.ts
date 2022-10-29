import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../models/game/game";
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  @Input() game: Game = new Game();
  constructor(private gs: GamesService) { }

  ngOnInit(): void {
  }

  updateGame() {
    console.log(this.game);
    this.gs.update(this.game).subscribe();
  }
}
