import type { User } from "@entities/user";

export interface LoginEmailDto {
	email: string;
	password: string;
}

export interface LoginEmailResponseDto {
	access_token: string;
	resfresh_token: string;
	user: User;
}
