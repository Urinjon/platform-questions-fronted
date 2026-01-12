import { TaskEntity } from "./Task.entity";
import type { ITasksRepository } from "./Tasks.repository";

export class TasksApiRepository implements ITasksRepository {
	async findAll(): Promise<TaskEntity[]> {
		return [
			new TaskEntity("1", "Task 1", "2026-01-10"),
			new TaskEntity("2", "Task 2", "2026-01-12"),
		];
	}
}
