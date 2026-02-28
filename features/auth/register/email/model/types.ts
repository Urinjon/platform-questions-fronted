import type { User } from "@entities/user";

export interface RegisterEmailDto {
	email: string;
	username: string;
	password: string;
	last_name: string;
	first_name: string;
	university: string;
	birthday: string;
}

export interface RegisterEmailResponseDto {
	access_token: string;
	resfresh_token: string;
	user: User;
}
