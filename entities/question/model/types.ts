interface QuestionOption {
	id: string;
	text: string;
	isCorrect?: boolean;
}

interface QuestionCategory {
	id: number;
	title: string;
}

interface AnswersCount {
	success: number;
	failed: number;
}

type QuestionType = "text" | "options";

export interface Question {
	id: string;
	title: string;
	answersCount: AnswersCount;
	options?: QuestionOption[];
	points?: number;
	isNew: boolean;
	category: QuestionCategory;
	type: QuestionType;
	startDeadline: Date;
	endDeadline: Date;
}
