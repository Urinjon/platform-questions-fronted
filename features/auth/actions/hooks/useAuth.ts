import { useAuthStore } from "@features/auth/auth.store";

export const useAuth = () => {
	const { user } = useAuthStore();
	return { user, isAuthenticated: !!user };
};
