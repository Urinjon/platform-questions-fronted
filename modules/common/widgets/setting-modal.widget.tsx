"use client";

import { SwitchTheme } from "@shared/features/SwitchTheme.feature";
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
import { Button } from "@ui-kit/ui/button";
import { Kbd } from "@ui-kit/ui/kbd";
import { Label } from "@ui-kit/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@ui-kit/ui/select";
import { Space } from "@ui-kit/ui/space";
import { Switch } from "@ui-kit/ui/switch";
import {
	EclipseIcon,
	LanguagesIcon,
	LaptopMinimalCheckIcon,
	PaintbrushVerticalIcon,
	SettingsIcon,
} from "lucide-react";

export const SettingModal: React.FC = () => {
	return (
		<AlertDialog>
			<AlertDialogTrigger className="cursor-pointer">
				<SettingsIcon />
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
					<Space align="center" axios="col" gap={3}>
						<Space gap={3}>
							<Button variant={"outline"}>Войти</Button>
							<Button variant={"default"}>Зарегистрироваться</Button>
							<SwitchTheme />
						</Space>

						<Space align="center" gap={3}>
							<LanguagesIcon /> Языки:
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Выберети язык" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>
											<Space align="center" gap={3}>
												<LanguagesIcon size={16} /> Языки:
											</Space>
										</SelectLabel>
										<SelectItem value="ru">RU</SelectItem>
										<SelectItem value="en">EN</SelectItem>
										<SelectItem value="uz">UZ</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</Space>

						<Space align="center" gap={3}>
							<Space>
								<PaintbrushVerticalIcon /> Акцент цвета:
							</Space>
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Выберите цвет" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>
											<Space align="center" gap={3}>
												<PaintbrushVerticalIcon size={16} /> Акценты:
											</Space>
										</SelectLabel>
										<SelectItem value="color-classic">
											<EclipseIcon color="black" />
											Классический
										</SelectItem>
										<SelectItem value="color-green">
											<EclipseIcon color="green" />
											Зелёный
										</SelectItem>
										<SelectItem value="color-blue">
											<EclipseIcon color="blue" />
											Синий
										</SelectItem>
										<SelectItem value="color-orange">
											<EclipseIcon color="orange" />
											Оранжевый
										</SelectItem>
										<SelectItem value="color-rose">
											<EclipseIcon color="rose" />
											Розовый
										</SelectItem>
										<SelectItem value="color-violet">
											<EclipseIcon color="violet" />
											Фиолетовый
										</SelectItem>
										<SelectItem value="color-yellow">
											<EclipseIcon color="yellow" />
											Желтый
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</Space>

						<Space align="center" gap={3}>
							<Label htmlFor="is-animated">
								<LaptopMinimalCheckIcon /> вкл/выкл анимации
							</Label>
							<Switch id="is-animated" />
						</Space>
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
