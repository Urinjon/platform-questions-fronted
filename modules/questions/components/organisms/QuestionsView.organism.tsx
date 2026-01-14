// QuestionsView.tsx
"use client";

import { useMediaQuery } from "@shared/hooks/use-media-query.hook";
import { QuestionsDataTable } from "../molecules/QuestionsDataTable.molecule";
import {
	type Question,
	QuestionsList,
} from "../molecules/QuestionsList.molecule";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui-kit/ui/tabs";

export function QuestionsView() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const questions: Question[] = [
		{
			id: "1",
			title: "Question 1",
			hint: "Hint 1",
			timeAgo: "1 hour ago",
			answersCount: 0,
			isNew: true,
		},
		{
			id: "2",
			title: "Question 2",
			hint: "Hint 2",
			timeAgo: "2 hours ago",
			answersCount: 1,
			isNew: false,
		},
		{
			id: "3",
			title: "Question 3",
			hint: "Hint 3",
			timeAgo: "3 hours ago",
			answersCount: 2,
			isNew: false,
		},
	];

	const handleClik = (questionId: string) => {
		console.log(`Clicked on question ${questionId}`);
	};

	return (
		<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
			{/* Шапка остаётся той же */}
			<div className="sticky top-0 z-10 -mx-4 bg-background/80 backdrop-blur-lg px-4 py-3 sm:px-6 lg:px-8 border-b">
				{/* ... твоя шапка с поиском и сортировкой ... */}
			</div>

			{isDesktop ? (
				<Tabs defaultValue="view-table">
					<TabsList>
						<TabsTrigger value="view-table">Табличный</TabsTrigger>
						<TabsTrigger value="view-list">Список</TabsTrigger>
					</TabsList>
					<TabsContent value="view-table">
						<QuestionsDataTable questions={questions} />
					</TabsContent>
					<TabsContent value="view-list">
						<QuestionsList questions={questions} onQuestionClick={handleClik} />
					</TabsContent>
				</Tabs>
			) : (
				<QuestionsList questions={questions} onQuestionClick={handleClik} />
			)}
		</div>
	);
}
