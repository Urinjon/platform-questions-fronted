import type { ApiResponse } from "@shared/api/types";
import type {
	RegisterEmailDto,
	RegisterEmailResponseDto,
} from "../model/types";
import api from "@shared/api/axios";

export async function registerEmail(
	dto: RegisterEmailDto,
): Promise<ApiResponse<RegisterEmailResponseDto>> {
	const response = await api.post<ApiResponse<RegisterEmailResponseDto>>(
		"v1/auth/register/email/",
		dto,
	);

	return response.data;
}
