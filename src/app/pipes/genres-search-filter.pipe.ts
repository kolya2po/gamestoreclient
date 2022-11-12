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

    let result: Game[] = []

    for (let genre of genres) {
      if (genre.subGenres?.length !== 0) {
        for (let sub of genre.subGenres!) {
          result = result.concat(games.filter(g => g.genres?.includes(sub.name!)))
            .filter(this.onlyUnique);
        }
        continue;
      }
      games = games.filter(g => g.genres?.includes(genre.name!));
      result = games;
    }

    return result;
  }

  onlyUnique(value: any, index: any, self: string | any[]) {
    return self.indexOf(value) === index;
  }
}
