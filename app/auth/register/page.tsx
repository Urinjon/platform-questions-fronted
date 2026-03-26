import type { Metadata } from "next";
import { RegisterPageClient } from "@features/auth/register/ui/RegisterPageClient";
import { configService } from "@shared/container";
import { getServerLocale } from "@shared/lib/get-locale-server";
import { m } from "@paraglide/messages";

export async function generateMetadata(): Promise<Metadata> {
	const frontendUrl = configService.getFrontendUrl();
	await getServerLocale();

	return {
		title: m.metaRegisterTitle(),
		description: m.metaRegisterDescription(),
		icons: {
			icon: "/logo.png",
		},
		openGraph: {
			title: m.metaRegisterOgTitle(),
			description: m.metaRegisterOgDescription(),
			url: `${frontendUrl}/auth/register`,
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
			title: m.metaRegisterOgTitle(),
			description: m.metaRegisterOgDescription(),
			images: [`${frontendUrl}/logo.png`],
		},
		robots: {
			index: false,
			follow: false,
		},
	};
}

export default function RegisterPage() {
	return <RegisterPageClient />;
}
