"use client";
import { useAuthStore } from "@features/auth/auth.store";
import { useRouter } from "next/navigation";
import { useLogoutAdapter } from "../api/use-logout.adapter";

export const useUserMenu = () => {
	const router = useRouter();
	const { user } = useAuthStore();

	const { logout } = useLogoutAdapter();

	const handleLogout = async () => {
		await logout();

		router.push("/login");
	};

	const goToProfile = () => {
		router.push("/profile");
	};

	return { user, handleLogout, goToProfile };
};
