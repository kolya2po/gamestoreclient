import {OrderItem} from "./order-item";
import {ContactInformation} from "./contact-information";

export class Order {
  constructor(
    public id?: number,
    public orderItems?: OrderItem[],
    public contactInformation?: ContactInformation,
    public comments?: string,
    public paymentTypeId?: number
  ) {
  }
}
