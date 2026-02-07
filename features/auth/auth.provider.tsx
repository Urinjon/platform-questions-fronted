"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from "react";
import { useAuthStore } from "@features/auth/auth.store";
import { authService } from "./auth.service";

interface AuthContextType {
	isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState(true);
	const { setUser, setAccessToken, logout: storeLogout } = useAuthStore();

	useEffect(() => {
		const initAuth = async () => {
			try {
				const refreshRes = await authService.refreshToken();
				const accessToken = refreshRes.data.access_token;
				if (!accessToken) throw new Error("No access token from refresh");

				setAccessToken(accessToken);

				const meRes = await authService.me();
				setUser(meRes.data);
			} catch {
				storeLogout();
				setUser(null);
			} finally {
				setIsLoading(false);
			}
		};

		initAuth();
	}, [storeLogout, setUser, setAccessToken]);

	return (
		<AuthContext.Provider value={{ isLoading }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthProvider = () => {
	const context = useContext(AuthContext);
	if (!context)
		throw new Error("useAuthProvider must be used within AuthProvider");
	return context;
};
