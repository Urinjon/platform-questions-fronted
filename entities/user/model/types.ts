export interface User {
	id: number;
	username: string;
	email: string;
	first_name: string;
	last_name: string;
	is_active?: boolean;
	role?: string;
}

export interface UpdateUserDto {
	username?: string;
	email?: string;
	first_name?: string;
	last_name?: string;
}
