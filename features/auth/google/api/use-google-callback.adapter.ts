"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import type { AxiosError } from "axios";

import type { ApiResponse } from "@shared/api/types";
import {
	getErrorDetailFromAxiosError,
	getFirstErrorDetail,
} from "@shared/api/error.utils";
import { getFirstData, getFirstError } from "@shared/api/response.utils";
import { useAuthStore } from "@features/auth/auth.store";
import { toast } from "sonner";

import { googleCallback } from "./google-auth.api";
import type {
	GoogleCallbackDto,
	GoogleCallbackResponseDto,
} from "../model/types";

export function useGoogleCallbackAdapter() {
	const router = useRouter();
	const { setUser, setAccessToken } = useAuthStore();

	const { mutateAsync, isPending, isError } = useMutation<
		ApiResponse<GoogleCallbackResponseDto>,
		AxiosError<ApiResponse<never>>,
		GoogleCallbackDto
	>({
		mutationFn: googleCallback,
		onSuccess: (response) => {
			const firstError = getFirstError(response);
			if (firstError) {
				toast.error(getFirstErrorDetail([firstError]) ?? "Произошла ошибка", {
					position: "top-center",
				});
				router.replace("/auth/login");
				return;
			}

			const payload = getFirstData(response);

			if (!payload) {
				toast.error("Ошибка авторизации через Google", {
					position: "top-center",
				});
				router.replace("/auth/login");
				return;
			}

			setUser(payload.user);
			setAccessToken(payload.access_token);

			const greeting = payload.is_new_user
				? `Добро пожаловать, ${payload.user.username}!`
				: `С возвращением, ${payload.user.username}!`;

			toast.success(greeting, { position: "top-center" });
			router.replace("/questions");
		},
		onError: (error) => {
			toast.error(
				getErrorDetailFromAxiosError(error) ??
					"Ошибка авторизации через Google",
				{ position: "top-center" },
			);
			router.replace("/auth/login");
		},
	});

	return {
		exchangeCode: mutateAsync,
		isLoading: isPending,
		isError,
	};
}
