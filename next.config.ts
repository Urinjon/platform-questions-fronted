import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	turbopack: {
		root: __dirname,
		resolveAlias: {
			"@paraglide/runtime": "./paraglide/runtime.js",
			"@paraglide/messages": "./paraglide/messages.js",
			"@paraglide/server": "./paraglide/server.js",
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
