"use client";

interface ILocalStorageService {
	setItem<T>(key: string, value: T): void;
	getItem<T>(key: string): T | null;
	removeItem(key: string): void;
	clear(): void;
}

class LocalStorageService implements ILocalStorageService {
	private get storage(): Storage | null {
		if (typeof window === "undefined") return null;
		return window.localStorage;
	}

	setItem<T>(key: string, value: T): void {
		if (!this.storage) return;

		this.storage.setItem(key, JSON.stringify(value));
	}

	getItem<T>(key: string): T | null {
		if (!this.storage) return null;

		const item = this.storage.getItem(key);
		if (!item) return null;

		try {
			return JSON.parse(item) as T;
		} catch {
			return null;
		}
	}

	removeItem(key: string): void {
		this.storage?.removeItem(key);
	}

	clear(): void {
		this.storage?.clear();
	}
}

export { LocalStorageService };
export type { ILocalStorageService };
