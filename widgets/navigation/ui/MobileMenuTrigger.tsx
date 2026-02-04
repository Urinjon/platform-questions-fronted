// components/navigation/MobileMenuTrigger.tsx
"use client";

import { Button } from "@ui-kit/ui/button";
import { Menu } from "lucide-react";
import { SheetTrigger } from "@ui-kit/ui/sheet";

export function MobileMenuTrigger() {
	return (
		<SheetTrigger asChild className="lg:hidden">
			<Button variant="ghost" size="icon" aria-label="Открыть мобильное меню">
				<Menu className="h-6 w-6" />
			</Button>
		</SheetTrigger>
	);
}
