"use client";

import { TasksApiRepository } from "./Tasks.api";
import { TasksService } from "./Task.service";
import { TasksStore } from "./Tasks.store";

export function createTasksStore() {
	const repo = new TasksApiRepository();
	const service = new TasksService(repo);
	const store = new TasksStore(service);

	return store;
}
