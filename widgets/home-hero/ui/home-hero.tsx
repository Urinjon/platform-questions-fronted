"use client";

import { BackgroundLines } from "@ui-kit/effects";
import { AnimationHero } from "./animation-hero";
import { containerVariants } from "../model/variants";
import { HomeHeroMainCard } from "./home-hero-main-card";
import { HomeHeroBentoCards } from "./home-hero-bento-cards";
import { motion } from "motion/react";

export const HomeHero: React.FC = () => (
	<header className="relative min-h-[100vh] w-full overflow-hidden bg-background antialiased">
		<BackgroundLines>
			<AnimationHero />

			<div className="relative z-10 container px-5 md:px-8 max-w-7xl mx-auto py-10 md:py-12">
				<motion.div
					className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-fr items-stretch"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<HomeHeroMainCard />
					<HomeHeroBentoCards />
				</motion.div>
			</div>
		</BackgroundLines>
	</header>
);
