import { LoginPageClient } from "@features/auth/login/ui/LoginPageClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Авторизация",
	description: "Страница для авторизации на платформе вопросов",
	openGraph: {
		title: "Авторизация",
		description: "Тут вы можете войти в свою учетную запись",
		url: "https://platform-questions-fronted.vercel.app/auth/login",
		siteName: "Platform Questions",
	},
};

export default function LoginPage() {
	return <LoginPageClient />;
}
