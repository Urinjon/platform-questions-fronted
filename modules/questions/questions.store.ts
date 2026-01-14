import { makeAutoObservable, runInAction } from "mobx";
import type { QuestionEntity } from "./questions.entity";
import type { QuestionsService } from "./questions.service";

export class QuestionsStore {
	questions: QuestionEntity[] = [];
	isLoading = false;
	error: string | null = null;

	constructor(private readonly questionservice: QuestionsService) {
		makeAutoObservable(this);
	}

	async load() {
		this.isLoading = true;
		this.error = null;

		try {
			const questions = await this.questionservice.execute();
			runInAction(() => {
				this.questions = questions;
			});
		} catch {
			runInAction(() => {
				this.error = "Failed to load questions";
			});
		} finally {
			runInAction(() => {
				this.isLoading = false;
			});
		}
	}
}
