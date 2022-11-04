import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-add-user-avatar',
  templateUrl: './add-user-avatar.component.html',
  styleUrls: ['./add-user-avatar.component.css']
})
export class AddUserAvatarComponent implements OnInit {
  isAdding = false;
  image: File | undefined = undefined;
  constructor(public us: UsersService) { }

  ngOnInit(): void {
  }

  setFile(event: any) {
    this.image = event.target.files[0];
  }

  addImage() {
    this.us.addAvatar(this.image!)
      .subscribe((imageDto) => {
        this.us.user.avatarImagePath = imageDto.path;
      });
  }
}
