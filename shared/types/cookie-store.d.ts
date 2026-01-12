export {};

declare global {
	interface CookieStore {
		get(name: string): Promise<CookieListItem | null>;
		getAll(name?: string): Promise<CookieListItem[]>;
		set(cookie: CookieInit): Promise<void>;
		delete(name: string): Promise<void>;
	}

	interface CookieInit {
		name: string;
		value: string;
		path?: string;
		domain?: string;
		expires?: Date;
		maxAge?: number;
		sameSite?: "strict" | "lax" | "none";
		secure?: boolean;
	}

	interface CookieListItem {
		name: string;
		value: string;
		path?: string;
		domain?: string;
		expires?: number;
		secure?: boolean;
		sameSite?: "strict" | "lax" | "none";
	}

	interface Window {
		cookieStore: CookieStore;
	}
}
