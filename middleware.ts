import { paraglideMiddleware } from "./paraglide/server.js";
import { NextResponse } from "next/server";

export async function middleware(request: Request) {
	return paraglideMiddleware(request, async () => {
		return NextResponse.next();
	});
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
