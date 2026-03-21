// shared/lib/get-locale-server.ts
import { cache } from "react";
import { headers } from "next/headers";
import { locales, baseLocale, overwriteGetLocale } from "@paraglide/runtime";
import type { Language } from "@features/setting";

/**
 * Инициализирует локаль для текущего серверного запроса.
 *
 * ## Проблема
 * Paraglide JS использует AsyncLocalStorage для передачи локали между
 * серверными компонентами, но в Next.js 16 AsyncLocalStorage не работает
 * корректно — дочерние Server Components получают дефолтную локаль (en)
 * вместо локали пользователя.
 *
 * ## Решение
 * Функция читает локаль из заголовка `x-paraglide-locale`, который
 * устанавливается в `proxy.ts` на каждый запрос, и переопределяет
 * `getLocale()` через `overwriteGetLocale` — после чего все вызовы
 * `m.someMessage()` в Server Components возвращают правильный перевод.
 *
 * ## Использование
 * Вызывай один раз в layout — благодаря `React.cache` функция выполнится
 * только один раз за запрос, и все дочерние Server Components автоматически
 * получат правильную локаль без дополнительных вызовов.
 *
 * @example
 * ```tsx
 * // app/questions/layout.tsx
 * export default async function QuestionsLayout({ children }) {
 *   await getServerLocale(); // достаточно одного вызова на layout
 *   return <>{children}</>;
 * }
 * ```
 *
 * @returns {Promise<Language>} Текущая локаль пользователя или baseLocale если локаль не найдена
 */
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
