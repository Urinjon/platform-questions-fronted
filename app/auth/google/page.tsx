import type { Metadata } from "next";
import { GoogleCallbackPageClient } from "./GoogleCallbackPageClient";

export const metadata: Metadata = {
	title: "Google авторизация",
	description: "Обработка авторизации через Google",
};

export default function GoogleCallbackPage() {
	return <GoogleCallbackPageClient />;
}
