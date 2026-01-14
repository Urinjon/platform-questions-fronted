"use client";

import { type Question, QuestionsList } from "./QuestionsList.molecule";

import { Input } from "@ui-kit/ui/input";
import { Select, SelectTrigger, SelectValue } from "@ui-kit/ui/select";

export const QuestionsTable = (questions: Question[]) => {
	return (
		<div className="mx-auto w-full space-y-10 max-w-4xl px-4 sm:px-6 lg:px-8">
			{/* Фиксированная/липкая шапка */}
			<div className="sticky top-0 z-10 -mx-4 bg-background/80 backdrop-blur-lg px-4 py-3 sm:px-6 lg:px-8 border-b">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<h1 className="text-2xl font-bold tracking-tight">Вопросы</h1>

					<div className="flex flex-wrap gap-2">
						{/* Фильтры, поиск, сортировка */}
						<Input placeholder="Поиск..." className="w-64" />
						<Select defaultValue="newest">
							<SelectTrigger className="w-36">
								<SelectValue />
							</SelectTrigger>
							{/* варианты сортировки */}
						</Select>
					</div>
				</div>
			</div>

			{/* Основной контент с отступом сверху */}
			<div className="pt-6 pb-16">
				<QuestionsList questions={questions} />{" "}
				{/* ← твой первый красивый вариант */}
			</div>
		</div>
	);
};
