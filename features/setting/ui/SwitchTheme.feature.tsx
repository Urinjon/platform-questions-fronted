// "use client";

// import { useTheme } from "next-themes";
// import { Moon, Sun } from "lucide-react";
// import { Button } from "@ui-kit/ui/button";
// import React from "react";

// export function SwitchTheme() {
// 	const { theme, setTheme } = useTheme();
// 	const [mounted, setMounted] = React.useState(false);

// 	React.useEffect(() => {
// 		setMounted(true);
// 	}, []);

// 	if (!mounted) {
// 		return null;
// 	}

// 	return (
// 		<Button
// 			variant="outline"
// 			size="icon"
// 			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
// 		>
// 			{theme === "dark" ? <Sun /> : <Moon />}
// 		</Button>
// 	);
// }

"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@ui-kit/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@ui-kit/ui/tooltip";
import React from "react";

export function SwitchTheme() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const isDark = theme === "dark";

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						onClick={() => setTheme(isDark ? "light" : "dark")}
						aria-label={`Переключить на ${isDark ? "светлую" : "тёмную"} тему`}
						className="transition-all hover:scale-105 active:scale-95"
					>
						{isDark ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)}
					</Button>
				</TooltipTrigger>
				<TooltipContent side="right">
					{isDark ? "Светлая тема" : "Тёмная тема"}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
