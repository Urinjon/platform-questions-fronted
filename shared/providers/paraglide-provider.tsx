"use client";

import { setLocale } from "@paraglide/runtime";
import type { PropsWithChildren } from "react";
import type { Language } from "@features/setting";

interface ParaglideProviderProps extends PropsWithChildren {
	locale: Language;
}

/**
 * Synchronises paraglide's `getLocale()` in the **Client module graph** with
 * the locale determined by the server (proxy -> getServerLocale).
 *
 * Next.js App Router maintains separate module graphs for Server Components
 * (RSC) and Client Components. `overwriteGetLocale` called in a Server
 * Component only affects the Server graph. This provider bridges the gap by
 * calling `setLocale` — which writes the module-internal `_locale` variable
 * that the `globalVariable` strategy reads — in the **Client** graph.
 *
 * Called unconditionally (SSR + hydration) so the value is consistent:
 *   - SSR:       sets `_locale` (cookie write is safely skipped on server)
 *   - Hydration: sets `_locale` + `document.cookie`
 *
 * React renders top-down, so this executes before any child `m.xxx()` call.
 */
export function ParaglideProvider({
	locale,
	children,
}: ParaglideProviderProps) {
	setLocale(locale, { reload: false });
	return <>{children}</>;
}
