import { Container } from "@shared/widgets/Container.widget";
import { Space } from "@ui-kit/ui/space";
import { Spotlight } from "@ui-kit/effects";
import { AppSideBar } from "@modules/common";
import { SidebarProvider, SidebarTrigger } from "@ui-kit/ui/sidebar";
import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Questions",
	description: "Страница с вопросами",
	openGraph: {
		title: "Questions",
		description: "Страница с вопросами",
		url: "https://platform-questions-fronted.vercel.app/questions",
		siteName: "Platform Questions",
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
				<Spotlight />
				<AppSideBar />

				<SidebarTrigger />
				<Container>{children}</Container>
			</SidebarProvider>
		</Space>
	);
}
