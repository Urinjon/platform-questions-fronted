import api from "@shared/api/axios";
import type { ApiResponse } from "@shared/api/types";
import type { QuestionDto } from "@entities/question";

export interface FetchQuestionsParams {
	page?: number;
	limit?: number;
}

export async function fetchQuestions(
	params: FetchQuestionsParams = {},
): Promise<ApiResponse<QuestionDto>> {
	const response = await api.get<ApiResponse<QuestionDto>>("/v1/questions/", {
		params,
	});
	return response.data;
}

export async function fetchQuestionById(
	id: number,
): Promise<ApiResponse<QuestionDto>> {
	const response = await api.get<ApiResponse<QuestionDto>>(
		`/v1/questions/${id}/`,
	);
	return response.data;
}
