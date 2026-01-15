import { AboutHere, HomeHere } from "@modules/common";
import { Navigation } from "@shared/widgets/Navigation.widget";

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
