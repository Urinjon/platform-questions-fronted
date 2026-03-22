import { Space } from "@ui-kit/ui/space";
import { Spotlight } from "@ui-kit/effects";
import { SidebarProvider, SidebarTrigger } from "@ui-kit/ui/sidebar";
import type React from "react";
import type { Metadata } from "next";

import { Container } from "@widgets/container";
import { AppContentSideBar, AppSideBar } from "@widgets/side-bar";
import { AnimationGate } from "@features/setting";
import { getServerLocale } from "@shared/lib/get-locale-server";
import { m } from "@paraglide/messages";

export async function generateMetadata(): Promise<Metadata> {
	await getServerLocale();
	return {
		title: m.profileMetaTitle(),
		description:
			"Просмотр и редактирование профиля пользователя. Управляйте вашими персональными данными, именем пользователя и электронной почтой.",
		openGraph: {
			title: "Профиль | Aiautomation. PQ",
			description:
				"Просмотр и редактирование профиля пользователя на платформе Aiautomation. PQ.",
			url: "https://platform-questions-fronted.vercel.app/profile",
			siteName: "Aiautomation. PQ",
			type: "profile",
		},
		robots: {
			index: false,
			follow: false,
		},
	};
}

export default async function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	await getServerLocale();
	return (
		<Space as="main" align="center" fullScreenHeight>
			<SidebarProvider>
				<AnimationGate>
					<Spotlight />
				</AnimationGate>

				<AppSideBar>
					<AppContentSideBar />
				</AppSideBar>

				<SidebarTrigger />
				<Container>{children}</Container>
			</SidebarProvider>
		</Space>
	);
}
