"use client";

import type { PropsWithChildren } from "react";
import {
	AccentProvider,
	AnimationProvider,
	ThemeProvider,
} from "@features/setting";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@features/auth/auth.provider";

const queryClient = new QueryClient();

export const AppProviders: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeProvider>
			<AccentProvider>
				<AnimationProvider>
					<QueryClientProvider client={queryClient}>
						<AuthProvider>{children}</AuthProvider>
					</QueryClientProvider>
				</AnimationProvider>
			</AccentProvider>
		</ThemeProvider>
	);
};
