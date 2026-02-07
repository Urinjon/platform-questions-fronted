"use client";

import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import { LoginEmailApi } from "./auth-email.api";
import type { LoginEmailDto } from "../model/types";
import { toast } from "sonner";
import { useAuthStore } from "@features/auth/auth.store";

const loginEmailApi = new LoginEmailApi();

export function useAuthEmailAdapter() {
	const router = useRouter();

	const { setUser, setAccessToken } = useAuthStore();

	const { mutateAsync, isPending, error, isError } = useMutation({
		mutationFn: async (data: LoginEmailDto) =>
			await loginEmailApi.execute(data),
		onSuccess: async ({ data, error }) => {
			if (error || !data) {
				toast.error(error, { position: "top-center" });
				return;
			}

			toast.success(`Добро пожаловать ${data?.user.username}!`, {
				position: "top-center",
			});

			setUser(data.user);
			setAccessToken(data.access_token);

			router.push("/");
		},
		onError: (error) => {
			toast.error(error.message, {
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
