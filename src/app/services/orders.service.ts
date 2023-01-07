import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Order} from "../models/order/order";
import {PaymentType} from "../models/order/payment-type";
import {CartService} from "./cart.service";
import {Router} from "@angular/router";
import {catchError} from "rxjs";
import {ORDERS_URL} from "../routes/api-routes";
import {SnackBarService} from "./snack-bar.service";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  order: Order = new Order();
  constructor(private http: HttpClient, private cookie: CookieService,
              private cs: CartService,
              private snackBar: SnackBarService,
              private router: Router) {
  }

  create() {
    let orderId = +this.cookie.get('orderId');
    let cartId = +this.cookie.get('cartId');
    return this.http.post<Order>(`${ORDERS_URL}/${orderId}/cart/${cartId}`, {})
      .subscribe(o => {
        this.order = o;
        this.cookie.set('orderId', o.id!.toString());
      });
  }

  confirm() {
    let cartId = +this.cookie.get('cartId');
    return this.http.put(`${ORDERS_URL}/${cartId}`, this.order)
      .pipe(catchError(err => {
        let resp = new HttpErrorResponse(err);
        this.snackBar.openSnackBar(resp.error);
        throw err;
      }))
      .subscribe(async () => {
        this.clearCookies();
        this.cs.get();
        this.snackBar.openSnackBar('Order confirmed');
        this.router.navigate(['']);
      });
  }

  getPaymentTypes() {
    return this.http.get<PaymentType[]>(`${ORDERS_URL}/payment-types`);
  }

  clearCookies() {
    this.cookie.delete('cartId');
    this.cookie.delete('orderId');
  }
}
