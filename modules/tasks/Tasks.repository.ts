import type { TaskEntity } from "./Task.entity";

export interface ITasksRepository {
	findAll(): Promise<TaskEntity[]>;
}
