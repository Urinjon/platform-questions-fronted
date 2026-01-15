"use client";

import {
	AlertBody,
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@ui-kit/ui/alert-dialog";

import { Kbd } from "@ui-kit/ui/kbd";

import { Space } from "@ui-kit/ui/space";

import { SwitchTheme } from "../features/SwitchTheme.feature";
import { SwitchLanguage } from "../features/SwitchLanguage.feature";
import { SwitchAccentColor } from "../features/SwitchAccentColor.feature";
import { SwitchAnimation } from "../features/SwitchAnimation.feature";
import { AuthActions } from "@modules/auth";

interface ISettingsModalProps {
	children?: React.ReactNode;
}

export const SettingModal: React.FC<ISettingsModalProps> = ({ children }) => {
	return (
		<AlertDialog>
			<AlertDialogTrigger
				className="cursor-pointer flex items-center gap-3"
				asChild
			>
				{children}
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<Kbd className="absolute top-2 right-2">Esc</Kbd>
					<AlertDialogTitle>Настройки пользователя</AlertDialogTitle>
					<AlertDialogDescription>
						Тут вы можете настроить некторые параметры
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertBody>
					<Space fullWidth align="center" justify="start" axios="col" gap={3}>
						<AuthActions />
						<SwitchTheme />
						<SwitchLanguage />
						<SwitchAccentColor />
						<SwitchAnimation />
					</Space>
				</AlertBody>

				<AlertDialogFooter>
					<AlertDialogCancel>Отмена</AlertDialogCancel>
					<AlertDialogAction>Ок</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
