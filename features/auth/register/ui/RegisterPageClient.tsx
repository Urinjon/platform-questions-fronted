"use client";

import { RedirectIfAuthenticated } from "@features/auth/guards/redirect-if-authenticated.feature";
import { RegisterForm } from "@features/auth";

export function RegisterPageClient() {
	return (
		<RedirectIfAuthenticated redirectTo="/questions">
			<RegisterForm />
		</RedirectIfAuthenticated>
	);
}
