import { BackgroundBeams } from "@ui-kit/effects";
import { Space } from "@ui-kit/ui/space";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Space
			as="section"
			justify="center"
			align="center"
			fullWidth
			fullScreenHeight
		>
			<BackgroundBeams />
			{children}
		</Space>
	);
}
