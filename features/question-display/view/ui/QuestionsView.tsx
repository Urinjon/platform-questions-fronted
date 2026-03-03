// QuestionsView.tsx
"use client";

import { useMediaQuery } from "@shared/hooks/use-media-query.hook";

import { Button } from "@ui-kit/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui-kit/ui/tabs";
import { ContainerTextFlip } from "@ui-kit/effects";
import { AnimatePresence } from "motion/react";

import { QuestionsTable } from "@features/question-display/table";
import { QuestionsList } from "@features/question-display/list";
import { QuestionsPagination } from "@features/question-display/pagination";

import { useQuestionsView } from "../model/use-questions-view";
import { QuestionsViewFilters } from "./QuestionsViewFilters";
import { QuestionsViewFilterChips } from "./QuestionsViewFilterChips";

export function QuestionsView() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const {
		search,
		statusFilter,
		sortBy,
		filteredQuestions,
		hasFilters,
		setSearch,
		setStatusFilter,
		setSortBy,
		resetFilters,
	} = useQuestionsView();

	const handleClick = () => {
		console.log("Clicked!");
	};

	return (
		<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
			{/* Sticky шапка с фильтрами */}

			<div className="sticky top-0 z-20 -mx-4 bg-background/85 backdrop-blur-lg px-4 py-3 sm:px-6 lg:px-8 border-b shadow-sm">
				<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
					<h1 className="text-2xl font-bold tracking-tight flex items-center gap-3">
						Ваши вопросы
						<ContainerTextFlip
							words={["Platform", "Questions", "Splashel", "For", "You"]}
							className="text-sm md:text-sm"
						/>
					</h1>
					<QuestionsViewFilters
						search={search}
						statusFilter={statusFilter}
						sortBy={sortBy}
						onSearchChange={setSearch}
						onStatusFilterChange={setStatusFilter}
						onSortByChange={setSortBy}
					/>
				</div>

				{/* Чипы применённых фильтров */}
				<AnimatePresence initial={false}>
					{hasFilters && (
						<QuestionsViewFilterChips
							key="questions-filter-chips"
							search={search}
							statusFilter={statusFilter}
							onClearSearch={() => setSearch("")}
							onResetFilters={resetFilters}
							onResetStatusFilter={() => setStatusFilter("all")}
						/>
					)}
				</AnimatePresence>
			</div>

			{/* Контент */}
			<div className="pt-6 pb-16">
				{isDesktop ? (
					<Tabs defaultValue="table">
						<TabsList className="mb-4">
							<TabsTrigger value="table">Таблица</TabsTrigger>
							<TabsTrigger value="list">Список</TabsTrigger>
						</TabsList>

						<TabsContent value="table">
							<QuestionsTable questions={filteredQuestions} />
						</TabsContent>

						<TabsContent value="list">
							<QuestionsList
								questions={filteredQuestions}
								onQuestionClick={handleClick}
							/>
						</TabsContent>
					</Tabs>
				) : (
					<QuestionsList
						questions={filteredQuestions}
						onQuestionClick={handleClick}
					/>
				)}

				{filteredQuestions.length === 0 && (
					<div className="mt-16 text-center text-muted-foreground">
						Ничего не найдено по выбранным фильтрам
						<br />
						<Button variant="link" onClick={resetFilters} className="mt-2">
							Сбросить фильтры
						</Button>
					</div>
				)}

				<div className="mt-5">
					<QuestionsPagination />
				</div>
			</div>
		</div>
	);
}
