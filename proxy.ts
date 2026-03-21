// import { paraglideMiddleware } from "@paraglide/server.js";
// import { NextResponse } from "next/server";

// export async function proxy(request: Request) {
//   return paraglideMiddleware(request, async ({ request: localizedRequest }) => {
//     return NextResponse.next({ request: localizedRequest });
//   });
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

// import { paraglideMiddleware } from "@paraglide/server.js";
// import { NextRequest, NextResponse } from "next/server";

// export async function proxy(request: NextRequest) {
//   const cookie = request.cookies.get("PARAGLIDE_LOCALE");
//   console.log("PROXY COOKIE:", cookie); // что читает proxy?

//   return paraglideMiddleware(
//     request,
//     async ({ request: localizedRequest, locale }) => {
//       console.log("PROXY LOCALE:", locale); // какую локаль определил paraglide?
//       return NextResponse.next({
//         request: localizedRequest,
//       });
//     },
//   );
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

// proxy.ts
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
						"x-paraglide-locale": locale, // передаём локаль в заголовке
					}),
				},
			});
			return response;
		},
	);
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
