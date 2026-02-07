import axios from "axios";
import { useAuthStore } from "@features/auth/auth.store";

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
	const skipUrls = ["/v1/auth/refresh/", "/v1/auth/logout/", "/v1/auth/me/"];
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
				const refreshRes = await api.post("/v1/auth/refresh/");
				useAuthStore.getState().setAccessToken(refreshRes.data.access_token);
				originalRequest.headers.Authorization = `Bearer ${refreshRes.data.access_token}`;
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
