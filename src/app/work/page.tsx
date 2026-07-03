import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../assets/projects";

export const metadata: Metadata = {
	title: "Projects | Ravi Pandey • Software Engineer",
	description:
		"Explore a catalog of full-stack web applications, SaaS platforms, and backend architectures built by Ravi Pandey.",
	alternates: {
		canonical: "/work",
	},
};

const Work = () => {
	const projectListSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Ravi Pandey's Portfolio Projects",
		description:
			"A showcase of software engineering projects built by Ravi Pandey.",
		itemListElement: projects.map((project, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: {
				"@type": "CreativeWork",
				name: project.title,
				description: project.description,
				genre: project.scope,
				programmingLanguage: project.technologies,
				url: project.sourceLink || "https://devravipandey.in/work",
			},
		})),
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD ItemList Schema
				dangerouslySetInnerHTML={{ __html: JSON.stringify(projectListSchema) }}
			/>
			<section className="view-container mt-32 mb-40 px-6 md:px-10">
				{/* Editorial Header */}
				<div className="border-b border-black/10 pb-12 mb-20">
					<p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#8C8680] mb-4">
						Index — 2024 / 2026
					</p>
					<h1 className="text-5xl md:text-8xl font-medium tracking-tighter leading-none">
						All <span className="italic font-light">Projects.</span>
					</h1>
				</div>

				{/* Vertical Catalog Layout */}
				<div className="flex flex-col gap-24">
					{projects.map((project, index) => (
						<div
							key={project.id}
							className="group flex flex-col md:flex-row gap-10 md:gap-20 items-start"
						>
							{/* Project Metadata (Left) */}
							<div className="w-full md:w-1/3 space-y-6 order-2 md:order-1">
								<div className="flex justify-between items-baseline border-b border-black/10 pb-4">
									<span className="font-mono text-[10px] text-[#8C8680]">
										{index < 9 ? `0${index + 1}` : index + 1}
									</span>
									<span className="font-mono text-[9px] tracking-widest text-[#8C8680] uppercase">
										{project.scope || "Development"}
									</span>
								</div>

								<h2 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:italic transition-all duration-500">
									{project.title}
								</h2>

								<p className="text-sm md:text-base text-[#4a4a4a] leading-relaxed font-light">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 pt-4">
									{project.technologies?.map((tech, i) => (
										<span
											key={tech}
											className="text-[10px] font-mono border border-black/10 px-2 py-1 uppercase tracking-tighter text-[#8C8680]"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="pt-6 flex gap-8 text-[11px] font-bold uppercase tracking-widest">
									<Link
										href={project.liveLink || "#"}
										target="_blank"
										className="border-b border-black pb-1 hover:opacity-50 transition-opacity"
									>
										Live View
									</Link>
									<Link
										href={project.sourceLink || "#"}
										target="_blank"
										className="border-b border-black/20 pb-1 hover:border-black transition-all"
									>
										GitHub
									</Link>
								</div>
							</div>

							{/* Project Visual (Right) */}
							<div className="w-full md:w-2/3 order-1 md:order-2">
								<div className="relative aspect-[16/9] overflow-hidden bg-[#E6E2DD]">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
									/>
									<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Footer Navigation */}
				<div className="mt-32 pt-10 border-t border-black/5 flex justify-between items-center font-mono text-[10px] text-[#8C8680] uppercase tracking-[0.2em]">
					<p>© MMXXVI</p>
					<Link href="/" className="hover:text-black transition-colors">
						Back to Home
					</Link>
				</div>
			</section>
		</>
	);
};

export default Work;
