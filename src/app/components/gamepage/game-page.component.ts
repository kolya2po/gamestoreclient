import { Component, OnInit } from '@angular/core';
import {Game} from "../../models/game/game";
import {Comment} from "../../models/comment/comment";

@Component({
  selector: 'app-gamepage',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  comments: Comment[] = [
    new Comment(1, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad commodi dolore doloremque doloribus excepturi fugit hic illum incidunt ipsum iusto molestiae nostrum odit officia placeat, provident quia quibusdam quod repellat saepe similique tempore temporibus tenetur voluptates voluptatibus. Accusantium adipisci aspernatur atque beatae blanditiis culpa debitis, deleniti dolore doloremque eaque eius eligendi eum exercitationem fuga incidunt iure minima minus mollitia nemo nesciunt nobis obcaecati odit officia perferendis perspiciatis possimus provident quae quaerat quasi quia quidem quod ratione reiciendis sapiente, soluta unde voluptas? Adipisci architecto assumenda delectus et in non quisquam recusandae, unde? Aliquid deserunt eius molestiae provident quae qui ullam?\n', '', 'User1', [
      new Comment(2, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad commodi dolore doloremque doloribus excepturi fugit hic illum incidunt ipsum iusto molestiae nostrum odit officia placeat, provident quia quibusdam quod repellat saepe similique tempore temporibus tenetur voluptates voluptatibus. Accusantium adipisci aspernatur atque beatae blanditiis culpa debitis, deleniti dolore doloremque eaque eius eligendi eum exercitationem fuga incidunt iure minima minus mollitia nemo nesciunt nobis obcaecati odit officia perferendis perspiciatis possimus provident quae quaerat quasi quia quidem quod ratione reiciendis sapiente, soluta unde voluptas? Adipisci architecto assumenda delectus et in non quisquam recusandae, unde? Aliquid deserunt eius molestiae provident quae qui ullam?\n', '', 'User2')
    ]),
    new Comment(3, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad commodi dolore doloremque doloribus excepturi fugit hic illum incidunt ipsum iusto molestiae nostrum odit officia placeat, provident quia quibusdam quod repellat saepe similique tempore temporibus tenetur voluptates voluptatibus. Accusantium adipisci aspernatur atque beatae blanditiis culpa debitis, deleniti dolore doloremque eaque eius eligendi eum exercitationem fuga incidunt iure minima minus mollitia nemo nesciunt nobis obcaecati odit officia perferendis perspiciatis possimus provident quae quaerat quasi quia quidem quod ratione reiciendis sapiente, soluta unde voluptas? Adipisci architecto assumenda delectus et in non quisquam recusandae, unde? Aliquid deserunt eius molestiae provident quae qui ullam?\n', '', 'User3', [
      new Comment(4, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad commodi dolore doloremque doloribus excepturi fugit hic illum incidunt ipsum iusto molestiae nostrum odit officia placeat, provident quia quibusdam quod repellat saepe similique tempore temporibus tenetur voluptates voluptatibus. Accusantium adipisci aspernatur atque beatae blanditiis culpa debitis, deleniti dolore doloremque eaque eius eligendi eum exercitationem fuga incidunt iure minima minus mollitia nemo nesciunt nobis obcaecati odit officia perferendis perspiciatis possimus provident quae quaerat quasi quia quidem quod ratione reiciendis sapiente, soluta unde voluptas? Adipisci architecto assumenda delectus et in non quisquam recusandae, unde? Aliquid deserunt eius molestiae provident quae qui ullam?\n', '', 'User4')
    ])
  ];
  game: Game = new Game(1, 'https://www.joshobrouwers.com/site/assets/files/2396/lords-of-hellas.1024x0.jpg', 'test1', 22.11, ['genre1', 'FPS', 'Action'],
  '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur, ipsa! Aliquid, dolorem modi obcaecati quae rem saepe tempora ut.\n', 1, this.comments)
  constructor() { }

  ngOnInit(): void {
  }

}
