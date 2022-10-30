import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {RegistrationModel} from "../../models/user/registrationModel";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationModel: RegistrationModel = new RegistrationModel();

  constructor(private us: UsersService, public router: Router) { }

  ngOnInit(): void {
  }

  register() {
    if (this.inputIsValid()) {
      this.us.register(this.registrationModel);
    }
  }

  inputIsValid() {
    return this.registrationModel.firstName !== undefined &&
          this.registrationModel.lastName !== undefined &&
          this.registrationModel.userName !== undefined &&
          this.registrationModel.email !== undefined &&
          this.registrationModel.password !== undefined &&
          this.registrationModel.firstName.length !== 0 &&
          this.registrationModel.lastName.length !== 0 &&
          this.registrationModel.userName.length !== 0 &&
          this.registrationModel.email.length !== 0 &&
          this.registrationModel.password.length !== 0;
  }
}
