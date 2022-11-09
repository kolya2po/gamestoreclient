import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Order} from "../models/order/order";
import {PaymentType} from "../models/order/payment-type";
import {CartService} from "./cart.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url = 'https://localhost:5001/api/orders';
  order: Order = new Order();
  constructor(private http: HttpClient, private cookie: CookieService,
              private cs: CartService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  create() {
    let orderId = +this.cookie.get('orderId');
    let cartId = +this.cookie.get('cartId');
    return this.http.post<Order>(`${this.url}/${orderId}/cart/${cartId}`, {})
      .subscribe(o => {
        this.order = o;
        this.cookie.set('orderId', o.id!.toString());
      });
  }

  confirm() {
    let cartId = +this.cookie.get('cartId');
    return this.http.put(`${this.url}/${cartId}`, this.order)
      .subscribe(async () => {
        this.cookie.delete('cartId');
        this.cookie.delete('orderId');
        this.cs.get();
        this.snackBar.open('Order confirmed');
        await this.delay(2000);
        this.snackBar.dismiss();
        this.router.navigate(['']);
      });
  }

  getPaymentTypes() {
    return this.http.get<PaymentType[]>(`${this.url}/payment-types`);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
