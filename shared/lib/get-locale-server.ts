// shared/lib/get-locale-server.ts
import { cache } from "react";
import { headers } from "next/headers";
import { locales, baseLocale, overwriteGetLocale } from "@paraglide/runtime";
import type { Language } from "@features/setting";

export const getServerLocale = cache(async () => {
  const headerStore = await headers();
  const locale = headerStore.get("x-paraglide-locale");
  const resolvedLocale =
    locale && locales.includes(locale as Language)
      ? (locale as Language)
      : baseLocale;

  overwriteGetLocale(() => resolvedLocale);

  return resolvedLocale;
});
