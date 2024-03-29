import { Component, OnInit } from '@angular/core';
import {Game} from "../../models/game/game";
import {GamesService} from "../../services/games.service";
import {Router} from "@angular/router";
import {Genre} from "../../models/genre/genre";
import {GenresService} from "../../services/genres.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  games: Game[] = [];
  genres: Genre[] = [];
  genresToFind: Genre[] = [];
  tagIsPressed = false;
  search = '';
  loading: boolean = true;

  constructor(private gs: GamesService,
              private genresService: GenresService,
              public us: UsersService,
              public router: Router) { }

  ngOnInit(): void {
    this.gs.getAll().subscribe((data: Game[]) => {
      this.games = data;
      this.loading = false;
    });
    this.genresService.getAll().subscribe((data: Genre[]) => this.genres = data);
  }

  onChangeGenre(genre: Genre) {
    if (!this.genresToFind.includes(genre)) {
      this.genresToFind.push(genre);
      this.genresToFind = [...this.genresToFind];

      this.setIsSelectedForSubGenres(genre, true);
    } else {
      this.genresToFind = this.genresToFind.filter(g => g.id !== genre.id);
      this.setIsSelectedForSubGenres(genre, false);
    }
  }

  filterGamesAfterDelete(id: number) {
    this.games = this.games.filter(g => g.id !== id);
  }

  setIsSelectedForSubGenres(genre: Genre, value: boolean) {
    if (genre.subGenres) {
      for (let subGenre of genre.subGenres) {
        subGenre.isSelected = value;
      }
    }
  }
}
