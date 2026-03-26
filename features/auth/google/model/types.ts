import type { User } from "@entities/user";

export interface GoogleAuthUrlResponseDto {
	authorization_url: string;
}

export interface GoogleCallbackDto {
	code: string;
	state: string;
}

export interface GoogleCallbackResponseDto {
	access_token: string;
	refresh_token: string;
	user: User;
	is_new_user: boolean;
}
