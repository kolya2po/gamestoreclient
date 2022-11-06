import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cart} from "../models/cart/cart";
import {CartItem} from "../models/cart/cart-item";

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
    return this.http.post<CartItem>(`${this.url}/game/${gameId}`, {})
      .subscribe((ci) => {
        if (!this.cart.cartItems?.includes(ci)) {
          this.cart.cartItems?.push(ci);
          this.cart.totalItems!++;
        }
      });
  }

  public removeGame(gameId: number) {
    return this.http.delete(`${this.url}/item/${gameId}`)
      .subscribe(() => {
        this.cart.cartItems = this.cart.cartItems?.filter(ci => ci.gameId !== gameId);
        this.cart.totalItems!--;
      });
  }
}
