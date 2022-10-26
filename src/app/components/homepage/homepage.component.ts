import { Component, OnInit } from '@angular/core';
import {Game} from "../../models/game/game";
import {GamesService} from "../../services/gamesservice.service";
import {Router} from "@angular/router";
import {Genre} from "../../models/genre/genre";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  games: Game[] = [];
  genres: Genre[] = [];
  genresToFind: string[] = [];
  tagIsPressed = false;
  search = '';
  constructor(private gs: GamesService,
              public router: Router) { }

  ngOnInit(): void {
    this.gs.getAll().subscribe((data: Game[]) => this.games = data);
  }

  delete(id: number | undefined) {
    this.gs.delete(<number>id!).subscribe(() => {
      this.games = this.games.filter(g => g.id !== id);
    });
  }

  onChangeGenre(event : Event, genre: any) {
    this.genresToFind.push(genre.name);
  }
}
