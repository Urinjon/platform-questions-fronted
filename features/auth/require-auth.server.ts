import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Server-side guard for protected pages.
 * Проверяет наличие HttpOnly cookie `refresh_token`.
 * Если куки нет — редиректит на /auth/login с параметром next.
 */
export const requireAuth = async (nextPath: string) => {
	const cookieStore = await cookies();
	const refreshToken = cookieStore.get("refresh_token");

	if (!refreshToken) {
		redirect(`/auth/login?next=${encodeURIComponent(nextPath)}`);
	}
};
