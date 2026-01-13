import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@shared/providers";
import { Navigation } from "@shared/widgets/Navigation.widget";
import { Footer } from "@shared/widgets/Footer.widget";

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
					<div className="flex justify-center items-center w-full">
						<Navigation />
					</div>

					{children}

					<Footer />
				</AppProviders>
			</body>
		</html>
	);
}
