"use client";

import { Suspense } from "react";
import { Space } from "@ui-kit/ui/space";
import { Spinner } from "@ui-kit/ui/spinner";
import { GoogleCallbackHandler } from "@features/auth/google";

function FallbackLoader() {
	return (
		<Space
			as="section"
			justify="center"
			align="center"
			fullWidth
			fullScreenHeight
		>
			<Spinner />
		</Space>
	);
}

export function GoogleCallbackPageClient() {
	return (
		<Suspense fallback={<FallbackLoader />}>
			<GoogleCallbackHandler />
		</Suspense>
	);
}
