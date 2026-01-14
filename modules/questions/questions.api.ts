import { QuestionEntity } from "./questions.entity";
import type { IQuestionsRepository } from "./questions.repository";

export class QuestionsApiRepository implements IQuestionsRepository {
	async findAll(): Promise<QuestionEntity[]> {
		return [
			new QuestionEntity("1", "Task 1", "2026-01-10"),
			new QuestionEntity("2", "Task 2", "2026-01-12"),
		];
	}
}
