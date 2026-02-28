import type { ApiError, ApiResponse } from "./types";

export const getFirstError = <TData>(
	response: ApiResponse<TData>,
): ApiError | null => {
	const errors = response.errors;
	if (!errors || errors.length === 0) return null;
	return errors[0] ?? null;
};

export const getFirstData = <TData>(
	response: ApiResponse<TData>,
): TData | null => {
	const { data } = response;
	if (Array.isArray(data)) {
		return data[0] ?? null;
	}
	return data ?? null;
};
