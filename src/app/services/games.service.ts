import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "../models/game/game";
import {CreateGame} from "../models/game/create-game";
import {ImagePathDto} from "../models/imagePathDto";
import {GAMES_URL} from "../routes/api-routes";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<Game[]>(GAMES_URL);
  }

  public getById(id: number) {
    return this.http.get<Game>(`${GAMES_URL}/${id}`);
  }

  public create(game: CreateGame) {
    return this.http.post<Game>(GAMES_URL, game);
  }

  public update(game: Game) {
    return this.http.put(GAMES_URL, game);
  }

  public delete(id: number) {
    return this.http.delete(`${GAMES_URL}/${id}`);
  }

  public addImage(id: number, image: File) {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post<ImagePathDto>(`${GAMES_URL}/${id}/image`, formData);
  }
}
