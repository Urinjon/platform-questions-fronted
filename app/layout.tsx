import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@shared/providers";
import { Footer } from "@widgets/footer";
import { Toaster } from "@ui-kit/ui/sonner";
import { getLocale } from "@/paraglide/runtime.js";

export const metadata: Metadata = {
	title: "Aiautomation. PQ",
	description: "Платформа с вопросами для улучшения знаний и навыков",
	icons: {
		icon: "/logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = getLocale();
	return (
		<html lang={locale} suppressHydrationWarning>
			<body className="bg-background antialiased">
				<AppProviders>
					{children}
					<Footer />
					<Toaster />
				</AppProviders>
			</body>
		</html>
	);
}
