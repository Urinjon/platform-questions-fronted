import Image from "next/image";

export const Logo: React.FC = () => {
	return (
		<div className="flex items-center justify-center">
			<Image
				src="/logo.png"
				alt="Aiautomation. PQ Logo"
				width={32}
				height={32}
			/>
			<span className="text-xl font-bold">Aiautomation. PQ</span>
		</div>
	);
};
