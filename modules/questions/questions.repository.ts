import type { QuestionEntity } from "./questions.entity";

export interface IQuestionsRepository {
	findAll(): Promise<QuestionEntity[]>;
}
