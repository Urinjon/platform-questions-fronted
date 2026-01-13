"use client";

import * as React from "react";
import Link from "next/link";
import { DiamondPlusIcon, HomeIcon, type LucideIcon } from "lucide-react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@ui-kit/ui/navigation-menu";
import { LinkApp } from "@ui-kit/ui/link";

import { NewFeaturesLinks } from "@shared/config/routing.config";

import { Space } from "@ui-kit/ui/space";

import Image from "next/image";

import { SettingModal } from "@modules/common";
import { ImageBackground } from "@ui-kit/ui/image-background";

function useIsMobile() {
	const [isMobile, setIsMobile] = React.useState(false);

	React.useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1024);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return isMobile;
}

export function Navigation() {
	const isMobile = useIsMobile();

	return (
		<NavigationMenu
			viewport={isMobile}
			className="fixed z-50 top-0 bg-primary-foreground/50 backdrop-blur-md w-full p-3 rounded-b-2xl"
		>
			<NavigationMenuList className="flex-wrap pt-2 ">
				<NavigationMenuItem>
					<Image
						src="/logo.png"
						alt="Logo"
						width={60}
						height={60}
						className=""
					/>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<Space gap={1} align="center">
							<HomeIcon />
							Главное
						</Space>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<LinkApp
										className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
										href="/"
									>
										<ImageBackground
											src="/logo.png"
											alt="Logo"
											width={100}
											height={100}
											isBlur
										>
											<div className="mb-2 text-lg font-medium sm:mt-4">
												Platform Questions
											</div>
											<p className="text-muted-foreground text-sm leading-tight">
												Ask questions and get answers from the community.
											</p>
										</ImageBackground>
									</LinkApp>
								</NavigationMenuLink>
							</li>
							<ListItem href="/docs" title="Для кого данная платформа ?">
								Для кого данная платформа
							</ListItem>
							<ListItem
								href="/docs/installation"
								title="Что такое Platform Questions ?"
							>
								Что такое Platform Questions?
							</ListItem>
							<ListItem
								href="/docs/primitives/typography"
								title="Часто задаваемые вопросы ?"
							>
								Часто задаваемые вопросы
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<Space gap={1} align="center">
							<DiamondPlusIcon size={20} />
							Нововведение сайта
						</Space>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{NewFeaturesLinks.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
									icon={component.icon}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem className="hidden md:block">
					<NavigationMenuTrigger>О нас</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[300px] gap-4">
							<li>
								<NavigationMenuLink asChild>
									<Link href="#">
										<div className="font-medium">Components</div>
										<div className="text-muted-foreground">
											Browse all components in the library.
										</div>
									</Link>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<Link href="#">
										<div className="font-medium">Documentation</div>
										<div className="text-muted-foreground">
											Learn how to use the library.
										</div>
									</Link>
								</NavigationMenuLink>
								<NavigationMenuLink asChild>
									<Link href="#">
										<div className="font-medium">Blog</div>
										<div className="text-muted-foreground">
											Read our latest blog posts.
										</div>
									</Link>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<SettingModal />
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

type TListItem = React.ComponentPropsWithoutRef<"li"> & { href: string } & {
	title: string;
	children: React.ReactNode;
	href: string;
	icon?: LucideIcon;
};

function ListItem({ title, children, href, ...props }: TListItem) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<Link href={href}>
					<div className="text-sm leading-none font-medium flex items-center gap-1">
						{title}
					</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
}
