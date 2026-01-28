import { AboutHere } from "@widgets/about-here";
import { HomeHere } from "@widgets/home-here";
import { Navigation } from "@widgets/navigation";

export default function HomePage() {
	return (
		<>
			<div className="flex justify-center items-center w-full">
				<Navigation />
			</div>

			<div className="flex flex-col space-y-10">
				<HomeHere />
				<AboutHere />
			</div>
		</>
	);
}
