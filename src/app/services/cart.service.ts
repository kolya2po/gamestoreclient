import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cart} from "../models/cart/cart";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart = new Cart();

  private url = 'https://localhost:5001/api/carts';

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.get();
  }

  public get() {
    let cartId = +this.cookieService.get('cartId');
    return this.http.get<Cart>(`${this.url}/${cartId}`)
      .subscribe(c =>
        {
          if (!this.cookieService.get('cartId')) {
            this.cookieService.set('cartId', c.id!.toString())
          }
          this.cart = c;
        });
  }

  public addGame(gameId: number) {
    let cartId = +this.cookieService.get('cartId');
    return this.http.post(`${this.url}/${cartId}/game/${gameId}`, {})
      .subscribe(() => {
        this.get();
      });
  }

  public removeGame(gameId: number) {
    let cartId = +this.cookieService.get('cartId');
    return this.http.delete(`${this.url}/${cartId}/item/${gameId}`)
      .subscribe(() => {
        this.get();
      });
  }

  public update() {
    return this.http.put(this.url, this.cart);
  }
}
