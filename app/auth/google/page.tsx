import { GoogleCallbackPageClient } from "@features/auth/google";
import { m } from "@paraglide/messages";
import { getServerLocale } from "@shared/lib/get-locale-server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	await getServerLocale();
	return {
		title: m.metaGoogleAuthTitle(),
		description: m.metaGoogleAuthDescription(),
	};
}

export default function GoogleCallbackPage() {
	return <GoogleCallbackPageClient />;
}
