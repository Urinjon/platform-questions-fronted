"use client";

import { ContainerTextFlip } from "@ui-kit/effects";
import { AnimatePresence } from "motion/react";

import type {
	QuestionsSortBy,
	QuestionsStatusFilter,
} from "../model/use-questions-view";
import { QuestionsViewFilters } from "@features/question-display/filters/ui/QuestionsViewFilters";
import { QuestionsViewFilterChips } from "@features/question-display/filters";

type Props = {
	search: string;
	statusFilter: QuestionsStatusFilter;
	sortBy: QuestionsSortBy;
	hasFilters: boolean;
	onSearchChange: (value: string) => void;
	onStatusFilterChange: (value: QuestionsStatusFilter) => void;
	onSortByChange: (value: QuestionsSortBy) => void;
	onClearSearch: () => void;
	onResetFilters: () => void;
	onResetStatusFilter: () => void;
};

export function QuestionsViewHeader({
	search,
	statusFilter,
	sortBy,
	hasFilters,
	onSearchChange,
	onStatusFilterChange,
	onSortByChange,
	onClearSearch,
	onResetFilters,
	onResetStatusFilter,
}: Props) {
	return (
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
					onSearchChange={onSearchChange}
					onStatusFilterChange={onStatusFilterChange}
					onSortByChange={onSortByChange}
				/>
			</div>

			<AnimatePresence initial={false}>
				{hasFilters && (
					<QuestionsViewFilterChips
						key="questions-filter-chips"
						search={search}
						statusFilter={statusFilter}
						onClearSearch={onClearSearch}
						onResetFilters={onResetFilters}
						onResetStatusFilter={onResetStatusFilter}
					/>
				)}
			</AnimatePresence>
		</div>
	);
}
