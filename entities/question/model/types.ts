export interface QuestionOption {
	id: number;
	text: string;
	isCorrect: boolean;
}

export interface QuestionCategory {
	id: number;
	title: string;
}

export interface AnswersCount {
	success: number;
	failed: number;
}

interface QuestionBase {
	id: number;
	title: string;
	answersCount: AnswersCount;
	isNew: boolean;
	startDeadline: string;
	endDeadline: string;
	category: QuestionCategory;
}

export interface TextQuestion extends QuestionBase {
	type: "text";
}

export interface OptionsQuestion extends QuestionBase {
	type: "options";
	options: QuestionOption[];
}

export type Question = TextQuestion | OptionsQuestion;
