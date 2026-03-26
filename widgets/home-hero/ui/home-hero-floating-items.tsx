"use client";

import { cn } from "@shared/lib/utils";
import { motion } from "motion/react";
import { floatingItems, floatVariants } from "../model/variants";

export function HomeHeroFloatingItems() {
	return (
		<>
			{floatingItems.map((item, i) => (
				<motion.div
					key={item.id}
					variants={floatVariants(item.delay, 6 + i * 0.8, item.y || [-20, 20])}
					animate="float"
					className={cn(
						"absolute hidden lg:flex pointer-events-none",
						item.small ? "scale-75" : "",
					)}
					style={{
						left: `${10 + ((i * 12) % 60)}%`,
						// Чуть ниже, чтобы основной "bлок" выглядел доминирующим
						top: i % 3 === 0 ? "25%" : i % 3 === 1 ? "52%" : "80%",
					}}
				>
					<div
						className={cn(
							"rounded-2xl border border-border/30 bg-card/40 backdrop-blur-xl shadow-xl",
							item.color
								? "text-primary border-primary/30"
								: "text-muted-foreground/70",
							"flex items-center justify-center",
						)}
						style={{ width: i === 2 ? 86 : 72, height: i === 2 ? 96 : 84 }}
					>
						{item.text ? (
							<span
								className={cn(
									"font-bold",
									item.color ? "text-primary" : "text-muted-foreground/70",
								)}
							>
								{item.text}
							</span>
						) : (
							<item.icon className={cn("h-7 w-7")} />
						)}
					</div>
				</motion.div>
			))}
		</>
	);
}
