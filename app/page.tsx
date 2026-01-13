import { AboutHere, HomeHere } from "@modules/common";
import { BackgroundLines } from "@ui-kit/effects";

export default function HomePage() {
	return (
		<div className="flex flex-col space-y-10">
			<HomeHere />
			<AboutHere />

			<BackgroundLines>Hello world !</BackgroundLines>
		</div>
	);
}
