"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuthStore } from "@features/auth/auth.store";

import { authService } from "@features/auth/auth.service";

export function useLogoutAdapter() {
	const { logout } = useAuthStore();

	const { mutateAsync, error, isPaused, isError } = useMutation({
		mutationFn: async () => await authService.logout(),
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
