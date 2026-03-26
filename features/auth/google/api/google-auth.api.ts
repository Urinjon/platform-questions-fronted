import api from "@shared/api/axios";
import type { ApiResponse } from "@shared/api/types";
import type {
	GoogleAuthUrlResponseDto,
	GoogleCallbackDto,
	GoogleCallbackResponseDto,
} from "../model/types";

export async function getGoogleAuthUrl(): Promise<
	ApiResponse<GoogleAuthUrlResponseDto>
> {
	const response = await api.get<ApiResponse<GoogleAuthUrlResponseDto>>(
		"v1/auth/google/url/",
	);
	return response.data;
}

export async function googleCallback(
	dto: GoogleCallbackDto,
): Promise<ApiResponse<GoogleCallbackResponseDto>> {
	const response = await api.post<ApiResponse<GoogleCallbackResponseDto>>(
		"v1/auth/google/callback/",
		dto,
		{ withCredentials: true },
	);
	return response.data;
}
