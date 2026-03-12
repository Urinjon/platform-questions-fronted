import z from "zod";

export const profileFormSchema = z.object({
	username: z
		.string("Username не может быть пустым")
		.min(2, "Username должен содержать минимум 2 символа")
		.max(50, "Username не может быть длиннее 50 символов"),
	email: z
		.string("Email не может быть пустым")
		.email("Введите корректный email"),
	first_name: z
		.string()
		.max(100, "Имя не может быть длиннее 100 символов")
		.optional()
		.or(z.literal("")),
	last_name: z
		.string()
		.max(100, "Фамилия не может быть длиннее 100 символов")
		.optional()
		.or(z.literal("")),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
