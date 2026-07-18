import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "About | Ravi Pandey • Software Engineer",
	description:
		"Learn more about Ravi Pandey, a Software Engineer and Full-Stack SDE based in Nashik, India, helping startups scale with clean engineering solutions.",
	alternates: {
		canonical: "/about",
	},
};

const About = () => {
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Ravi Pandey",
		jobTitle: "Software Engineer & Full-Stack Developer",
		url: "https://raviverse.dev",
		image: "https://raviverse.dev/founder-ravi-pandey.png",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Nashik",
			addressRegion: "Maharashtra",
			addressCountry: "India",
		},
		sameAs: [
			"https://github.com/mrravipandee",
			"https://linkedin.com/in/mrravipandee",
			"https://bento.me/mrravipandee",
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD Person Schema
				dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
			/>
			<section className="view-container pt-28 pb-20 md:py-40 bg-[#F5F2EE] px-6 md:px-10">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
					{/* 1. Left Column: Image/Visual (Editorial Style) */}
					<div className="md:col-span-5 group relative">
						<div className="relative aspect-[4/5] overflow-hidden bg-[#E6E2DD]">
							<Image
								src="/founder-ravi-pandey.png"
								alt="Ravii Pandey Profile"
								fill
								className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
								unoptimized
							/>
							{/* Subtle noise/grid overlay to match hero */}
							<div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none" />
						</div>
						{/* Caption for the image */}
						<div className="mt-4 flex justify-between font-mono text-[9px] tracking-[0.2em] text-[#8C8680] uppercase">
							<p>Fig. 02</p>
							<p>Developer Profile / 2026</p>
						</div>
					</div>

					{/* 2. Right Column: Text/Content */}
					<div className="md:col-span-7 md:pl-12">
						<p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#8C8680] mb-6">
							Introduction — Vol. 01
						</p>

						<h2 className="text-3xl md:text-6xl font-medium leading-none mb-10">
							I build products that people remember.<br />
							<span className="italic md:text-6xl text-3xl">Not just websites.</span>
						</h2>

						<div className="space-y-6 max-w-xl">
							<p className="text-lg md:text-xl text-[#1A1A1A] font-medium leading-tight be-vietnam">
								I&apos;m Ravii Pandey — a Full-Stack Developer who enjoys turning messy ideas into products that solve real problems.
							</p>

							<p className="text-sm md:text-base text-[#4a4a4a] leading-relaxed font-light be-vietnam">
								I don't just write code. I obsess over the little details that make software feel fast, intuitive, and enjoyable to use. From developer tools and AI-powered applications to SaaS products, I'm always chasing one goal:
								<span className="block text-lg md:text-xl text-[#1A1A1A] font-medium leading-tight">Build something people genuinely come back to.</span>
								Currently based in Nashik, India, I'm constantly exploring new technologies, contributing to open source, and shipping projects that challenge me to become a better engineer every single day.
							</p>
						</div>

						{/* Metadata & Links */}
						<div className="mt-12 pt-8 border-t border-black/5 flex flex-wrap gap-8 items-center">
							<div className="flex items-center gap-2">
								<span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
								<p className="font-mono text-[10px] tracking-widest uppercase text-[#8C8680]">
									Nashik, India
								</p>
							</div>

							<Link
								target="_blank"
								href="https://raviverse.dev/contact"
								className="text-[11px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-all"
							>
								Let's Connect!
							</Link>
						</div>
					</div>
				</div>

				{/* Center Hairline Decor */}
				<div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
			</section>
		</>
	);
};

export default About;
