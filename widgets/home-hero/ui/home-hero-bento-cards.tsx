"use client";

import { motion } from "motion/react";

import { itemVariants } from "../model/variants";

import { HomeHeroCategory } from "./home-hero-category";
import { HomeHeroCounterQuestions } from "./home-hero-counter-question";

export function HomeHeroBentoCards() {
	return (
		<motion.div
			variants={itemVariants}
			className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 auto-rows-fr lg:translate-y-6"
		>
			<HomeHeroCategory />

			<HomeHeroCounterQuestions />
		</motion.div>
	);
}
