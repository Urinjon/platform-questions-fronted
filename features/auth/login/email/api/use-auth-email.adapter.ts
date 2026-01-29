"use client";

import { useMutation } from "@tanstack/react-query";

import { factoryClientRestApi } from "@shared/api";
import { LoginEmailApi } from "./auth-email.api";
import type { LoginEmailDto } from "../model/types";

const client = factoryClientRestApi();
const loginEmailApi = new LoginEmailApi(client);

export function useAuthEmailAdapter() {
	const { mutateAsync, isPending, error, isError } = useMutation({
		mutationFn: (data: LoginEmailDto) => loginEmailApi.execute(data),
		onSuccess: (data) => {
			console.log("Login successful:", data);
		},
		onError: (error) => {
			console.error("Login failed:", error);
		},
	});

	return {
		loginViaEmail: mutateAsync,
		isLoading: isPending,
		isError,
		error,
	};
}
