import { makeAutoObservable, runInAction } from 'mobx';
import { TaskEntity } from './Task.entity';
import { TasksService } from './Task.service';
import { injectable } from 'tsyringe';

@injectable()
export class TasksStore {
  tasks: TaskEntity[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private readonly taskService: TasksService) {
    makeAutoObservable(this);
  }

  async load() {
    this.isLoading = true;
    this.error = null;

    try {
      const tasks = await this.taskService.execute();
      runInAction(() => {
        this.tasks = tasks;
      });
    } catch {
      runInAction(() => {
        this.error = 'Failed to load tasks';
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}
