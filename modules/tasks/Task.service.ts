import type { ITasksRepository } from "./Tasks.repository";

export class TasksService {
	constructor(private readonly _repo: ITasksRepository) {}

	execute() {
		return this._repo.findAll();
	}
}
