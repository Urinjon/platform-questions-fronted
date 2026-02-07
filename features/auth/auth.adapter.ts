import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuthStore } from "@features/auth/auth.store";
import { authService } from "./auth.service";

export function useLogin() {
	const queryClient = useQueryClient();
	const { setUser, setAccessToken } = useAuthStore();

	return useMutation({
		mutationFn: authService.login,
		onSuccess: async (res) => {
			const { access_token } = res.data;
			setAccessToken(access_token);

			const meRes = await authService.me();
			setUser(meRes.data);

			toast.success(`Добро пожаловать ${meRes.data.username}!`);
			queryClient.invalidateQueries({ queryKey: ["me"] });
		},
		onError: (err) => {
			toast.error(err.message || "Ошибка входа");
		},
	});
}

export function useLogout() {
	const { logout: storeLogout, setUser } = useAuthStore();
	return async () => {
		try {
			await authService.logout();
		} finally {
			storeLogout();
			setUser(null);
		}
	};
}
