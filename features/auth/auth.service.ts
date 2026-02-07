import api from "@shared/api/axios";
import type { LoginEmailDto } from "./login/email/model/types";

export class AuthService {
	async login(data: LoginEmailDto) {
		return api.post("/v1/auth/login/", data, { withCredentials: true });
	}

	async refreshToken() {
		return api.post("/v1/auth/refresh/", {}, { withCredentials: true });
	}

	async logout() {
		return api.post("/v1/auth/logout/", {}, { withCredentials: true });
	}

	async me() {
		return api.get("/v1/auth/me/");
	}
}

export const authService = new AuthService();
