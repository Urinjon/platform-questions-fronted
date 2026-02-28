"use client";

import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAuthStore } from "./auth.store";
import { useAuthProvider } from "./auth.provider";
import { Spinner } from "@ui-kit/ui/spinner";

export const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const pathname = usePathname();

	const { user } = useAuthStore();
	const { isLoading } = useAuthProvider();

	useEffect(() => {
		if (!isLoading && !user) {
			const params = new URLSearchParams();
			if (pathname) {
				params.set("next", pathname);
			}
			router.replace(
				`/auth/login${params.toString() ? `?${params.toString()}` : ""}`,
			);
		}
	}, [isLoading, user, pathname, router]);

	if (isLoading || !user) {
		return (
			<div className="flex min-h-[200px] items-center justify-center">
				<Spinner />
			</div>
		);
	}

	return <>{children}</>;
};
