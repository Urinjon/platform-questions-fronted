"use client";

import type { PropsWithChildren } from "react";
import { AccentProvider, ThemeProvider } from "@features/setting";

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider>
			<AccentProvider>{children}</AccentProvider>
		</ThemeProvider>
	);
};
