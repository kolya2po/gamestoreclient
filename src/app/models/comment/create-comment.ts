export class CreateComment {
  constructor(
    public text?: string,
    public gameId?: number,
    public authorId?: number,
    public parentCommentId?: number
  ) {
  }
}
