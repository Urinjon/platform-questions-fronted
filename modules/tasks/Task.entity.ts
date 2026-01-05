
export class TaskEntity {
  constructor(
    public id: string,
    public title: string,
    public deadline: string
  ) {}

  get isExpired() {
    return new Date() > new Date(this.deadline);
  }
}
