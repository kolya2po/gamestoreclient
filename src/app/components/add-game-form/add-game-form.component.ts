import { Component } from '@angular/core';
import {CreateGame} from "../../models/game/create-game";
import {Router} from "@angular/router";
import {GamesService} from "../../services/gamesservice.service";

@Component({
  selector: 'app-add-game-form',
  templateUrl: './add-game-form.component.html',
  styleUrls: ['./add-game-form.component.css']
})
export class AddGameFormComponent {
  game: CreateGame = new CreateGame();

  constructor(private router: Router, private gs: GamesService) { }

  async createGame() {
    // will change this when as soon as I get working authentication
    this.game.authorId = 1;
    console.log("sadas");
    this.gs.create(this.game)
      .subscribe();
    await this.delay(1000);

    return this.router.navigate(['']);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
