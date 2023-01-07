import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Genre} from "../models/genre/genre";
import {GAMES_URL, GENRES_URL} from "../routes/api-routes";

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<Genre[]>(GENRES_URL);
  }

  public getById(id: number) {
    return this.http.get<Genre>(`${GENRES_URL}/${id}`);
  }

  public linkGenreToGame(gameId: number, genre: Genre) {
    return this.http.post(`${GAMES_URL}/${gameId}/genre/${genre.id}`, genre);
  }

  public unlinkGenreFromGame(gameId: number, genreId: number) {
    return this.http.delete(`${GAMES_URL}/${gameId}/genre/${genreId}`);
  }
}
