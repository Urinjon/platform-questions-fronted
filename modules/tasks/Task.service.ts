import { inject, injectable } from 'tsyringe';
import type { ITasksRepository } from './Tasks.repository';


@injectable()
export class TasksService {
  constructor(
    @inject('ITasksRepository')
    private readonly repo: ITasksRepository
  ) {}

  execute() {
    return this.repo.findAll();
  }
}
