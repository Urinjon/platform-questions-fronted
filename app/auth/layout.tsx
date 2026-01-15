import { BackgroundBeams } from "@ui-kit/effects";
import { Space } from "@ui-kit/ui/space";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Auth",
	description: "Страница для авторизации на платформе вопросов",
	openGraph: {
		title: "Авторизация",
		description: "Тут вы можете создать свой аккаунт или войти в существующий",
		url: "https://platform-questions-fronted.vercel.app/auth/login",
		siteName: "Platform Questions",
	},
};

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Space
			as="section"
			justify="center"
			align="center"
			fullWidth
			fullScreenHeight
		>
			<BackgroundBeams />
			{children}
		</Space>
	);
}
