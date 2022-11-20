import { Component, OnInit } from '@angular/core';
import {Game} from "../../models/game/game";
import {GamesService} from "../../services/games.service";
import {Router} from "@angular/router";
import {Genre} from "../../models/genre/genre";
import {GenresService} from "../../services/genres.service";
import {UsersService} from "../../services/users.service";
import {CartService} from "../../services/cart.service";

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

  constructor(private gs: GamesService,
              public router: Router,
              private genresService: GenresService,
              public us: UsersService,
              public cs: CartService) { }

  ngOnInit(): void {
    this.gs.getAll().subscribe((data: Game[]) => this.games = data);
    this.genresService.getAll().subscribe((data: Genre[]) => this.genres = data);
  }

  delete(id: number | undefined) {
    this.gs.delete(<number>id!).subscribe(() => {
      this.games = this.games.filter(g => g.id !== id);
    });
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

  showControls(authorId: number, img: HTMLImageElement, control: HTMLDivElement) {
    if (this.us.user.id === authorId) {
      img.style.opacity = '0.2';
      control.style.opacity = '1';
    }
  }

  setIsSelectedForSubGenres(genre: Genre, value: boolean) {
    if (genre.subGenres) {
      for (let subGenre of genre.subGenres) {
        subGenre.isSelected = value;
      }
    }
  }
}
