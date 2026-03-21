import { m } from "@paraglide/messages";
import { getServerLocale } from "@shared/lib/get-locale-server";
import { HomeHero } from "@widgets/home-hero";
import { Navigation } from "@widgets/navigation";

export default async function HomePage() {
	await getServerLocale();

	return (
		<>
			<Navigation />

			<HomeHero
				titlept1={m.heroTitlePt1()}
				titlept2={m.heroTitlePt2()}
				description={m.heroDescription()}
			/>
			{/* <AboutHere /> */}
		</>
	);
}
