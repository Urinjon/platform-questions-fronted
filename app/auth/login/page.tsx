import { LoginPageClient } from "@features/auth/login/ui/LoginPageClient";
import { m } from "@paraglide/messages";
import { configService } from "@shared/container";
import { getServerLocale } from "@shared/lib/get-locale-server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const frontendUrl = configService.getFrontendUrl();
	await getServerLocale();

	return {
		title: m.metaLoginTitle(),
		description: m.metaLoginDescription(),
		icons: {
			icon: "/logo.png",
		},
		openGraph: {
			title: m.metaLoginOgTitle(),
			description: m.metaLoginOgDescription(),
			url: `${frontendUrl}/auth/login`,
			siteName: m.metaSiteName(),
			type: "website",
			images: [
				{
					url: `${frontendUrl}/logo.png`,
					width: 800,
					height: 600,
					alt: "Aiautomation. PQ",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: m.metaLoginOgTitle(),
			description: m.metaLoginOgDescription(),
			images: [`${frontendUrl}/logo.png`],
		},
		robots: {
			index: false,
			follow: false,
		},
	};
}

export default function LoginPage() {
	return <LoginPageClient />;
}
