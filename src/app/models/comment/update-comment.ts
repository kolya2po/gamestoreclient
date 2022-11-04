export class UpdateComment {
  constructor(
    public id?: number,
    public text?: string,
    public authorId?: number,
    public parentCommentId?: number,
    public gameId?: number
  ) {}
}
