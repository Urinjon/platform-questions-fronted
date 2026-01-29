import type { User } from "@entities/user";

export interface LoginEmailDto {
	email: string;
	password: string;
}

export interface LoginEmailResponseDto {
	accessToken: string;
	resfreshToken: string;
	user: User;
}
