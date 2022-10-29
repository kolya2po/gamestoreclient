import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../models/game/game";
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
  @Input() game: Game = new Game();
  isAdding = false;
  image: File | undefined = undefined;
  constructor(private gs: GamesService) { }

  ngOnInit(): void {
  }

  setFile(event: any) {
    this.image = event.target.files[0];
  }

  addImage() {
    this.gs.addImage(<number>this.game!.id, this.image!)
      .subscribe();
  }
}
