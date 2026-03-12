import { Space } from "@ui-kit/ui/space";
import { Spotlight } from "@ui-kit/effects";
import { SidebarProvider, SidebarTrigger } from "@ui-kit/ui/sidebar";
import type React from "react";
import type { Metadata } from "next";

import { Container } from "@widgets/container";
import { AppSideBar } from "@widgets/side-bar";

export const metadata: Metadata = {
	title: "Профиль | Platform Questions",
	description:
		"Просмотр и редактирование профиля пользователя. Управляйте вашими персональными данными, именем пользователя и электронной почтой.",
	openGraph: {
		title: "Профиль | Platform Questions",
		description:
			"Просмотр и редактирование профиля пользователя на платформе Platform Questions.",
		url: "https://platform-questions-fronted.vercel.app/profile",
		siteName: "Platform Questions",
		type: "profile",
	},
	robots: {
		index: false,
		follow: false,
	},
};

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Space as="main" align="center" fullScreenHeight>
			<SidebarProvider>
				<Spotlight />
				<AppSideBar />

				<SidebarTrigger />
				<Container>{children}</Container>
			</SidebarProvider>
		</Space>
	);
}
