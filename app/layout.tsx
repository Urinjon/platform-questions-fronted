import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@shared/providers";
import { Footer } from "@widgets/footer";
import { Toaster } from "@ui-kit/ui/sonner";

export const metadata: Metadata = {
	title: "Platform Questions",
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
	return (
		<html lang="ru" suppressHydrationWarning>
			<body>
				<AppProviders>
					{children}
					<Footer />
					<Toaster />
				</AppProviders>
			</body>
		</html>
	);
}
