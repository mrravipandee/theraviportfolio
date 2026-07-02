"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const About = () => {
	return (
		<section className="view-container py-20 md:py-40 bg-[#F5F2EE] px-6 md:px-10">
			<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
				{/* 1. Left Column: Image/Visual (Editorial Style) */}
				<div className="col-span-12 md:col-span-5 group relative">
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
				<div className="col-span-12 md:col-span-7 md:pl-12">
					<p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#8C8680] mb-6">
						Introduction — Vol. 01
					</p>

					<h2 className="text-4xl md:text-7xl font-medium tracking-tighter leading-none mb-10">
						I build for the <br />
						<span className="italic">next generation.</span>
					</h2>

					<div className="space-y-6 max-w-xl">
						<p className="text-lg md:text-xl text-[#1A1A1A] font-medium leading-tight be-vietnam">
							I&apos;m Ravii Pandey, a Full-Stack Developer and Machine Learning
							enthusiast based in Nashik, India.
						</p>

						<p className="text-sm md:text-base text-[#4a4a4a] leading-relaxed font-light be-vietnam">
							I thrive on helping startups scale by simplifying complex
							technology. Whether it&apos;s crafting seamless web experiences
							with React and Node.js or unlocking AI possibilities with NLP, I’m
							committed to building tools that transform ideas into scalable
							digital realities.
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
							href="https://bento.me/mrravipandee"
							className="text-[11px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-all"
						>
							Connect on Bento
						</Link>
					</div>
				</div>
			</div>

			{/* Center Hairline Decor */}
			<div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
		</section>
	);
};

export default About;
