import { AuthActions } from "./AuthActions";
import { UserMenuDropdown } from "./UserMenuDropdown";

import { Spinner } from "@ui-kit/ui/spinner";
import { Button } from "@ui-kit/ui/button";
import { useAuthProvider } from "@features/auth/auth.provider";
import { useAuthStore } from "@features/auth/auth.store";

export const HeaderAuth = () => {
	const { isLoading } = useAuthProvider();
	const { accessToken } = useAuthStore();
	const isAuthenticated = !!accessToken;

	if (isLoading)
		return (
			<Button variant="outline">
				<Spinner />
			</Button>
		);

	return isAuthenticated ? <UserMenuDropdown /> : <AuthActions />;
};
