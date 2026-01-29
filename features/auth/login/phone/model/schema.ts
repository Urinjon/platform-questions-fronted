import { phoneRegex } from "@features/auth/auth.util";
import { z } from "zod";

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

export type LoginPhoneFormValues = z.infer<typeof loginPhoneSchema>;
