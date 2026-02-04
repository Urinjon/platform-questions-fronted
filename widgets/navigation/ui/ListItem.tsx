// components/navigation/ListItem.tsx
"use client";

import { cn } from "@shared/lib/utils";
import { NavigationMenuLink } from "@ui-kit/ui/navigation-menu";
import type { LucideIcon } from "lucide-react";
import React from "react";

type ListItemProps = {
	title: string;
	children: React.ReactNode;
	href: string;
	icon?: LucideIcon;
} & React.ComponentPropsWithoutRef<"a">;

export const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
	({ className, title, children, href, icon: Icon, ...props }, ref) => (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					href={href}
					className={cn(
						"group block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-250",
						"hover:bg-accent/60 hover:shadow-md hover:-translate-y-0.5",
						"focus-visible:bg-accent/70 focus-visible:ring-2 focus-visible:ring-ring",
						className,
					)}
					{...props}
				>
					<div className="flex items-center gap-2.5 text-sm font-medium leading-none">
						{Icon && (
							<Icon className="h-4.5 w-4.5 opacity-90 transition-transform group-hover:scale-110" />
						)}
						{title}
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground/90">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	),
);

ListItem.displayName = "ListItem";
