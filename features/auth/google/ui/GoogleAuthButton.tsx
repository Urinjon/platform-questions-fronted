"use client";

import { Button } from "@ui-kit/ui/button";
import { Spinner } from "@ui-kit/ui/spinner";
import { useGoogleAuthUrlAdapter } from "../api/use-google-auth-url.adapter";
import { GoogleIcon } from "./GoogleIcon";

interface GoogleAuthButtonProps {
	label?: string;
}

export function GoogleAuthButton({
	label = "Войти с помощью Google",
}: GoogleAuthButtonProps) {
	const { redirectToGoogle, isLoading } = useGoogleAuthUrlAdapter();

	return (
		<Button
			variant="outline"
			className="w-full"
			disabled={isLoading}
			onClick={() => redirectToGoogle()}
		>
			{isLoading ? <Spinner /> : <GoogleIcon />}
			{label}
		</Button>
	);
}
