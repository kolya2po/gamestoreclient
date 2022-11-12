import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../../services/orders.service";
import {PaymentType} from "../../models/order/payment-type";
import {ContactInformation} from "../../models/order/contact-information";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  paymentTypes: PaymentType[] = [];
  contactInfo = new ContactInformation();
  constructor(public os: OrdersService, private cs: CartService) { }

  ngOnInit(): void {
    this.os.getPaymentTypes()
      .subscribe(pt => {
        this.paymentTypes = pt;
      })

    this.cs.update().subscribe(() => {
      this.os.create();
      this.cs.get();
    })
  }

  confirm() {
    this.contactInfo.orderId = this.os.order.id;
    this.os.order.contactInformation = this.contactInfo;
    this.os.confirm();
  }
}
