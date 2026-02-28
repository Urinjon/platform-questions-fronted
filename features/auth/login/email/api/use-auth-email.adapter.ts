"use client";

import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import { loginEmail } from "./auth-email.api";
import type { LoginEmailDto, LoginEmailResponseDto } from "../model/types";
import { toast } from "sonner";
import { useAuthStore } from "@features/auth/auth.store";
import type { ApiResponse } from "@shared/api/types";
import {
	getErrorDetailFromAxiosError,
	getFirstErrorDetail,
} from "@shared/api/error.utils";
import type { AxiosError } from "axios";
import { getFirstData, getFirstError } from "@shared/api/response.utils";

export function useAuthEmailAdapter() {
	const router = useRouter();

	const { setUser, setAccessToken } = useAuthStore();

	const { mutateAsync, isPending, error, isError } = useMutation<
		ApiResponse<LoginEmailResponseDto>,
		AxiosError<ApiResponse<never>>,
		LoginEmailDto
	>({
		mutationFn: async (data: LoginEmailDto) => await loginEmail(data),
		onSuccess: (response) => {
			const firstError = getFirstError(response);
			if (firstError) {
				const messageFromErrors = getFirstErrorDetail([firstError]);
				toast.error(messageFromErrors ?? "Произошла ошибка", {
					position: "top-center",
				});
				return;
			}

			const payload = getFirstData(response);

			if (!payload) {
				toast.error("Ошибка. Попробуйте еще раз.", { position: "top-center" });
				return;
			}

			toast.success(`Добро пожаловать ${payload.user.username}!`, {
				position: "top-center",
			});

			setUser(payload.user);
			setAccessToken(payload.access_token);

			router.push("/");
		},
		onError: (error) => {
			const detail = getErrorDetailFromAxiosError(error);

			toast.error(detail ?? "Произошла ошибка", {
				position: "top-center",
			});
		},
	});

	return {
		loginViaEmail: mutateAsync,
		isLoading: isPending,
		isError,
		error,
	};
}
