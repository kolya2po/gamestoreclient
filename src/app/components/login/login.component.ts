import { Component, OnInit } from '@angular/core';
import {LoginModel} from "../../models/user/loginModel";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: LoginModel = new LoginModel();
  constructor(private us: UsersService, public router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.inputIsValid()) {
      this.us.login(this.loginModel);
    }
  }

  inputIsValid() {
    return this.loginModel.userName !== undefined && this.loginModel.password !== undefined
      && this.loginModel.userName.length !== 0 && this.loginModel.password.length !== 0;
  }
}
