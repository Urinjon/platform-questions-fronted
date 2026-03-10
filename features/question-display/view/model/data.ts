import type { Question } from "@entities/question";

export const allQuestions: Question[] = [
	{
		id: 1,
		title: "Question 1 type text",
		isNew: true,
		answersCount: {
			success: 10,
			failed: 10,
		},
		category: {
			id: 1,
			title: "python",
		},
		startDeadline: new Date().toISOString(),
		endDeadline: new Date().toISOString(),
		type: "text",
	},
	{
		id: 2,
		title: "Question 2 type options",
		isNew: false,
		startDeadline: new Date().toISOString(),
		endDeadline: new Date().toISOString(),
		category: {
			id: 1,
			title: "python",
		},
		answersCount: {
			success: 50,
			failed: 10,
		},
		options: [
			{
				id: 3,
				text: "Option 3",
				isCorrect: true,
			},
			{
				id: 4,
				text: "Option 4",
				isCorrect: false,
			},
		],
		type: "options",
	},
	{
		id: 3,
		title: "Question 3 type options",
		isNew: false,
		category: {
			id: 2,
			title: "nodeJs",
		},
		startDeadline: new Date().toISOString(),
		endDeadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString(),
		answersCount: {
			success: 10,
			failed: 10,
		},
		type: "options",
		options: [
			{
				id: 5,
				text: "Option 5",
				isCorrect: true,
			},
			{
				id: 6,
				text: "Option 6",
				isCorrect: false,
			},
		],
	},
];
