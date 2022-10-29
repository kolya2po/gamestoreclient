import { Component, OnInit } from '@angular/core';
import {Game} from "../../models/game/game";
import {GamesService} from "../../services/games.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gamepage',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  game: Game | null = null;
  constructor(private gs: GamesService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.router.snapshot.paramMap.get('id');
    console.log(id);
    this.gs.getById(id).subscribe(data => this.game = data);
  }

}
