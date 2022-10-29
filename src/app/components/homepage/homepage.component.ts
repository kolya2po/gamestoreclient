import { Component, OnInit } from '@angular/core';
import {Game} from "../../models/game/game";
import {GamesService} from "../../services/games.service";
import {Router} from "@angular/router";
import {Genre} from "../../models/genre/genre";
import {GenresService} from "../../services/genres.service";

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
              public router: Router,
              private genresService: GenresService) { }

  ngOnInit(): void {
    this.gs.getAll().subscribe((data: Game[]) => this.games = data);
    this.genresService.getAll().subscribe((data: Genre[]) => this.genres = data);
  }

  delete(id: number | undefined) {
    this.gs.delete(<number>id!).subscribe(() => {
      this.games = this.games.filter(g => g.id !== id);
    });
  }

  onChangeGenre(genre: any) {
    if (!this.genresToFind.includes(genre)) {
      this.genresToFind.push(genre);
      this.genresToFind = [...this.genresToFind];
    } else {
      this.genresToFind = this.genresToFind.filter(g => g !== genre);
    }
  }
}
