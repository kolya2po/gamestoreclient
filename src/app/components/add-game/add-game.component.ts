import { Component } from '@angular/core';
import {CreateGame} from "../../models/game/create-game";
import {Router} from "@angular/router";
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  game: CreateGame = new CreateGame();

  constructor(private router: Router, private gs: GamesService) { }

  async createGame() {
    if (!this.gameIsValid()) {
      return;
    }

    // will change this when as soon as I get working authentication
    this.game.authorId = 1;
    this.gs.create(this.game)
      .subscribe();
    await this.delay(1000);

    return this.router.navigate(['']);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  gameIsValid(): boolean {
    return this.game.name !== undefined && this.game.description !== undefined
      && this.game.price !== 0 && <number>this.game.price > 0;
  }
}
