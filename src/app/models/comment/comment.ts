export class Comment {
  constructor(
    public id?: number,
    public text?: string,
    public creationDate?: string,
    public parentCommentId?: number,
    public author?: string,
    public replies?: Comment[],
    public isReplying?: boolean,
    public isEditing?: boolean
  ) { }
}
