import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from "../../models/game/game";
import {CartService} from "../../services/cart.service";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() game: Game = new Game();
  @Output() deleteGameId = new EventEmitter<number>();

  constructor(public cs: CartService,
              public us: UsersService,
              public router: Router,
              private gs: GamesService) { }

  ngOnInit(): void {
  }

  showControls(authorId: number, img: HTMLImageElement, control: HTMLDivElement) {
    if (this.us.user.id === authorId) {
      img.style.opacity = '0.2';
      control.style.opacity = '1';
    }
  }

  delete(id: number) {
    this.gs.delete(<number>id!).subscribe(() => {
      this.deleteGameId.emit(id);
    });
  }
}
