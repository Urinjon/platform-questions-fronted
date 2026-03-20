import { AboutHere } from "@widgets/about-here";
import { HomeHero } from "@widgets/home-hero";
import { Navigation } from "@widgets/navigation";

export default function HomePage() {
	return (
		<>
			<Navigation />

			<HomeHero />
			<AboutHere />
		</>
	);
}
