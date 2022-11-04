import {CartItem} from "./cart-item";

export class Cart {
  constructor(
    public id?: number,
    public totalItems?: number,
    public cartItems?: CartItem[],
    public totalPrice?: number
  ) { }
}
