import z from "zod";

export const loginEmailSchema = z.object({
	email: z
		.string("Email не может быть пустым")
		.email("Неверный email")
		.nonempty("Email не может быть пустым"),
	password: z
		.string("Пароль не может быть пустым")
		.min(8, "Минимум 8 символов")
		.nonempty("Пароль не может быть пустым"),
});

export type LoginEmailFormValues = z.infer<typeof loginEmailSchema>;
