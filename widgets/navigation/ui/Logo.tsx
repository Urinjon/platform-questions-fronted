"use client";

import Link from "next/link";
import Image from "next/image";

export function Logo() {
	return (
		<Link
			href="/"
			className="flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-100"
		>
			<div className="relative size-9 overflow-hidden rounded-xl border border-white/25 shadow-inner">
				<Image
					src="/logo.png"
					alt="Platform Questions logo"
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority
				/>
			</div>
			<span className="hidden font-semibold tracking-tight md:inline-block">
				Platform Questions
			</span>
		</Link>
	);
}
