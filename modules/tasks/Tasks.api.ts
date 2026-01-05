import { injectable } from 'tsyringe';
import { TaskEntity } from './Task.entity';
import { ITasksRepository } from './Tasks.repository';


@injectable()
export class TasksApiRepository implements ITasksRepository {
  async findAll(): Promise<TaskEntity[]> {
    return [
      new TaskEntity('1', 'Task 1', '2026-01-10'),
      new TaskEntity('2', 'Task 2', '2026-01-12'),
    ];
  }
}