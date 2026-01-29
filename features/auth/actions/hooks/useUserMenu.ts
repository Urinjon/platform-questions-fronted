"use client";
import { useAuthStore } from "@features/auth/auth.store";
import { useRouter } from "next/navigation";

export const useUserMenu = () => {
	const router = useRouter();
	const { user } = useAuthStore();

	const handleLogout = async () => {
		// await logout(); // вызывает API и очищает store
		router.push("/login");
	};

	const goToProfile = () => {
		router.push("/profile");
	};

	return { user, handleLogout, goToProfile };
};
