import {Component, Input, OnInit} from '@angular/core';
import {Genre} from "../../models/genre/genre";
import {GenresService} from "../../services/genres.service";
import {Game} from "../../models/game/game";

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrls: ['./edit-genres.component.css']
})
export class EditGenresComponent implements OnInit {
  @Input() game: Game = new Game();
  isRemoving = false;
  isAdding = false;
  idToAdd = 0;
  nameToRemove = '';
  genres: Genre[] = [];

  constructor(private gs: GenresService) { }

  ngOnInit(): void {
    this.gs.getAll().subscribe(data => {
      console.log(data);
      for (let parentGenre of data) {
        if (parentGenre.subGenres?.length === 0) {
          this.genres.push(parentGenre);
          continue;
        }
        for (let subGenre of parentGenre.subGenres!) {
          this.genres.push(subGenre);
        }
      }
    });
  }

  addGenre() {
    let genre = this.genres.find(c => c.id == this.idToAdd);
    let genreFromGame = this.game.genres?.find(c => c == <string>genre!.name);
    if (genreFromGame === undefined)
    {
      this.game.genres!.push(<string>genre!.name);
      this.gs.linkGenreToGame(<number>this.game.id, <Genre>genre)
        .subscribe(() => {
          this.idToAdd = 0;
        });
    }
  }

  removeGenre() {
    let genre = this.genres.find(c => c.name === this.nameToRemove);
    this.gs.unlinkGenreFromGame(<number>this.game!.id, <number>genre!.id)
      .subscribe(() => {
        this.game.genres = this.game.genres!.filter(c => c !== this.nameToRemove);
        this.nameToRemove = '';
    });
  }
}
