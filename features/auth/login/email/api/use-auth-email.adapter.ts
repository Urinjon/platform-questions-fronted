"use client";

import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import { factoryClientRestApi } from "@shared/api";
import { LoginEmailApi } from "./auth-email.api";
import type { LoginEmailDto } from "../model/types";
import { toast } from "sonner";
import { useAuthStore } from "@features/auth/auth.store";

const client = await factoryClientRestApi();
const loginEmailApi = new LoginEmailApi(client);

export function useAuthEmailAdapter() {
	const router = useRouter();

	const { setUser } = useAuthStore();

	const { mutateAsync, isPending, error, isError } = useMutation({
		mutationFn: async (data: LoginEmailDto) =>
			await loginEmailApi.execute(data),
		onSuccess: ({ data, error }) => {
			if (error || !data) {
				toast.error(error, { position: "top-center" });
				return;
			}

			toast.success(`Добро пожаловать ${data?.user.username}!`, {
				position: "top-center",
			});

			setUser(data.user);

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
