// components/navigation/DesktopNav.tsx
"use client";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@ui-kit/ui/navigation-menu";
import { Home, Sparkles } from "lucide-react";
import { NewFeaturesLinks } from "@shared/config/routing.config";
import { ListItem } from "./ListItem";

export function DesktopNav() {
	return (
		<NavigationMenu className="hidden lg:flex">
			<NavigationMenuList className="gap-1.5">
				<NavigationMenuItem>
					<NavigationMenuTrigger className="gap-2 px-4 text-sm font-medium">
						<Home className="h-4 w-4" />
						Главное
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-4 p-6 md:w-[520px] lg:w-[620px] lg:grid-cols-[.7fr_1fr]">
							<li className="row-span-3">
								<a
									className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br from-muted/40 to-muted/80 p-6 no-underline outline-none focus:shadow-lg"
									href="/"
								>
									<div className="mb-3 text-lg font-semibold">
										Platform Questions
									</div>
									<p className="text-sm leading-tight text-muted-foreground">
										Задавайте вопросы. Получайте ответы от сообщества.
									</p>
								</a>
							</li>
							<ListItem href="/about" title="Для кого платформа?">
								Кому будет полезна эта платформа
							</ListItem>
							<ListItem href="/what-is" title="Что такое Platform Questions?">
								Краткое описание проекта
							</ListItem>
							<ListItem href="/faq" title="Часто задаваемые вопросы">
								Ответы на популярные вопросы
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger className="gap-2 px-4 text-sm font-medium">
						<Sparkles className="h-4 w-4" />
						Нововведения
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[520px] gap-4 p-6 md:w-[620px] md:grid-cols-2 lg:w-[720px]">
							{NewFeaturesLinks.map((item) => (
								<ListItem
									key={item.href}
									title={item.title}
									href={item.href}
									icon={item.icon}
								>
									{item.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
