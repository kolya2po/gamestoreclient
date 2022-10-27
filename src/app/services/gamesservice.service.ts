import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "../models/game/game";
import {CreateGame} from "../models/game/create-game";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private url = 'https://localhost:5001/api/games';

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<Game[]>(this.url);
  }

  public getById(id: number) {
    return this.http.get<Game>(`${this.url}/${id}`);
  }

  public create(game: CreateGame) {
    return this.http.post<Game>(this.url, game);
  }

  public delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  public addImage(id: number, image: File) {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(`${this.url}/${id}/image`, formData);
  }
}
