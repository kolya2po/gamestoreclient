import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Order} from "../models/order/order";
import {PaymentType} from "../models/order/payment-type";
import {CartService} from "./cart.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {catchError} from "rxjs";

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
      .pipe(catchError(err => {
        let resp = new HttpErrorResponse(err);
        this.openSnackBar(resp.error);
        throw err;
      }))
      .subscribe(async () => {
        this.clearCookies();
        this.cs.get();
        this.openSnackBar('Order confirmed');
        this.router.navigate(['']);
      });
  }

  getPaymentTypes() {
    return this.http.get<PaymentType[]>(`${this.url}/payment-types`);
  }

  clearCookies() {
    this.cookie.delete('cartId');
    this.cookie.delete('orderId');
  }

  openSnackBar(message: any) {
    this.snackBar.open(message, '', {
      duration: 2000
    });
  }
}
