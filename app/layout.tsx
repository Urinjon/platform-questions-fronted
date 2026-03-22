import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@shared/providers";
import { ParaglideProvider } from "@shared/providers/paraglide-provider";
import { Footer } from "@widgets/footer";
import { Toaster } from "@ui-kit/ui/sonner";

import { getServerLocale } from "@shared/lib/get-locale-server";

export const metadata: Metadata = {
	title: "Aiautomation. PQ",
	description: "Платформа с вопросами для улучшения знаний и навыков",
	icons: {
		icon: "/logo.png",
	},
};

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
