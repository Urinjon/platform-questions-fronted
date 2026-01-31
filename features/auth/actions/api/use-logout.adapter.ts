"use client";

import { factoryClientRestApi } from "@shared/api";
import { LogoutApi } from "./logout.api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuthStore } from "@features/auth/auth.store";

const client = await factoryClientRestApi();
const logoutApi = new LogoutApi(client);

export function useLogoutAdapter() {
	const { logout } = useAuthStore();

	const { mutateAsync, error, isPaused, isError } = useMutation({
		mutationFn: async () => await logoutApi.execute(),
		onSuccess: () => {
			toast.success(`Вы успешно вышли`, {
				position: "top-center",
			});

			logout();
		},
	});

	return {
		logout: mutateAsync,
		error,
		isLoading: isPaused,
		isError,
	};
}
