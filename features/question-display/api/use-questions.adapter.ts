"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";

import type { ApiResponse, ApiPagination } from "@shared/api/types";
import type { QuestionDto, Question } from "@entities/question";
import { mapQuestionDto, mapQuestionDtoList } from "@entities/question";

import {
	fetchQuestions,
	fetchQuestionById,
	type FetchQuestionsParams,
} from "./questions.api";

export const QUESTIONS_QUERY_KEY = "questions" as const;

export interface QuestionsQueryData {
	questions: Question[];
	pagination: ApiPagination | null;
}

function selectQuestionsData(
	response: ApiResponse<QuestionDto>,
): QuestionsQueryData {
	const dtos = Array.isArray(response.data)
		? response.data
		: response.data
			? [response.data]
			: [];

	return {
		questions: mapQuestionDtoList(dtos),
		pagination: response.meta?.pagination ?? null,
	};
}

export function useQuestionsQuery(params: FetchQuestionsParams = {}) {
	return useQuery({
		queryKey: [QUESTIONS_QUERY_KEY, params] as const,
		queryFn: () => fetchQuestions(params),
		select: selectQuestionsData,
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60 * 2,
	});
}

export function useQuestionByIdQuery(id: number) {
	return useQuery({
		queryKey: [QUESTIONS_QUERY_KEY, id] as const,
		queryFn: () => fetchQuestionById(id),
		select: (response) => {
			const dto = Array.isArray(response.data)
				? response.data[0]
				: response.data;
			return dto ? mapQuestionDto(dto) : null;
		},
		enabled: id > 0,
	});
}
