"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { Space } from "@ui-kit/ui/space";
import { Spinner } from "@ui-kit/ui/spinner";

import { useGoogleCallbackAdapter } from "../api/use-google-callback.adapter";

export function GoogleCallbackHandler() {
	const searchParams = useSearchParams();
	const { exchangeCode, isLoading, isError } = useGoogleCallbackAdapter();
	const exchangedRef = useRef(false);

	useEffect(() => {
		if (exchangedRef.current) return;

		const code = searchParams.get("code");
		const state = searchParams.get("state");

		if (!code || !state) return;

		exchangedRef.current = true;
		exchangeCode({ code, state });
	}, [searchParams, exchangeCode]);

	if (isError) {
		return null;
	}

	return (
		<Space
			as="section"
			justify="center"
			align="center"
			fullWidth
			fullScreenHeight
		>
			{isLoading && <Spinner />}
		</Space>
	);
}
