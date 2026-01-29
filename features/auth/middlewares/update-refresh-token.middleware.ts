import type { TClientRestApi } from "@shared/api";
import { useAuthStore } from "../auth.store";

export async function updateRefreshToken(api: TClientRestApi) {
	api.interceptors.response.use(
		(res) => res,
		async (error) => {
			if (error.response?.status === 401) {
				const refreshRes = await api.post("/auth/refresh");
				useAuthStore.getState().setAccessToken(refreshRes.data.accessToken);
				return api.request(error.config);
			}
			return Promise.reject(error);
		},
	);
}
