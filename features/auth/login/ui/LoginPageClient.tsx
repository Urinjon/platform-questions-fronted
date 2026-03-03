"use client";

import { LoginForm } from "@features/auth";
import { RedirectIfAuthenticated } from "@features/auth/guards/redirect-if-authenticated.feature";

export function LoginPageClient() {
	return (
		<RedirectIfAuthenticated redirectTo="/questions">
			<LoginForm />
		</RedirectIfAuthenticated>
	);
}
