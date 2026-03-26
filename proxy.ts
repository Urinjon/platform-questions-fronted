import { paraglideMiddleware } from "./paraglide/server.js";
import { type NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
	return paraglideMiddleware(
		request,
		async ({ request: localizedRequest, locale }) => {
			const response = NextResponse.next({
				request: {
					headers: new Headers({
						...Object.fromEntries(localizedRequest.headers),
						"x-paraglide-locale": locale,
					}),
				},
			});

			response.cookies.set("PARAGLIDE_LOCALE", locale, {
				path: "/",
				maxAge: 34560000,
			});

			return response;
		},
	);
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
