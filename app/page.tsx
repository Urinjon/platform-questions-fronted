import { getServerLocale } from "@shared/lib/get-locale-server";
import { HomeHero } from "@widgets/home-hero";
import { Navigation } from "@widgets/navigation";

export default async function HomePage() {
	await getServerLocale();

	return (
		<>
			<Navigation />

			<HomeHero />
			{/* <AboutHere /> */}
		</>
	);
}
