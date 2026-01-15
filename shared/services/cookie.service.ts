// "use client";

// type CookieOptions = Omit<CookieInit, "name" | "value">;

// interface ICookieService {
//   get(name: string): Promise<CookieListItem | undefined>;
//   set(name: string, value: string, options?: CookieOptions): Promise<void>;
//   delete(name: string): Promise<void>;
//   list(): Promise<CookieListItem[]>;
// }

// class CookieService implements ICookieService {
//   private store?: CookieStore;

//   constructor() {
//     if (typeof window !== "undefined" && "cookieStore" in window) {
//       this.store = new CookieStore();
//     }
//   }

//   public async get(name: string): Promise<CookieListItem | undefined> {
//     if (!this.store) return undefined;
//     return (await this.store.get(name)) || undefined;
//   }

//   public async set(name: string, value: string, options?: CookieOptions) {
//     if (!this.store) return;
//     return this.store.set({ name, value, ...options });
//   }

//   public async delete(name: string) {
//     if (!this.store) return;
//     return this.store.delete(name);
//   }

//   public async list(): Promise<CookieListItem[]> {
//     if (!this.store) return [];
//     return await this.store.getAll();
//   }
// }

// export { CookieService };
// export type { ICookieService };
//
//
// "use client";

interface ICookieService {
	get(name: string): Promise<string | null>;
	set(
		name: string,
		value: string,
		options?: {
			path?: string;
			maxAge?: number;
			secure?: boolean;
			sameSite?: "lax" | "strict" | "none";
		},
	): Promise<void>;
	remove(name: string): Promise<void>;
}

class CookieService implements ICookieService {
	private get store(): CookieStore | null {
		if (typeof window === "undefined") return null;

		if ("cookieStore" in navigator) {
			return navigator.cookieStore as CookieStore;
		}

		return null;
	}

	async get(name: string): Promise<string | null> {
		if (!this.store) return null;

		const cookie = await this.store.get(name);
		return cookie?.value ?? null;
	}

	async set(
		name: string,
		value: string,
		options?: {
			path?: string;
			maxAge?: number;
			secure?: boolean;
			sameSite?: "lax" | "strict" | "none";
		},
	): Promise<void> {
		if (!this.store) return;

		await this.store.set({
			name,
			value,
			path: options?.path ?? "/",
			maxAge: options?.maxAge,
			secure: options?.secure,
			sameSite: options?.sameSite,
		});
	}

	async remove(name: string): Promise<void> {
		if (!this.store) return;
		await this.store.delete(name);
	}
}

export { CookieService };
export type { ICookieService };
