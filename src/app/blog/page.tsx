import blogsData from "@/assets/blogs.json";
import BlogListClient from "@/components/BlogListClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog | Ravi Pandey • Software Engineer",
	description:
		"Thoughts on software engineering, web application scalability, Next.js optimization, and local machine learning integrations.",
	alternates: {
		canonical: "/blog",
	},
	openGraph: {
		title: "Blog | Ravi Pandey • Software Engineer",
		description:
			"Thoughts on software engineering, web application scalability, Next.js optimization, and local machine learning integrations.",
		url: "https://raviverse.dev/blog",
		siteName: "Ravi Pandey Portfolio",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog | Ravi Pandey • Software Engineer",
		description:
			"Thoughts on software engineering, web application scalability, Next.js optimization, and local machine learning integrations.",
		creator: "@mrravipandee",
	},
};

const BlogPage = () => {
	const blogSchema = {
		"@context": "https://schema.org",
		"@type": "Blog",
		name: "Ravi Pandey - Tech Blog",
		description:
			"Technical insights, guides, and tutorials on Full-Stack Development and AI integration by Ravi Pandey.",
		publisher: {
			"@type": "Person",
			name: "Ravi Pandey",
		},
		url: "https://raviverse.dev/blog",
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD Blog Schema
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(blogSchema),
				}}
			/>
			<BlogListClient blogs={blogsData} />
		</>
	);
};

export default BlogPage;
