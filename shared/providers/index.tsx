"use client";

import type { PropsWithChildren } from "react";
import { AccentProvider, ThemeProvider } from "@features/setting";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@features/auth/auth.provider";

const queryClient = new QueryClient();

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider>
			<AccentProvider>
				<QueryClientProvider client={queryClient}>
					<AuthProvider>{children}</AuthProvider>
				</QueryClientProvider>
			</AccentProvider>
		</ThemeProvider>
	);
};
