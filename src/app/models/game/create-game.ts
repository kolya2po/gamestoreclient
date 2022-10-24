export class CreateGame
{
  constructor(
    public name?: string,
    public description?: string,
    public price?: number,
    public authorId?: number
  ) {
  }
}
