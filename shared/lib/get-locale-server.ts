import { cache } from "react";
import { headers } from "next/headers";
import {
	locales,
	baseLocale,
	overwriteServerAsyncLocalStorage,
	setLocale,
} from "@paraglide/runtime";
import type { Language } from "@features/setting";

// biome-ignore lint: using `any` for AsyncLocalStorage kept outside React.cache
let storage: any;

/**
 * Initialises the locale for the current server request.
 *
 * Call once in the **root** layout — React.cache ensures it executes at
 * most once per request.
 *
 * Two mechanisms set the locale in the Server module graph's runtime.js:
 *
 * 1. AsyncLocalStorage.enterWith() — race-safe (per async-context).
 *    getLocale() checks serverAsyncLocalStorage.getStore()?.locale first.
 *
 * 2. setLocale(locale, { reload: false }) — sets `_locale` directly in
 *    the module scope. Serves as a fallback if React's internal scheduling
 *    breaks the async-context chain so enterWith doesn't propagate.
 *
 * Both use closures (direct module-scope variable access), so they work
 * even when Turbopack doesn't propagate `export let` live-bindings.
 */
export const getServerLocale = cache(async (): Promise<Language> => {
	if (!storage) {
		const { AsyncLocalStorage } = await import("node:async_hooks");
		storage = new AsyncLocalStorage();
		overwriteServerAsyncLocalStorage(storage);
	}

	const headerStore = await headers();
	const raw = headerStore.get("x-paraglide-locale");
	const locale = (
		raw && locales.includes(raw as Language) ? raw : baseLocale
	) as Language;

	storage.enterWith({ locale, origin: "", messageCalls: new Set() });
	setLocale(locale, { reload: false });

	return locale;
});
