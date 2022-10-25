import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Game} from "../../models/game/game";
import {GamesService} from "../../services/gamesservice.service";

@Component({
  selector: 'app-edit-game-page',
  templateUrl: './edit-game-page.component.html',
  styleUrls: ['./edit-game-page.component.css']
})
export class EditGamePageComponent implements OnInit {
  gameId = 0;
  game: Game = new Game();

  constructor(private route: ActivatedRoute, private gs: GamesService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.gameId = +this.route.snapshot?.paramMap?.get('id');
    this.gs.getById(this.gameId).subscribe(g => this.game = g);
  }
}
