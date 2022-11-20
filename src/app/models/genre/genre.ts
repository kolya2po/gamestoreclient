export class Genre {
  constructor(
    public id?: number,
    public name?: string,
    public subGenres?: Genre[],
    public isSelected: boolean = false
  ) { }
}
