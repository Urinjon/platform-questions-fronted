import type { IQuestionsRepository } from "./questions.repository";

export class QuestionsService {
	constructor(private readonly _repo: IQuestionsRepository) {}

	execute() {
		return this._repo.findAll();
	}
}
