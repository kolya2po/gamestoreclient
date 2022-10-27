import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Genre} from "../models/genre/genre";

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private url = 'https://localhost:5001/api/genres';
  private gameUrl = 'https://localhost:5001/api/games';

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<Genre[]>(this.url);
  }

  public getById(id: number) {
    return this.http.get<Genre>(`${this.url}/${id}`);
  }

  public linkGenreToGame(gameId: number, genre: Genre) {
    return this.http.post(`${this.gameUrl}/${gameId}/genre/${genre.id}`, genre);
  }

  public unlinkGenreFromGame(gameId: number, genreId: number) {
    return this.http.delete(`${this.gameUrl}/${gameId}/genre/${genreId}`);
  }
}
