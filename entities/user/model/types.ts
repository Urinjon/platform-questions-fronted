export type Role = "USER" | "ADMIN" | "MODERATOR";

export interface User {
	id: number;
	username: string;
	email: string;
	first_name: string;
	last_name: string;
	is_active: boolean;
	role?: Role;
	university?: string | null;
	birthday?: string | null;
}

export interface UpdateUserDto {
	username?: string;
	email?: string;
	first_name?: string;
	last_name?: string;
	university?: string;
	birthday?: string;
}
