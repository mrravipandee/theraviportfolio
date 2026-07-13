"use client";

import { projects } from "@/assets/projects";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
	const reversedProjects = [...projects].reverse();
	return (
		// 1. Changed mt-32 to pt-48 to give the Navbar ample breathing room
		// 2. Used bg-[#F5F2EE] to match your overall theme
		<section className="view-container pt-48 md:pt-64 mb-40 px-6 md:px-10 min-h-screen bg-[#F5F2EE]">
			{/* Editorial Header */}
			<div className="border-b border-black/10 pb-12 mb-24">
				<p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#8C8680] mb-6">
					Index — 2024 / 2026
				</p>
				<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-none">
					All{" "}
					<span className="italic font-light text-[#1A1A1A]">Products.</span>
				</h1>
			</div>

			{/* Vertical Catalog Layout */}
			<div className="flex flex-col gap-40">
				{reversedProjects.map((project, index) => (
					<div
						key={project.id || index}
						className="group flex flex-col md:flex-row gap-12 md:gap-24 items-start"
					>
						{/* Project Metadata (Left) */}
						<div className="w-full md:w-1/3 space-y-8 order-2 md:order-1">
							<div className="flex justify-between items-baseline border-b border-black/10 pb-4">
								<span className="font-mono text-[11px] text-[#8C8680]">
									{`0${index + 1}`}
								</span>
								<span className="font-mono text-[10px] tracking-widest text-[#8C8680] uppercase">
									{project.scope || "Development"}
								</span>
							</div>

							<div>
								<h2 className="text-4xl md:text-5xl font-bold tracking-tight group-hover:italic transition-all duration-500 text-[#1A1A1A]">
									{project.title}
								</h2>
								{project.tagline && (
									<p className="text-[12px] font-bold text-[#8C8680] uppercase tracking-widest mt-2">
										{project.tagline}
									</p>
								)}
							</div>

							<p className="text-sm md:text-base text-[#4a4a4a] leading-relaxed font-light">
								{project.description}
							</p>

							{project.technologies && (
								<div className="flex flex-wrap gap-2 pt-4">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="text-[10px] font-mono border border-black/10 px-2 py-1 uppercase tracking-tighter text-[#8C8680]"
										>
											{tech}
										</span>
									))}
								</div>
							)}

							<div className="pt-8 flex gap-8 text-[11px] font-bold uppercase tracking-widest">
								<Link
									href={project.sourceLink}
									target="_blank"
									className="border-b-2 border-black pb-1 hover:opacity-50 transition-all"
								>
									GitHub Repository
								</Link>
								{project.liveLink && project.liveLink !== "#" && (
									<Link
										href={project.liveLink}
										target="_blank"
										className="border-b border-black/20 pb-1 hover:border-black transition-all"
									>
										Live Demo
									</Link>
								)}
							</div>
						</div>

						{/* Project Visual (Right) */}
						<div className="w-full md:w-2/3 order-1 md:order-2">
							<div className="relative aspect-[16/10] overflow-hidden bg-[#E6E2DD] border border-black/5">
								<Image
									src={project.image}
									alt={project.title}
									fill
									sizes="(max-width: 768px) 100vw, 66vw"
									className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100 opacity-90 group-hover:opacity-100"
								/>
								<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Footer Navigation */}
			<div className="mt-48 pt-12 border-t border-black/5 flex justify-between items-center font-mono text-[11px] text-[#8C8680] uppercase tracking-[0.2em]">
				<p>© MMXXVI RAVII PANDEY</p>
				<Link
					href="/"
					className="hover:text-black transition-colors flex items-center gap-2"
				>
					<span>←</span> Back to Overview
				</Link>
			</div>
		</section>
	);
};

export default Work;
