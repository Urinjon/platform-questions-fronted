import { AboutHere } from "@widgets/about-here";
import { HomeHere } from "@widgets/home-here";
import { Navigation } from "@widgets/navigation";

export default function HomePage() {
	return (
		<>
			<Navigation />

			<HomeHere />
			<AboutHere />
		</>
	);
}
