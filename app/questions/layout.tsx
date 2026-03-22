import { Space } from "@ui-kit/ui/space";
import { Spotlight } from "@ui-kit/effects";

import { SidebarProvider, SidebarTrigger } from "@ui-kit/ui/sidebar";
import type React from "react";
import type { Metadata } from "next";

import { Container } from "@widgets/container";
import { AppContentSideBar, AppSideBar } from "@widgets/side-bar";

import { AnimationGate } from "@features/setting";

export const metadata: Metadata = {
	title: "Questions | Aiautomation. PQ",
	description: "Страница с вопросами",
	openGraph: {
		title: "Questions | Aiautomation. PQ",
		description: "Страница с вопросами",
		url: "https://platform-questions-fronted.vercel.app/questions",
		siteName: "Aiautomation. PQ",
	},
};

export default function QuestionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
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
