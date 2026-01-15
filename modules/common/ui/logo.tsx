import Image from "next/image";

export const Logo: React.FC = () => {
	return (
		<div className="flex items-center justify-center">
			<Image
				src="/logo.png"
				alt="Platform Questions Logo"
				width={32}
				height={32}
			/>
			<span className="text-xl font-bold">Platform Questions</span>
		</div>
	);
};
