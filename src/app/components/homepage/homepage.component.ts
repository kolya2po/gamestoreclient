import { Component, OnInit } from '@angular/core';
import {Game} from "../../models/game/game";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
   games: Game[] = [
    new Game(1, 'https://www.joshobrouwers.com/site/assets/files/2396/lords-of-hellas.1024x0.jpg', 'test1', 22.11, ['genre1', 'FPS'],
      'test1', 1, undefined),
     new Game(2, 'https://cdn.mos.cms.futurecdn.net/rJ6wgSVrEVGzE7Zr5RfSBg-1200-80.jpg.webp', 'test2', 223.00, ['genre1', 'race'],
       'test2', 2, undefined),
     new Game(3, 'https://i.playground.ru/e/2uwUVtsllov7be1kyPrT3w.jpeg?200x277', 'test2', 22.00, ['genre1', 'action'],
       'test2', 3, undefined),
     new Game(3, 'https://i.playground.ru/e/2uwUVtsllov7be1kyPrT3w.jpeg?200x277', 'test2', 22.00, ['genre1', 'action'],
       'test2', 3, undefined),
     new Game(3, 'https://www.codemasters.com/wp-content/uploads/2018/02/GAME-PAGE-SCREEN-GRID-2-1.jpg', 'test2', 22.00, ['genre1', 'action'],
       'test2', 3, undefined)
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
