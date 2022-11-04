import {GameCart} from "./game-cart";

export class CartItem {
  constructor(
    public gameId?: number,
    public game?: GameCart,
    public quantity?: number,
    public cartId?: number,
  ) {
  }
}
