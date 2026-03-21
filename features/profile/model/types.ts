import type { User, Role } from "@entities/user";

import * as m from "@paraglide/messages";

export interface ProfileHeaderProps {
	user: User | null;
}

export const roleLabels = (): Record<Role, string> => ({
	USER: m.profileUser(),
	ADMIN: m.profileAdmin(),
	MODERATOR: m.profileModerator(),
});
