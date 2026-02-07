import type { LoginEmailDto, LoginEmailResponseDto } from "../model/types";
import axios from "axios";
import api from "@shared/api/axios";

export class LoginEmailApi {
	public async execute(dto: LoginEmailDto) {
		try {
			const response = await api.post<LoginEmailResponseDto>(
				"v1/auth/login/email/",
				dto,
			);
			return { data: response.data, error: null };
		} catch (err) {
			if (axios.isAxiosError(err)) {
				return { data: null, error: err.response?.data?.detail || err.message };
			}
			return { data: null, error: "Unknown error" };
		}
	}
}
