export { fetchQuestions, fetchQuestionById } from "./questions.api";
export type { FetchQuestionsParams } from "./questions.api";

export {
	useQuestionsQuery,
	useQuestionByIdQuery,
	QUESTIONS_QUERY_KEY,
} from "./use-questions.adapter";
export type { QuestionsQueryData } from "./use-questions.adapter";
