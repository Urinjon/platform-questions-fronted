"use client";

import api from "@shared/api/axios";
import type { ApiResponse } from "@shared/api/types";
import type { UpdateUserDto, User } from "@entities/user";

export const fetchProfile = async (): Promise<ApiResponse<User>> => {
	const response = await api.get<ApiResponse<User>>("/v1/auth/me/");
	return response.data;
};

export const updateProfile = async (
	dto: UpdateUserDto,
): Promise<ApiResponse<User>> => {
	const response = await api.patch<ApiResponse<User>>("/v1/auth/me/", dto);
	return response.data;
};
