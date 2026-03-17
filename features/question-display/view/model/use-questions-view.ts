"use client";

import { useEffect, useMemo, useState } from "react";

import type { Question } from "@entities/question";
import { useQuestionsQuery } from "@features/question-display/api";

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
	isError: boolean;
	setSearch: (value: string) => void;
	setStatusFilter: (value: QuestionsStatusFilter) => void;
	setSortBy: (value: QuestionsSortBy) => void;
	setPage: (page: number) => void;
	resetFilters: () => void;
}

export function useQuestionsView(): UseQuestionsViewResult {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] =
		useState<QuestionsStatusFilter>("all");
	const [sortBy, setSortBy] = useState<QuestionsSortBy>("newest");
	const [page, setPage] = useState(1);
	const pageSize = 10;

	const { data, isLoading, isError } = useQuestionsQuery({
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

	useEffect(() => {
		setPage(1);
	}, [search, statusFilter, sortBy]);

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
		filteredQuestions: filteredAndSorted,
		page,
		pageSize,
		total: serverTotal,
		totalPages: serverTotalPages,
		hasFilters,
		isLoading,
		isError,
		setSearch,
		setStatusFilter,
		setSortBy,
		setPage,
		resetFilters,
	};
}
