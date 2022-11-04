import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cart} from "../models/cart/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart = new Cart();

  private url = 'https://localhost:5001/api/carts';

  constructor(private http: HttpClient) {
    this.get().subscribe((c) => {
      this.cart = c;
    })
  }

  public get() {
    return this.http.get<Cart>(this.url);
  }

  public addGame(gameId: number) {
    return this.http.post(`this.url/game/${gameId}`, {});
  }

  public removeGame(gameId: number) {
    return this.http.delete(`this.url/item/${gameId}`);
  }
}
