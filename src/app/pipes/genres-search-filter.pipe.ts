import { Pipe, PipeTransform } from '@angular/core';
import {Game} from "../models/game/game";

@Pipe({
  name: 'genresSearchFilter'
})
export class GenresSearchFilterPipe implements PipeTransform {
  transform(games: Game[], genres: string[]): Game[] {
    if (genres.length === 0) {
      return games;
    }

    for (let genre of genres) {
      games = games.filter(g => g.genres?.includes(genre));
    }

    return games;
  }
}
