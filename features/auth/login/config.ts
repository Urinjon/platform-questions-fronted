import { z } from "zod";
import { phoneRegex } from "../auth.util";

export const loginPhoneSchema = z.object({
	phone: z
		.string("Номер телефона не может быть пустым")
		.regex(phoneRegex, "Неверная структура номера телефона")
		.min(13, "Неверный номер телефона")
		.nonempty("Номер телефона не может быть пустым"),
	password: z
		.string("Пароль не может быть пустым")
		.min(8, "Минимум 8 символов")
		.nonempty("Пароль не может быть пустым"),
});

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
export type LoginPhoneFormValues = z.infer<typeof loginPhoneSchema>;
