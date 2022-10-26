import { Pipe, PipeTransform } from '@angular/core';
import {Game} from "../models/game/game";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(games: Game[], search: string = ''): Game[] {
    if (!search.trim() || search.length < 3) {
      return games;
    }

    return games.filter(g => {
      return g?.name?.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
  }
}
