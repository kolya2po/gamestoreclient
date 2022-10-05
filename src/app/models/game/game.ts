import {Comment} from "../comment/comment";

export class Game {
  constructor(
    public id?: number,
    public imagePath?: string,
    public name?: string,
    public price?: number,
    public genres?: string[],
    public description?: string,
    public authorId?: number,
    public comments?: Comment[]
  ) { }
}
