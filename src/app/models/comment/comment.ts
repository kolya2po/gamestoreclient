export class Comment {
  constructor(
    public id?: number,
    public text?: string,
    public creationDate?: string,
    public author?: string,
    public replies?: Comment[],
  ) { }
}
