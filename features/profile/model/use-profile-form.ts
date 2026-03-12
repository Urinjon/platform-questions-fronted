"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

import { type ProfileFormValues, profileFormSchema } from "./schema";
import { useProfileUpdateAdapter } from "../api/use-profile.adapter";
import type { User } from "@entities/user";

export const useProfileForm = (user: User | null) => {
	const { updateProfile, isUpdating } = useProfileUpdateAdapter();

	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileFormSchema),
		mode: "onChange",
		defaultValues: {
			username: user?.username ?? "",
			email: user?.email ?? "",
			first_name: user?.first_name ?? "",
			last_name: user?.last_name ?? "",
		},
	});

	useEffect(() => {
		if (user) {
			form.reset({
				username: user.username ?? "",
				email: user.email ?? "",
				first_name: user.first_name ?? "",
				last_name: user.last_name ?? "",
			});
		}
	}, [user, form]);

	const onSubmit = form.handleSubmit(async (data) => {
		await updateProfile(data);
	});

	const isDirty = form.formState.isDirty;
	const isValid = form.formState.isValid;

	return { form, onSubmit, isUpdating, isDirty, isValid };
};
