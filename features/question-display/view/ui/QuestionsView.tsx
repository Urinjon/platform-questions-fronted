"use client";

import { useMediaQuery } from "@shared/hooks/use-media-query.hook";

import { useQuestionsView } from "../model/use-questions-view";
import { QuestionsViewHeader } from "./QuestionsViewHeader";
import { QuestionsViewPagination } from "./QuestionsViewPagination";
import { QuestionsViewResults } from "./QuestionsViewResults";
import { QuestionsViewState } from "./QuestionsViewState";

export function QuestionsView() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const {
		search,
		statusFilter,
		sortBy,
		filteredQuestions,
		page,
		totalPages,
		hasFilters,
		isLoading,
		isError,
		setSearch,
		setStatusFilter,
		setSortBy,
		setPage,
		resetFilters,
	} = useQuestionsView();

	const handleClick = (id: number) => {
		console.log("Clicked!", id);
	};

	return (
		<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
			<QuestionsViewHeader
				search={search}
				statusFilter={statusFilter}
				sortBy={sortBy}
				hasFilters={hasFilters}
				onSearchChange={setSearch}
				onStatusFilterChange={setStatusFilter}
				onSortByChange={setSortBy}
				onClearSearch={() => setSearch("")}
				onResetFilters={resetFilters}
				onResetStatusFilter={() => setStatusFilter("all")}
			/>

			<div className="pt-6 pb-16">
				<QuestionsViewState
					isLoading={isLoading}
					isError={isError}
					isEmpty={filteredQuestions.length === 0}
					onResetFilters={resetFilters}
				>
					<QuestionsViewResults
						isDesktop={isDesktop}
						questions={filteredQuestions}
						onQuestionClick={handleClick}
					/>

					{/* Пагинация должна оставаться доступной даже при client-side фильтрах */}
					{!isLoading && !isError && (
						<QuestionsViewPagination
							page={page}
							totalPages={totalPages}
							onPageChange={setPage}
						/>
					)}
				</QuestionsViewState>
			</div>
		</div>
	);
}
