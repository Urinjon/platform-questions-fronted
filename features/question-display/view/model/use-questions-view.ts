import { useEffect, useMemo, useState } from "react";

import { allQuestions } from "../model/data";

import type { Question } from "@entities/question";

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

	const filteredAndSorted = useMemo(
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

	const total = filteredAndSorted.length;
	const totalPages = total > 0 ? Math.ceil(total / pageSize) : 1;

	// При смене фильтров/поиска/сортировки сбрасываем страницу на первую
	useEffect(() => {
		setPage(1);
	}, []);

	// Гарантируем, что текущая страница не выходит за пределы
	useEffect(() => {
		if (page > totalPages) {
			setPage(totalPages);
		}
	}, [page, totalPages]);

	const paginatedQuestions = useMemo(() => {
		if (total === 0) return [];
		const start = (page - 1) * pageSize;
		const end = start + pageSize;
		return filteredAndSorted.slice(start, end);
	}, [filteredAndSorted, page, total]);

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
		filteredQuestions: paginatedQuestions,
		page,
		pageSize,
		total,
		totalPages,
		hasFilters,
		setSearch,
		setStatusFilter,
		setSortBy,
		setPage,
		resetFilters,
	};
}
