// "use client";

// import { AuthActions } from "@features/auth";
// import {
// 	SwitchAccentColor,
// 	SwitchAnimation,
// 	SwitchLanguage,
// 	SwitchTheme,
// } from "@features/setting";
// import {
// 	AlertBody,
// 	AlertDialog,
// 	AlertDialogAction,
// 	AlertDialogCancel,
// 	AlertDialogContent,
// 	AlertDialogDescription,
// 	AlertDialogFooter,
// 	AlertDialogHeader,
// 	AlertDialogTitle,
// 	AlertDialogTrigger,
// } from "@ui-kit/ui/alert-dialog";

// import { Kbd } from "@ui-kit/ui/kbd";

// import { Space } from "@ui-kit/ui/space";

// interface ISettingsModalProps {
// 	children?: React.ReactNode;
// }

// export const SettingModal: React.FC<ISettingsModalProps> = ({ children }) => {
// 	return (
// 		<AlertDialog>
// 			<AlertDialogTrigger
// 				className="cursor-pointer flex items-center gap-3"
// 				asChild
// 			>
// 				{children}
// 			</AlertDialogTrigger>
// 			<AlertDialogContent>
// 				<AlertDialogHeader>
// 					<Kbd className="absolute top-2 right-2">Esc</Kbd>
// 					<AlertDialogTitle>Настройки пользователя</AlertDialogTitle>
// 					<AlertDialogDescription>
// 						Тут вы можете настроить некторые параметры
// 					</AlertDialogDescription>
// 				</AlertDialogHeader>
// 				<AlertBody>
// 					<Space fullWidth align="center" justify="start" axios="col" gap={3}>
// 						<AuthActions />
// 						<SwitchTheme />
// 						<SwitchLanguage />
// 						<SwitchAccentColor />
// 						<SwitchAnimation />
// 					</Space>
// 				</AlertBody>

// 				<AlertDialogFooter>
// 					<AlertDialogCancel>Отмена</AlertDialogCancel>
// 					<AlertDialogAction>Ок</AlertDialogAction>
// 				</AlertDialogFooter>
// 			</AlertDialogContent>
// 		</AlertDialog>
// 	);
// };

"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui-kit/ui/dialog";
import { Button } from "@ui-kit/ui/button";

import { AuthActions } from "@features/auth";

import { Separator } from "@ui-kit/ui/separator"; // если есть у тебя в shadcn
import {
  SwitchAccentColor,
  SwitchAnimation,
  SwitchLanguage,
  SwitchTheme,
} from "@features/setting";

interface SettingModalProps {
  children?: React.ReactNode;
}

export const SettingModal: React.FC<SettingModalProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[460px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative pb-4">
          <DialogTitle className="text-xl font-semibold tracking-tight">
            Настройки
          </DialogTitle>
          {/* Кнопка закрытия справа сверху */}
          <p className="text-sm text-muted-foreground mt-1">
            Персонализация интерфейса и аккаунта
          </p>
        </DialogHeader>

        <div className="space-y-6 py-2">
          {/* Секция 1: Аккаунт / Авторизация */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Аккаунт
            </h3>
            <AuthActions />
          </div>

          <Separator />

          {/* Секция 2: Внешний вид */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Внешний вид
            </h3>
            <div className="grid gap-4">
              <SwitchTheme />
              <SwitchAccentColor />
              <SwitchAnimation />
            </div>
          </div>

          <Separator />

          {/* Секция 3: Язык и регион */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Язык и регион
            </h3>
            <SwitchLanguage />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-6 border-t">
          <Button variant="outline">Отмена</Button>
          <Button>Сохранить</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
