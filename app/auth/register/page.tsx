import { RegisterForm } from "@features/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Регистрация",
	description: "Страница для регистрации на платформе вопросов",
	openGraph: {
		title: "Регистрация",
		description: "Тут вы можете создать свой аккаунт",
		url: "https://platform-questions-fronted.vercel.app/auth/register",
		siteName: "Platform Questions",
	},
};

export default function RegisterPage() {
	return <RegisterForm />;
}
