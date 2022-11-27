import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../models/cart/cart-item";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit, OnDestroy {

  constructor(public cs: CartService, public router: Router,
              private snackBar: MatSnackBar) { }

  ngOnDestroy(): void {
    this.cs.update()
      .subscribe(() => {
        this.cs.get();
      });
  }

  ngOnInit(): void {
    window.onbeforeunload = () => this.ngOnDestroy();
    this.cs.get();
  }

  increase(item: CartItem) {
    item.quantity!++;
    this.cs.cart.totalPrice! += item.game?.price!;
  }

  decrease(item: CartItem) {
    if (item.quantity === 1) {
      this.cs.removeGame(item.gameId!);
    }
    item.quantity!--;
    this.cs.cart.totalPrice! -= item.game?.price!;
  }

  proceed() {
    if (this.cs.cart.cartItems?.length === 0) {
      this.snackBar.open('Cart is empty.', 'Ok');
      return;
    }
    this.router.navigate(['order']);
  }
}
