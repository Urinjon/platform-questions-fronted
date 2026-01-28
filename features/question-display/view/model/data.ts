import type { Question } from "@entities/question";

export const allQuestions: Question[] = [
	{
		id: "1",
		title: "Question 1 type text",
		hint: "Hint 1",
		isNew: true,
		answersCount: 20,
		timeLimitSeconds: 60,
		points: 10,
		timeAgo: "1 hour ago",
		type: "text",
	},
	{
		id: "2",
		title: "Question 2 type options",
		hint: "Hint 2",
		isNew: false,
		answersCount: 10,
		options: [
			{
				id: "3",
				text: "Option 3",
				isCorrect: true,
			},
			{
				id: "4",
				text: "Option 4",
				isCorrect: false,
			},
		],
		timeLimitSeconds: 60,
		points: 10,
		timeAgo: "3 hours ago",
		type: "options",
	},
	{
		id: "3",
		title: "Question 3 type options",
		isNew: false,
		hint: "Hint 3",
		answersCount: 5,
		type: "options",
		options: [
			{
				id: "5",
				text: "Option 5",
				isCorrect: true,
			},
			{
				id: "6",
				text: "Option 6",
				isCorrect: false,
			},
		],
		timeLimitSeconds: 60,
		points: 10,
		timeAgo: "2 hours ago",
	},
];
