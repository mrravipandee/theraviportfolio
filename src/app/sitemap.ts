import blogsData from "@/assets/blogs.json";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://raviverse.dev";
	const routes = [
		"",
		"/about",
		"/services",
		"/work",
		"/blog",
		"/contact",
		"/contact/share-profile",
	];

	const staticSitemaps = routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString(),
		changeFrequency: (route === "" ? "weekly" : "monthly") as
			| "weekly"
			| "monthly",
		priority:
			route === ""
				? 1.0
				: route === "/services"
					? 0.9
					: route === "/blog"
						? 0.8
						: route === "/contact/share-profile"
							? 0.8
							: 0.6,
	}));

	const blogSitemaps = blogsData.map((blog) => ({
		url: `${baseUrl}/blog/${blog.slug}`,
		lastModified: new Date(blog.date).toISOString(),
		changeFrequency: "monthly" as const,
		priority: 0.6,
	}));

	return [...staticSitemaps, ...blogSitemaps];
}
