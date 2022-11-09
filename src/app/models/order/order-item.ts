export class OrderItem {
  constructor(
    public id?: number,
    public gameName?: string,
    public gamePrice?: number,
    public gameDescription?: string,
    public quantity?: number,
    public orderId?: number,
  ) {
  }
}
