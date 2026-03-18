import type { User } from "@entities/user";
import { Alert, AlertDescription, AlertTitle } from "@ui-kit/ui/alert";
import { AlertTriangle } from "lucide-react";

interface ProfileIsActiveProps {
	user: User | null;
}

export const ProfileIsActive = ({ user }: ProfileIsActiveProps) => {
	if (!user || user.is_active) {
		return null;
	}

	return (
		<Alert className="border-yellow-400/80 bg-yellow-50 text-yellow-900 dark:border-yellow-500/70 dark:bg-yellow-500/10 dark:text-yellow-200">
			<AlertTriangle className="text-yellow-500 dark:text-yellow-300" />
			<AlertTitle>Требуется активация аккаунта</AlertTitle>
			<AlertDescription>
				Похоже, ваш аккаунт ещё не активирован. Пожалуйста, перейдите по ссылке
				из письма для подтверждения (обычно оно приходит на{" "}
				<span className="font-medium">{user.email}</span>), чтобы получить
				полный доступ к платформе.
			</AlertDescription>
		</Alert>
	);
};
