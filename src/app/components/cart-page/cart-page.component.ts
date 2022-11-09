import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../models/cart/cart-item";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit, OnDestroy {

  constructor(public cs: CartService) { }

  ngOnDestroy(): void {
    this.cs.update();
  }

  ngOnInit(): void {
    window.onbeforeunload = () => this.ngOnDestroy();
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
}
