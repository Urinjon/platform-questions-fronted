"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { AxiosError } from "axios";

import * as m from "paraglide/messages";

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
	const { user: currentUser, setUser } = useAuthStore();

	const { mutateAsync, isPending } = useMutation<
		ApiResponse<User>,
		AxiosError<ApiResponse<never>>,
		UpdateUserDto
	>({
		mutationFn: updateProfile,
		onSuccess: (response, variables) => {
			const user = getFirstData(response);
			if (user) {
				setUser(user);

				const prevEmail = currentUser?.email?.trim() ?? "";
				const nextEmail = variables.email?.trim() ?? "";
				const emailChanged =
					nextEmail.length > 0 &&
					prevEmail.toLowerCase() !== nextEmail.toLowerCase();

				if (emailChanged) {
					toast.message(m.profileToastEmailChangedTitle(), {
						description: m.profileToastEmailChangedDescription(),
						position: "top-center",
					});
				} else {
					toast.success(m.profileToastProfileUpdatedTitle(), {
						position: "top-center",
					});
				}
			}
			queryClient.invalidateQueries({ queryKey: PROFILE_QUERY_KEY });
		},
		onError: (error) => {
			const detail = getErrorDetailFromAxiosError(error);
			toast.error(detail ?? m.profileToastProfileUpdateFailed(), {
				position: "top-center",
			});
		},
	});

	return {
		updateProfile: mutateAsync,
		isUpdating: isPending,
	};
}
