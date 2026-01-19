import { z } from "zod";

export const loginPhoneSchema = z.object({
	phone: z.string().min(10, "Неверный номер телефона"),
	password: z.string().min(8, "Минимум 8 символов"),
});

export const loginEmailSchema = z.object({
	email: z.string().email("Неверный email"),
	password: z.string().min(8, "Минимум 8 символов"),
});

export type LoginEmailFormValues = z.infer<typeof loginEmailSchema>;
export type LoginPhoneFormValues = z.infer<typeof loginPhoneSchema>;
