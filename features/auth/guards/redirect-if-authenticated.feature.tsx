"use client";

import { type ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Space } from "@ui-kit/ui/space";
import { Spinner } from "@ui-kit/ui/spinner";

import { useAuthProvider } from "../auth.provider";

interface RedirectIfAuthenticatedProps {
	children: ReactNode;
	redirectTo?: string;
}

export function RedirectIfAuthenticated(props: RedirectIfAuthenticatedProps) {
	const { children, redirectTo = "/questions" } = props;

	const { isAuthenticated, isLoading } = useAuthProvider();
	const router = useRouter();

	useEffect(() => {
		if (!isLoading && isAuthenticated) {
			router.replace(redirectTo);
		}
	}, [isAuthenticated, isLoading, redirectTo, router]);

	if (isLoading) {
		return (
			<Space as="div" justify="center" align="center" fullWidth>
				<Spinner />
			</Space>
		);
	}

	if (isAuthenticated) {
		return null;
	}

	return <>{children}</>;
}
