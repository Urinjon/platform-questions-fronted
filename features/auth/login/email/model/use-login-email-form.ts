"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { type LoginEmailFormValues, loginEmailSchema } from "./schema";
import { useAuthEmailAdapter } from "../api/use-auth-email.adapter";

export const useLoginEmailForm = () => {
	const { loginViaEmail, isLoading } = useAuthEmailAdapter();

	const form = useForm<LoginEmailFormValues>({
		resolver: zodResolver(loginEmailSchema),
		mode: "onChange",
		defaultValues: {
			email: "user@example.com",
			password: "strongpassword123",
		},
	});

	const onSubmit = form.handleSubmit(async (data) => {
		await loginViaEmail({
			email: data.email,
			password: data.password,
		});
	});

	return { form, onSubmit, isLoading };
};
