"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui-kit/ui/tabs";

import type { Question } from "@entities/question";
import { QuestionsList } from "@features/question-display/list";
import { QuestionsTable } from "@features/question-display/table";

type Props = {
	isDesktop: boolean;
	questions: Question[];
	onQuestionClick: (id: number) => void;
};

export function QuestionsViewResults({
	isDesktop,
	questions,
	onQuestionClick,
}: Props) {
	if (!isDesktop) {
		return <QuestionsList questions={questions} onQuestionClick={onQuestionClick} />;
	}

	return (
		<Tabs defaultValue="table">
			<TabsList className="mb-4">
				<TabsTrigger value="table">Таблица</TabsTrigger>
				<TabsTrigger value="list">Список</TabsTrigger>
			</TabsList>

			<TabsContent value="table">
				<QuestionsTable questions={questions} />
			</TabsContent>

			<TabsContent value="list">
				<QuestionsList questions={questions} onQuestionClick={onQuestionClick} />
			</TabsContent>
		</Tabs>
	);
}

