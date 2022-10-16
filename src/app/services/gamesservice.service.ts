import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "../models/game/game";

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
}
