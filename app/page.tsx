import { AboutHere, HomeHere } from "@modules/common";
import { BackgroundLines } from "@shared/ui/background-lines";

export default function HomePage() {
	return (
		<div className="flex flex-col space-y-10">
			<HomeHere />
			<AboutHere />

			<BackgroundLines>Hello world !</BackgroundLines>
		</div>
	);
}
