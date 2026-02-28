"use client";

import type { LoginEmailDto, LoginEmailResponseDto } from "../model/types";
import type { ApiResponse } from "@shared/api/types";
import api from "@shared/api/axios";

export const loginEmail = async (dto: LoginEmailDto) => {
	const response = await api.post<ApiResponse<LoginEmailResponseDto>>(
		"v1/auth/login/email/",
		dto,
	);

	return response.data;
};
