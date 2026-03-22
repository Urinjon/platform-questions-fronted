import { cache } from "react";
import { headers } from "next/headers";
import { locales, baseLocale, overwriteGetLocale } from "@paraglide/runtime";
import type { Language } from "@features/setting";

/**
 * Per-request locale store via React.cache.
 *
 * Unlike a plain closure captured by overwriteGetLocale, this store is
 * scoped to the current server request — concurrent requests each get
 * their own instance, eliminating race conditions.
 */
const requestLocaleStore = cache((): { locale: Language } => ({
	locale: baseLocale as Language,
}));

/**
 * Initialises the locale for the current server request.
 *
 * Call once in the **root** layout — React.cache ensures it executes at
 * most once per request.  After the call every `m.someMessage()` in both
 * Server and Client components returns the correct translation:
 *
 * - **Server Components** — `getLocale()` reads from the per-request
 *   store set here.
 * - **Client Components** — `getLocale()` reads the `PARAGLIDE_LOCALE`
 *   cookie that the middleware sets on every response, so the value is
 *   guaranteed to match the server-rendered output (no hydration errors).
 */
export const getServerLocale = cache(async (): Promise<Language> => {
	const headerStore = await headers();
	const locale = headerStore.get("x-paraglide-locale");
	const resolvedLocale =
		locale && locales.includes(locale as Language)
			? (locale as Language)
			: baseLocale;

	requestLocaleStore().locale = resolvedLocale;
	overwriteGetLocale(() => requestLocaleStore().locale);

	return resolvedLocale;
});
