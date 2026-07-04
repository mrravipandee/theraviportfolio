import blogsData from "@/assets/blogs.json";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	return blogsData.map((blog) => ({
		slug: blog.slug,
	}));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const resolvedParams = await params;
	const blog = blogsData.find((b) => b.slug === resolvedParams.slug);

	if (!blog) {
		return {
			title: "Post Not Found | Ravi Pandey",
		};
	}

	return {
		title: `${blog.title} | Ravi Pandey`,
		description: blog.description,
		alternates: {
			canonical: `/blog/${blog.slug}`,
		},
		openGraph: {
			title: `${blog.title} | Ravi Pandey`,
			description: blog.description,
			url: `https://raviverse.dev/blog/${blog.slug}`,
			type: "article",
			publishedTime: blog.date,
			authors: ["Ravi Pandey"],
		},
		twitter: {
			card: "summary_large_image",
			title: `${blog.title} | Ravi Pandey`,
			description: blog.description,
		},
	};
}

export default async function BlogPostPage({ params }: PageProps) {
	const resolvedParams = await params;
	const blog = blogsData.find((b) => b.slug === resolvedParams.slug);

	if (!blog) {
		notFound();
	}

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "TechArticle",
		headline: blog.title,
		description: blog.description,
		datePublished: blog.date,
		author: {
			"@type": "Person",
			name: "Ravi Pandey",
			url: "https://raviverse.dev",
		},
		publisher: {
			"@type": "Organization",
			name: "Ravi Pandey Portfolio",
			logo: {
				"@type": "ImageObject",
				url: "https://raviverse.dev/founder-ravi-pandey.png",
			},
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `https://raviverse.dev/blog/${blog.slug}`,
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD TechArticle Schema
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(articleSchema),
				}}
			/>
			<article className="view-container pt-36 md:pt-48 pb-20 md:pb-40 px-6 md:px-10 min-h-screen bg-[#F5F2EE]">
				{/* Back button */}
				<div className="mb-12">
					<Link
						href="/blog"
						className="font-mono text-xs text-[#8C8680] hover:text-black transition-colors flex items-center gap-2 uppercase tracking-widest"
					>
						<span>←</span> Back to articles
					</Link>
				</div>

				{/* Header Section */}
				<div className="border-b border-black/10 pb-10 mb-12">
					<div className="flex flex-wrap gap-4 items-center mb-6 font-mono text-[10px] text-[#8C8680] uppercase tracking-wider">
						<span className="border border-black/10 px-2 py-0.5 bg-white/40 text-black">
							{blog.category}
						</span>
						<span>•</span>
						<span>{blog.date}</span>
						<span>•</span>
						<span>{blog.readingTime}</span>
					</div>

					<h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-[#1A1A1A]">
						{blog.title}
					</h1>

					<p className="mt-6 text-base md:text-lg text-[#8C8680] font-light leading-relaxed max-w-3xl italic">
						{blog.description}
					</p>
				</div>

				{/* Body Content */}
				<div className="max-w-3xl mx-auto">
					<div
						className="blog-content text-sm md:text-base text-[#4a4a4a] leading-relaxed font-light be-vietnam space-y-6"
						// biome-ignore lint/security/noDangerouslySetInnerHtml: Trusted HTML from local JSON file
						dangerouslySetInnerHTML={{ __html: blog.content }}
					/>
				</div>
			</article>
		</>
	);
}
