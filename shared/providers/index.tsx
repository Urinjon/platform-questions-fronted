"use client";

import "reflect-metadata";

import { AccentProvider, ThemeProvider } from "modules/settings";
import type { PropsWithChildren } from "react";

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider>
			<AccentProvider>{children}</AccentProvider>
		</ThemeProvider>
	);
};
