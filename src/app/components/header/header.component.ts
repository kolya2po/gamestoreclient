import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public us: UsersService,
              public cs: CartService) { }

  ngOnInit(): void {
  }
}
