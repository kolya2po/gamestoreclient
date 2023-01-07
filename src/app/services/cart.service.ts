import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cart} from "../models/cart/cart";
import {CookieService} from "ngx-cookie-service";
import {CART_URL} from "../routes/api-routes";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart = new Cart();

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  public get() {
    let cartId = +this.cookieService.get('cartId');
    return this.http.get<Cart>(`${CART_URL}/${cartId}`)
      .subscribe(c =>
        {
          if (cartId === 0) {
            this.cookieService.set('cartId', c.id!.toString())
          }
          this.cart = c;
        });
  }

  public addGame(gameId: number) {
    let cartId = +this.cookieService.get('cartId');
    return this.http.post<Cart>(`${CART_URL}/${cartId}/game/${gameId}`, {})
      .subscribe((c) => {
        if (cartId === 0) {
          this.cookieService.set('cartId', c.id!.toString())
        }
        this.get();
      });
  }

  public removeGame(gameId: number) {
    let cartId = +this.cookieService.get('cartId');
    return this.http.delete(`${CART_URL}/${cartId}/item/${gameId}`)
      .subscribe(() => {
        this.cart.cartItems = this.cart.cartItems?.filter(c => c.gameId !== gameId);
      });
  }

  public update() {
    return this.http.put(CART_URL, this.cart);
  }
}
