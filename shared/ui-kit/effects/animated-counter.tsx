import { useEffect, useRef, useState } from "react";

function easeOutExpo(t: number) {
	return t === 1 ? 1 : 1 - 2 ** (-10 * t);
}

interface AnimatedCounterProps {
	from?: number;
	to: number;
	duration?: number;
}

export function AnimatedCounter({
	from = 0,
	to,
	duration = 2000,
}: AnimatedCounterProps) {
	const [value, setValue] = useState(from);
	const rafRef = useRef<number>(null);
	const startRef = useRef<number>(null);

	useEffect(() => {
		startRef.current = null;

		const tick = (ts: number) => {
			if (!startRef.current) startRef.current = ts;
			const elapsed = ts - startRef.current;
			const progress = Math.min(elapsed / duration, 1);
			const eased = easeOutExpo(progress);

			setValue(Math.round(from + (to - from) * eased));

			if (progress < 1) {
				rafRef.current = requestAnimationFrame(tick);
			}
		};

		rafRef.current = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(rafRef.current as number);
	}, [from, to, duration]);

	return <span>{value.toLocaleString("ru")}</span>;
}
