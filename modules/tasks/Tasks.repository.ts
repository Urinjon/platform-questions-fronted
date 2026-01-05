import { TaskEntity } from "./Task.entity";


export interface ITasksRepository {
  findAll(): Promise<TaskEntity[]>;
}
