import { Component, OnInit } from '@angular/core';
import {Game} from "../../models/game/game";
import {GamesService} from "../../services/gamesservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
   games: Game[] = [];

  constructor(private gs: GamesService,
              public router: Router) { }

  ngOnInit(): void {
    this.gs.getAll().subscribe((data: Game[]) => this.games = data);
  }
}
