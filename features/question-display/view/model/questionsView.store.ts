"use client";

import { create } from "zustand";

import type { QuestionsSortBy, QuestionsStatusFilter } from "./use-questions-view";

type FiltersState = {
	search: string;
	statusFilter: QuestionsStatusFilter;
	sortBy: QuestionsSortBy;
};

type PaginationState = {
	page: number;
	pageSize: number;
};

type State = {
	filters: FiltersState;
	pagination: PaginationState;
};

type Actions = {
	setSearch: (value: string) => void;
	setStatusFilter: (value: QuestionsStatusFilter) => void;
	setSortBy: (value: QuestionsSortBy) => void;
	setPage: (page: number) => void;
	resetFilters: () => void;
};

const DEFAULT_FILTERS: FiltersState = {
	search: "",
	statusFilter: "all",
	sortBy: "newest",
};

const DEFAULT_PAGINATION: PaginationState = {
	page: 1,
	pageSize: 2,
};

export const useQuestionsViewStore = create<State & Actions>((set) => ({
	filters: DEFAULT_FILTERS,
	pagination: DEFAULT_PAGINATION,

	setSearch: (value) =>
		set((state) => ({
			filters: { ...state.filters, search: value },
			pagination: { ...state.pagination, page: 1 },
		})),

	setStatusFilter: (value) =>
		set((state) => ({
			filters: { ...state.filters, statusFilter: value },
			pagination: { ...state.pagination, page: 1 },
		})),

	setSortBy: (value) =>
		set((state) => ({
			filters: { ...state.filters, sortBy: value },
			pagination: { ...state.pagination, page: 1 },
		})),

	setPage: (page) =>
		set((state) => ({
			pagination: { ...state.pagination, page },
		})),

	resetFilters: () =>
		set((state) => ({
			filters: DEFAULT_FILTERS,
			pagination: { ...state.pagination, page: 1 },
		})),
}));

