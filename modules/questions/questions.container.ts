"use client";

import { QuestionsApiRepository } from "./questions.api";
import { QuestionsService } from "./questions.service";
import { QuestionsStore } from "./questions.store";

export function createquestionsStore() {
	const repo = new QuestionsApiRepository();
	const service = new QuestionsService(repo);
	const store = new QuestionsStore(service);

	return store;
}
