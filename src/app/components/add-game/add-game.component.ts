import { Component } from '@angular/core';
import {CreateGame} from "../../models/game/create-game";
import {Router} from "@angular/router";
import {GamesService} from "../../services/games.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent {
  game: CreateGame = new CreateGame();

  constructor(private router: Router, private gs: GamesService,
              private us: UsersService) { }

  async createGame() {
    if (!this.gameIsValid()) {
      return;
    }
    this.game.authorId = this.us.user.id;
    this.gs.create(this.game)
      .subscribe();
    await this.delay(500);

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
