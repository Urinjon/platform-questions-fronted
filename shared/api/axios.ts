import axios from "axios";
import { useAuthStore } from "@features/auth/auth.store";
import type { ApiResponse } from "./types";
import { getFirstData } from "./response.utils";

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
	timeout: 10000,
	withCredentials: true,
});

// api.interceptors.request.use((config) => {
//   const token = useAuthStore.getState().accessToken;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
api.interceptors.request.use((config) => {
	// Для refresh/logout не прикрепляем access token, для остальных — прикрепляем.
	const skipUrls = ["/v1/auth/refresh/", "/v1/auth/logout/"];
	if (!skipUrls.some((url) => config.url?.includes(url))) {
		const token = useAuthStore.getState().accessToken;
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
	}
	return config;
});

// Response interceptor для авто-refresh
api.interceptors.response.use(
	(res) => res,
	async (error) => {
		const originalRequest = error.config;

		// НЕ делаем refresh для этих endpoint-ов
		const skipUrls = ["/refresh", "/logout"];
		if (skipUrls.some((url) => originalRequest.url?.includes(url))) {
			return Promise.reject(error);
		}

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			try {
				type RefreshPayload = { access_token: string };

				const refreshRes =
					await api.post<ApiResponse<RefreshPayload>>("/v1/auth/refresh/");

				const payload = getFirstData(refreshRes.data);

				if (!payload?.access_token) {
					useAuthStore.getState().logout();
					return Promise.reject(error);
				}

				useAuthStore.getState().setAccessToken(payload.access_token);
				originalRequest.headers.Authorization = `Bearer ${payload.access_token}`;

				return api.request(originalRequest);
			} catch (err) {
				useAuthStore.getState().logout();
				return Promise.reject(err);
			}
		}

		return Promise.reject(error);
	},
);

export default api;
