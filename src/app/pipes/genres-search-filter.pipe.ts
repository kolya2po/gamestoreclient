import { Pipe, PipeTransform } from '@angular/core';
import {Game} from "../models/game/game";
import {Genre} from "../models/genre/genre";

@Pipe({
  name: 'genresSearchFilter'
})
export class GenresSearchFilterPipe implements PipeTransform {
  transform(games: Game[], genres: Genre[]): Game[] {
    if (genres.length === 0) {
      return games;
    }

    // TODO: rewrite the logic
    for (let genre of genres) {
      if (genre.subGenres?.length !== 0) {
        for (let sub of genre.subGenres!) {
          console.log(sub.name);
          games = games.filter(g => g.genres?.includes(sub.name!));
        }
      }
      games = games.filter(g => g.genres?.includes(genre.name!));
    }

    return games;
  }
}
