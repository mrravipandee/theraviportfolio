import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Ravi Pandey Portfolio",
		short_name: "Ravi Pandey",
		description:
			"Ravi Pandey is a Software Engineer & Full-Stack SDE focused on scalable web apps and machine learning.",
		start_url: "/",
		display: "standalone",
		background_color: "#F5F2EE",
		theme_color: "#1A1A1A",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
			{
				src: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
	};
}
