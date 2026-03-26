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
		isFetching,
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

<<<<<<< HEAD
=======
			<div className="sticky top-0 z-20 -mx-4 bg-background/85 backdrop-blur-lg px-4 py-3 sm:px-6 lg:px-8 border-b shadow-sm">
				<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
					<h1 className="text-2xl font-bold tracking-tight flex items-center gap-3">
						Ваши вопросы
						<ContainerTextFlip
							words={["Aiautomation.", "PQ", "Splashel", "For", "You"]}
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
>>>>>>> feature/auth
			<div className="pt-6 pb-16">
				<QuestionsViewState
					isLoading={isLoading}
					isFetching={isFetching}
					isError={isError}
					isEmpty={filteredQuestions.length === 0}
					onResetFilters={resetFilters}
				>
					<QuestionsViewResults
						isDesktop={isDesktop}
						questions={filteredQuestions}
						onQuestionClick={handleClick}
					/>

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
