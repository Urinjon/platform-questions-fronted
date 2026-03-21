// components/navigation/DesktopNav.tsx
"use client";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@ui-kit/ui/navigation-menu";
import { HomeIcon } from "lucide-react";

import { ListItem } from "./ListItem";
import { cn } from "@shared/lib/utils";

import Link from "next/link";

interface DesktopNavProps {
	navHomeLabel: string;
	helpLinks: { title: string; href: string }[];
}

export function DesktopNav({ navHomeLabel, helpLinks }: DesktopNavProps) {
	return (
		<NavigationMenu className="hidden lg:flex">
			<NavigationMenuList className="gap-1.5">
				<NavigationMenuItem>
					<NavigationMenuTrigger className="gap-2 px-4 text-sm font-medium">
						<HomeIcon className="h-4 w-4" />
						{navHomeLabel}
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-4 p-6 md:w-[520px] lg:w-[620px] lg:grid-cols-[.7fr_1fr]">
							<li className="row-span-3">
								<Link
									className={cn(
										"flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br",
										"from-muted/40 to-muted/80 p-6 no-underline outline-none focus:shadow-lg",
										"flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-br",
										"from-muted/40 to-muted/80 p-6 no-underline outline-none focus:shadow-lg",
										"bg-cover",
									)}
									style={{ backgroundImage: 'url("/logo.png")' }}
									href="/"
								/>
							</li>

							{helpLinks.map((link) => (
								<ListItem key={link.title} href={link.href} title={link.title}>
									{link.title}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
