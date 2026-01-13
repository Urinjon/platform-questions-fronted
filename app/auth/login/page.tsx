import { LoginForm } from "@modules/auth";
import { Space } from "@ui-kit/ui/space";

export default function LoginPage() {
	return (
		<Space
			as="section"
			justify="center"
			align="center"
			fullWidth
			fullScreenHeight
		>
			<LoginForm />
		</Space>
	);
}
