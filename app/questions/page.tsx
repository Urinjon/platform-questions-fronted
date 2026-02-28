import { requireAuth } from "@features/auth/require-auth.server";
import { QuestionsView } from "@features/question-display";

export default async function QuestionsPage() {
	await requireAuth("/questions");

	return <QuestionsView />;
}
