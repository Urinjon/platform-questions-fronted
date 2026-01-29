import { useAuth } from "../hooks/useAuth";
import { AuthActions } from "./AuthActions";
import { UserMenuDropdown } from "./UserMenuDropdown";

export const HeaderAuth = () => {
	const { isAuthenticated } = useAuth();

	return isAuthenticated ? <UserMenuDropdown /> : <AuthActions />;
};
