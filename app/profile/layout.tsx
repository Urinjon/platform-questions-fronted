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
import { configService } from "@shared/container";

export async function generateMetadata(): Promise<Metadata> {
	const frontendUrl = configService.getFrontendUrl();
	await getServerLocale();

	return {
		title: m.metaProfileTitle(),
		description: m.metaProfileDescription(),
		openGraph: {
			title: m.metaProfileTitle(),
			description: m.metaProfileOgDescription(),
			url: `${frontendUrl}/profile`,
			siteName: m.metaSiteName(),
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
