// components/navigation/MobileMenu.tsx
"use client";

import {
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetClose,
} from "@ui-kit/ui/sheet";
import { Button } from "@ui-kit/ui/button";
import { X, Home, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NewFeaturesLinks } from "@shared/config/routing.config";
import { SettingModal } from "../../setting";
import { HeaderAuth } from "@features/auth/actions";

type MobileMenuProps = {
	onClose: () => void;
};

export function MobileMenu({ onClose }: MobileMenuProps) {
	return (
		<SheetContent
			side="left"
			className="w-[85vw] max-w-sm border-r bg-background/95 backdrop-blur-lg"
		>
			<SheetHeader className="mb-6 flex flex-row items-center justify-between">
				<SheetTitle className="text-xl font-semibold">Меню</SheetTitle>
				<SheetClose asChild>
					<Button variant="ghost" size="icon" aria-label="Закрыть меню">
						<X className="h-5 w-5" />
					</Button>
				</SheetClose>
			</SheetHeader>

			<div className="flex flex-col gap-6">
				<Link
					href="/"
					className="flex items-center gap-3 text-xl font-semibold transition-colors hover:text-primary"
					onClick={onClose}
				>
					<Image
						src="/logo.png"
						alt="Platform Questions logo"
						width={52}
						height={52}
						className="rounded-2xl shadow-md"
					/>
					Platform Questions
				</Link>

				<nav className="flex flex-col gap-1.5">
					<Link
						href="/"
						className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-all hover:bg-accent hover:pl-5"
						onClick={onClose}
					>
						<Home className="h-5 w-5" />
						Главное
					</Link>

					{NewFeaturesLinks.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-all hover:bg-accent hover:pl-5"
							onClick={onClose}
						>
							{item.icon && <item.icon className="h-5 w-5" />}
							{item.title}
						</Link>
					))}

					<div className="mt-6 border-t pt-6">
						<SettingModal>
							<Button
								variant="outline"
								className="w-full justify-start gap-3 py-6 text-base"
							>
								<Settings className="h-5 w-5" />
								Настройки
							</Button>
						</SettingModal>

						<div className="mt-4">
							<HeaderAuth />
						</div>
					</div>
				</nav>
			</div>
		</SheetContent>
	);
}
