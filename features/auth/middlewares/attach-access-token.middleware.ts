import type { TClientRestApi } from "@shared/api";
import { useAuthStore } from "../auth.store";

export async function attachAccessToken(api: TClientRestApi) {
	api.interceptors.request.use((config) => {
		const token = useAuthStore.getState().accessToken;
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	});
}
