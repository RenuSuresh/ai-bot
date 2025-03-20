import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	trailingSlash: true, // Optional: Add trailing slashes to URLs
	async headers() {
		return [
			{
				source: "/_next/static/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},
};

export default nextConfig;
