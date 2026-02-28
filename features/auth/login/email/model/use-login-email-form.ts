"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { type LoginEmailFormValues, loginEmailSchema } from "./schema";
import { useAuthEmailAdapter } from "../api/use-auth-email.adapter";
import { useState } from "react";
import type { ApiError } from "@shared/api/types";

export const useLoginEmailForm = () => {
	const { loginViaEmail, isLoading, error } = useAuthEmailAdapter();
	const [errors, setErrors] = useState<ApiError[]>([]);

	const form = useForm<LoginEmailFormValues>({
		resolver: zodResolver(loginEmailSchema),
		mode: "onChange",
		defaultValues: {
			email: "user@example.com",
			password: "strongpassword123",
		},
	});

	const onSubmit = form.handleSubmit(async (data) => {
		setErrors([]);
		try {
			await loginViaEmail({
				email: data.email,
				password: data.password,
			});
		} catch {
			setErrors(error?.response?.data.errors || []);
		}
	});

	return { form, onSubmit, isLoading, errors };
};
