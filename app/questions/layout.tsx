import { Container } from "@shared/widgets/Container.widget";
import { Space } from "@ui-kit/ui/space";
import { Spotlight } from "@ui-kit/effects";

export default function QuestionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Space as="main" align="center" fullScreenHeight>
			<Spotlight />
			<Container>{children}</Container>
		</Space>
	);
}
