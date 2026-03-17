export interface QuestionOptionDto {
	id: number;
	text: string;
	isCorrect: boolean;
}

export interface QuestionCategoryDto {
	id: number;
	title: string;
}

export interface AnswersCountDto {
	success: number;
	failed: number;
}

export interface QuestionPayloadDto {
	options?: QuestionOptionDto[];
}

export interface QuestionDto {
	id: number;
	title: string;
	type: "text" | "options";
	answersCount: AnswersCountDto;
	category: QuestionCategoryDto;
	isNew: boolean;
	startDeadline: string;
	endDeadline: string;
	payload: QuestionPayloadDto;
}
