import { useMemo, useState } from "react";

import { allQuestions } from "../model/data";

import type { Question } from "@entities/question";

export type QuestionsStatusFilter = "all" | "new" | "answered" | "unanswered";

export type QuestionsSortBy = "newest" | "oldest" | "answers";

export interface UseQuestionsViewResult {
	search: string;
	statusFilter: QuestionsStatusFilter;
	sortBy: QuestionsSortBy;
	filteredQuestions: Question[];
	hasFilters: boolean;
	setSearch: (value: string) => void;
	setStatusFilter: (value: QuestionsStatusFilter) => void;
	setSortBy: (value: QuestionsSortBy) => void;
	resetFilters: () => void;
}

export function useQuestionsView(): UseQuestionsViewResult {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] =
		useState<QuestionsStatusFilter>("all");
	const [sortBy, setSortBy] = useState<QuestionsSortBy>("newest");

	const filteredQuestions = useMemo(
		() =>
			allQuestions
				.filter((q) => {
					const matchesSearch = q.title
						.toLowerCase()
						.includes(search.toLowerCase());

					const matchesStatus =
						statusFilter === "all" ||
						(statusFilter === "new" && q.isNew) ||
						(statusFilter === "answered" &&
							(q.answersCount.success ?? 0) > 0) ||
						(statusFilter === "unanswered" &&
							(q.answersCount.success ?? 0) === 0);

					return matchesSearch && matchesStatus;
				})
				.sort((a, b) => {
					if (sortBy === "answers") {
						return (
							(b.answersCount.success ?? 0) - (a.answersCount.success ?? 0)
						);
					}

					// TODO: добавить сортировку по датам, когда они будут доступны
					return 0;
				}),
		[search, sortBy, statusFilter],
	);

	const hasFilters = Boolean(search) || statusFilter !== "all";

	const resetFilters = () => {
		setSearch("");
		setStatusFilter("all");
		setSortBy("newest");
	};

	return {
		search,
		statusFilter,
		sortBy,
		filteredQuestions,
		hasFilters,
		setSearch,
		setStatusFilter,
		setSortBy,
		resetFilters,
	};
}
