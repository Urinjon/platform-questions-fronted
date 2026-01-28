interface QuestionOption {
	id: string;
	text: string;
	isCorrect?: boolean;
}

export interface Question {
	id: string;
	title: string;
	hint?: string;
	answersCount: number;
	timeAgo: string;
	options?: QuestionOption[];
	timeLimitSeconds?: number;
	points?: number;
	isNew: boolean;
	type: "text" | "options";
}
