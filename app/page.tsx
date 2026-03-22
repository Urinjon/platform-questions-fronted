import { m } from "@paraglide/messages";

import { HomeHero } from "@widgets/home-hero";
import { Navigation } from "@widgets/navigation";

export default function HomePage() {
	return (
		<>
			{m.navHome()}
			<Navigation />
			<HomeHero />
		</>
	);
}
