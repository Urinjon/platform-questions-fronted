// components/navigation/MobileMenu.tsx
"use client";

import { SheetContent } from "@ui-kit/ui/sheet";
import { Button } from "@ui-kit/ui/button";
import { HomeIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
			<div className="flex flex-col gap-6">
				<Link
					href="/"
					className="flex items-center gap-3 text-xl font-semibold transition-colors hover:text-primary"
					onClick={onClose}
				>
					<Image
						src="/logo.png"
						alt="Aiautomation. PQ logo"
						width={52}
						height={52}
						className="rounded-2xl shadow-md"
					/>
					Aiautomation. PQ
				</Link>

				<nav className="flex flex-col gap-1.5">
					<Link
						href="/"
						className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-all hover:bg-accent hover:pl-5"
						onClick={onClose}
					>
						<HomeIcon className="h-5 w-5" />
						Главное
					</Link>

					<div className="mt-6 border-t pt-6">
						<SettingModal>
							<Button
								variant="outline"
								className="w-full justify-start gap-3 py-6 text-base"
							>
								<SettingsIcon className="h-5 w-5" />
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
