"use client";

import { container } from 'tsyringe';
import { TasksApiRepository } from './Tasks.api';
import { TasksService } from './Task.service';
import { TasksStore } from './Tasks.store';


container.register('ITasksRepository', {
  useClass: TasksApiRepository,
});

container.registerSingleton(TasksService);
container.registerSingleton(TasksStore);

export const tasksStore = container.resolve(TasksStore);
