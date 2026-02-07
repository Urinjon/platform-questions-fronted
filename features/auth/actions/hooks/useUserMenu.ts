"use client";
import { useAuthStore } from "@features/auth/auth.store";
import { useRouter } from "next/navigation";
import { useLogoutAdapter } from "../api/use-logout.adapter";

export const useUserMenu = () => {
	const router = useRouter();
	const { user } = useAuthStore();

	const { logout } = useLogoutAdapter();
	const { logout: LogoutState } = useAuthStore();

	const handleLogout = async () => {
		await logout();
		LogoutState();

		router.push("/auth/login");
	};

	return { user, handleLogout };
};
