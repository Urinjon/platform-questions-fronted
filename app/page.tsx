import { HomeHero } from "@widgets/home-hero";
import { Navigation } from "@widgets/navigation";
import * as m from "@/paraglide/messages.js";

export default function HomePage() {
	return (
		<>
			{m.test()}
			{/* {m.settings.title()} */}

			<Navigation />

			<HomeHero />
			{/* <AboutHere /> */}
		</>
	);
}
