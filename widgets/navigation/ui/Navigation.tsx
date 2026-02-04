"use client";

import { cn } from "@shared/lib/utils";
import { Sheet } from "@ui-kit/ui/sheet";
import { SettingModal } from "../../setting";
import { HeaderAuth } from "@features/auth/actions";
import { Button } from "@ui-kit/ui/button";
import { Settings } from "lucide-react";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileMenuTrigger } from "./MobileMenuTrigger";
import { MobileMenu } from "./MobileMenu";
import { useState, useEffect } from "react";

export function Navigation() {
	const [openMobile, setOpenMobile] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<header
				className={cn(
					"fixed inset-x-3 top-3 z-50 mx-auto max-w-7xl transition-all duration-300",
					scrolled ? "scale-[0.98] opacity-95" : "scale-100 opacity-100",
					"rounded-2xl border border-white/15 bg-white/35 dark:bg-black/35",
					"backdrop-blur-2xl backdrop-saturate-180",
					"shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.6)]",
				)}
			>
				<div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
					<Logo />

					<DesktopNav />

					<div className="flex items-center gap-2.5">
						<SettingModal>
							<Button
								variant="ghost"
								size="icon"
								className="hidden md:flex transition-transform hover:scale-110"
								aria-label="Открыть настройки"
							>
								<Settings className="h-5 w-5" />
							</Button>
						</SettingModal>

						<div className="hidden md:block">
							<HeaderAuth />
						</div>

						<Sheet open={openMobile} onOpenChange={setOpenMobile}>
							<MobileMenuTrigger />
							<MobileMenu onClose={() => setOpenMobile(false)} />
						</Sheet>
					</div>
				</div>
			</header>

			<div className="h-[76px]" />
		</>
	);
}
