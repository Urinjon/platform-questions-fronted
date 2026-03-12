import { requireAuth } from "@features/auth/require-auth.server";
import { ProfileView } from "@features/profile";

export default async function ProfilePage() {
	await requireAuth("/profile");

	return <ProfileView />;
}
