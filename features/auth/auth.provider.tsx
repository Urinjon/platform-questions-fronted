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
	isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState(true);
	const { setUser, logout: storeLogout } = useAuthStore();

	useEffect(() => {
		const initAuth = async () => {
			try {
				const meRes = await authService.me();
				setUser(meRes.data.data);
			} catch {
				storeLogout();
				setUser(null);
			} finally {
				setIsLoading(false);
			}
		};

		initAuth();
	}, [storeLogout, setUser]);

	return (
		<AuthContext.Provider
			value={{
				isLoading,
				isAuthenticated: !isLoading && !!useAuthStore.getState().user,
			}}
		>
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
