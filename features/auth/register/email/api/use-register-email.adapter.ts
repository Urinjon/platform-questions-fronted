import { useMutation } from "@tanstack/react-query";
import type {
	RegisterEmailDto,
	RegisterEmailResponseDto,
} from "../model/types";
import { registerEmail } from "./register-email.api";
import { toast } from "sonner";
import { getFirstData, getFirstError } from "@shared/api/response.utils";
import {
	getErrorDetailFromAxiosError,
	getFirstErrorDetail,
} from "@shared/api/error.utils";
import { useAuthStore } from "@features/auth/auth.store";
import { useRouter } from "next/navigation";
import type { ApiResponse } from "@shared/api/types";
import type { AxiosError } from "axios";

export function useRegisterEmailAdapter() {
	const router = useRouter();

	const { setUser, setAccessToken } = useAuthStore();

	const { mutateAsync, isPending, error, isError } = useMutation<
		ApiResponse<RegisterEmailResponseDto>,
		AxiosError<ApiResponse<never>>,
		RegisterEmailDto
	>({
		mutationFn: async (dto: RegisterEmailDto) => await registerEmail(dto),
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

	return { mutateAsync, isPending, isError, error };
}
