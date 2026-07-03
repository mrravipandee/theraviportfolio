import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://devravipandey.in";
	const routes = ["", "/about", "/work", "/contact", "/contact/share-profile"];

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString(),
		changeFrequency: route === "" ? "weekly" : "monthly",
		priority:
			route === "" ? 1.0 : route === "/contact/share-profile" ? 0.8 : 0.6,
	}));
}
