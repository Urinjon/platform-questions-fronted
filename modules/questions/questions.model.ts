export interface Question {
	id: string;
	title: string; // основной текст вопроса
	hint?: string; // подсказка / пояснение
	answersCount: number;
	timeAgo: string;
	options?: Array<{
		id: string;
		text: string;
		isCorrect?: boolean; // можно скрывать на фронте
	}>;
	timeLimitSeconds?: number;
	points?: number;
	isNew: boolean;
	type: "text" | "options";
}
