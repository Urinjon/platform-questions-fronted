import { AnimationGate } from "@features/setting";
import { m } from "@paraglide/messages";
import { configService } from "@shared/container";
import { getServerLocale } from "@shared/lib/get-locale-server";
import { BackgroundBeams } from "@ui-kit/effects";
import { Space } from "@ui-kit/ui/space";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const frontendUrl = configService.getFrontendUrl();
	await getServerLocale();

	return {
		title: m.metaAuthTitle(),
		description: m.metaAuthDescription(),
		icons: {
			icon: "/logo.png",
		},
		openGraph: {
			title: m.metaAuthOgTitle(),
			description: m.metaAuthOgDescription(),
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
			title: m.metaAuthOgTitle(),
			description: m.metaAuthOgDescription(),
			images: [`${frontendUrl}/logo.png`],
		},
		robots: {
			index: false,
			follow: false,
		},
	};
}

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
			<AnimationGate>
				<BackgroundBeams />
			</AnimationGate>
			{children}
		</Space>
	);
}
