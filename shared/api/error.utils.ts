import type { AxiosError } from "axios";
import type { ApiError, ApiResponse } from "./types";

export const getFirstErrorDetail = (
	errors?: ApiError[] | null,
): string | null => {
	if (!errors || errors.length === 0) return null;

	const [first] = errors;
	if (!first) return null;

	if (first.detail) return first.detail;
	if (first.title) return first.title;

	return null;
};

export const getErrorDetailFromAxiosError = <TData>(
	error: AxiosError<ApiResponse<TData>>,
): string | null => {
	const apiErrors = error.response?.data?.errors ?? null;
	const detail = getFirstErrorDetail(apiErrors);

	if (detail) return detail;

	// fallback — текст ошибки из Axios
	return error.message || null;
};

