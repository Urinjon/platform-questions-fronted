"use client";

import { useMemo } from "react";

import type { Question } from "@entities/question";
import { useQuestionsQuery } from "@features/question-display/api";
import { useQuestionsViewStore } from "./questionsView.store";

export type QuestionsStatusFilter = "all" | "new" | "answered" | "unanswered";

export type QuestionsSortBy = "newest" | "oldest" | "answers";

export interface UseQuestionsViewResult {
	search: string;
	statusFilter: QuestionsStatusFilter;
	sortBy: QuestionsSortBy;
	filteredQuestions: Question[];
	page: number;
	pageSize: number;
	total: number;
	totalPages: number;
	hasFilters: boolean;
	isLoading: boolean;
	isFetching: boolean;
	isError: boolean;
	setSearch: (value: string) => void;
	setStatusFilter: (value: QuestionsStatusFilter) => void;
	setSortBy: (value: QuestionsSortBy) => void;
	setPage: (page: number) => void;
	resetFilters: () => void;
}

export function useQuestionsView(): UseQuestionsViewResult {
	const search = useQuestionsViewStore((s) => s.filters.search);
	const statusFilter = useQuestionsViewStore((s) => s.filters.statusFilter);
	const sortBy = useQuestionsViewStore((s) => s.filters.sortBy);
	const page = useQuestionsViewStore((s) => s.pagination.page);
	const pageSize = useQuestionsViewStore((s) => s.pagination.pageSize);

	const setSearch = useQuestionsViewStore((s) => s.setSearch);
	const setStatusFilter = useQuestionsViewStore((s) => s.setStatusFilter);
	const setSortBy = useQuestionsViewStore((s) => s.setSortBy);
	const setPage = useQuestionsViewStore((s) => s.setPage);
	const resetFilters = useQuestionsViewStore((s) => s.resetFilters);

	const { data, isLoading, isFetching, isError } = useQuestionsQuery({
		page,
		limit: pageSize,
	});

	const questions = data?.questions ?? [];
	const pagination = data?.pagination ?? null;

	const serverTotal = pagination?.total ?? questions.length;
	const serverTotalPages = pagination?.totalPages ?? 1;

	const filteredAndSorted = useMemo(
		() =>
			questions
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

					if (sortBy === "oldest") {
						return (
							new Date(a.startDeadline).getTime() -
							new Date(b.startDeadline).getTime()
						);
					}

					if (sortBy === "newest") {
						return (
							new Date(b.startDeadline).getTime() -
							new Date(a.startDeadline).getTime()
						);
					}

					return 0;
				}),
		[questions, search, sortBy, statusFilter],
	);

	const hasFilters = Boolean(search) || statusFilter !== "all";

	return {
		search,
		statusFilter,
		sortBy,
		filteredQuestions: filteredAndSorted,
		page,
		pageSize,
		total: serverTotal,
		totalPages: serverTotalPages,
		hasFilters,
		isLoading,
		isFetching,
		isError,
		setSearch,
		setStatusFilter,
		setSortBy,
		setPage,
		resetFilters,
	};
}
