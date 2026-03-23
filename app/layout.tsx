import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@shared/providers";
import { ParaglideProvider } from "@shared/providers/paraglide-provider";
import { Footer } from "@widgets/footer";
import { Toaster } from "@ui-kit/ui/sonner";

import { getServerLocale } from "@shared/lib/get-locale-server";
import { m } from "@paraglide/messages";
import { configService } from "@shared/container";

export async function generateMetadata(): Promise<Metadata> {
	const frontendUrl = configService.getFrontendUrl();
	await getServerLocale();

	return {
		title: m.metaHomeTitle(),
		description: m.metaHomeDescription(),
		icons: {
			icon: "/logo.png",
		},
		openGraph: {
			title: m.metaHomeTitle(),
			description: m.metaHomeOgDescription(),
			url: frontendUrl,
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
			title: m.metaHomeTitle(),
			description: m.metaHomeOgDescription(),
			images: [`${frontendUrl}/logo.png`],
		},
		robots: {
			index: true,
			follow: true,
		},
	};
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getServerLocale();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className="bg-background antialiased">
				<ParaglideProvider locale={locale}>
					<AppProviders>
						{children}
						<Footer />
						<Toaster />
					</AppProviders>
				</ParaglideProvider>
			</body>
		</html>
	);
}
