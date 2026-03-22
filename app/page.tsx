import { HomeHero } from "@widgets/home-hero";
import { Navigation } from "@widgets/navigation";

export default async function HomePage() {
	return (
		<>
			<Navigation />
			<HomeHero />
		</>
	);
}
