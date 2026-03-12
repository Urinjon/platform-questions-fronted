"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";

import { fetchProfile, updateProfile } from "./profile.api";
import type { ApiResponse } from "@shared/api/types";
import type { UpdateUserDto, User } from "@entities/user";
import { getFirstData } from "@shared/api/response.utils";
import { getErrorDetailFromAxiosError } from "@shared/api/error.utils";
import { useAuthStore } from "@features/auth/auth.store";

const PROFILE_QUERY_KEY = ["profile", "me"] as const;

export function useProfileQuery() {
	return useQuery<ApiResponse<User>>({
		queryKey: PROFILE_QUERY_KEY,
		queryFn: fetchProfile,
		staleTime: 1000 * 60 * 5,
	});
}

export function useProfileUpdateAdapter() {
	const queryClient = useQueryClient();
	const { setUser } = useAuthStore();

	const { mutateAsync, isPending } = useMutation<
		ApiResponse<User>,
		AxiosError<ApiResponse<never>>,
		UpdateUserDto
	>({
		mutationFn: updateProfile,
		onSuccess: (response) => {
			const user = getFirstData(response);
			if (user) {
				setUser(user);
				toast.success("Профиль успешно обновлён", {
					position: "top-center",
				});
			}
			queryClient.invalidateQueries({ queryKey: PROFILE_QUERY_KEY });
		},
		onError: (error) => {
			const detail = getErrorDetailFromAxiosError(error);
			toast.error(detail ?? "Не удалось обновить профиль", {
				position: "top-center",
			});
		},
	});

	return {
		updateProfile: mutateAsync,
		isUpdating: isPending,
	};
}
