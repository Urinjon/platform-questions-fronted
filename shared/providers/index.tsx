"use client";

import type { PropsWithChildren } from "react";
import { AccentProvider, ThemeProvider } from "@features/setting";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider>
			<AccentProvider>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</AccentProvider>
		</ThemeProvider>
	);
};
