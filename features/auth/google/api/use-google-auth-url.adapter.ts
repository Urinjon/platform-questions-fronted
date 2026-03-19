"use client";

import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import type { ApiResponse } from "@shared/api/types";
import {
	getErrorDetailFromAxiosError,
	getFirstErrorDetail,
} from "@shared/api/error.utils";
import { getFirstData, getFirstError } from "@shared/api/response.utils";
import { toast } from "sonner";

import { getGoogleAuthUrl } from "./google-auth.api";
import type { GoogleAuthUrlResponseDto } from "../model/types";

export function useGoogleAuthUrlAdapter() {
	const { mutateAsync, isPending } = useMutation<
		ApiResponse<GoogleAuthUrlResponseDto>,
		AxiosError<ApiResponse<never>>
	>({
		mutationFn: getGoogleAuthUrl,
		onSuccess: (response) => {
			const firstError = getFirstError(response);
			if (firstError) {
				toast.error(getFirstErrorDetail([firstError]) ?? "Произошла ошибка", {
					position: "top-center",
				});
				return;
			}

			const payload = getFirstData(response);

			if (!payload?.authorization_url) {
				toast.error("Не удалось получить ссылку для входа через Google", {
					position: "top-center",
				});
				return;
			}

			window.location.href = payload.authorization_url;
		},
		onError: (error) => {
			toast.error(getErrorDetailFromAxiosError(error) ?? "Произошла ошибка", {
				position: "top-center",
			});
		},
	});

	return {
		redirectToGoogle: mutateAsync,
		isLoading: isPending,
	};
}
