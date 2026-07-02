"use client";

import Link from "next/link";
import React from "react";

const insights = [
	{
		title: "Why Startups?",
		description:
			"I thrive in high-velocity environments where innovation is the baseline. Working with early-stage founders allows for the kind of rapid iteration and bold thinking that defines my engineering philosophy.",
	},
	{
		title: "What I Build",
		description:
			"Specializing in the intersection of scalable full-stack architecture and intelligent automation. I leverage Next.js, Go, and Python to turn complex requirements into clean, production-ready systems.",
	},
	{
		title: "How I Help",
		description:
			"From architecting MVPs to deploying deep-learning recommendation engines—I bridge the gap between abstract ideas and functional digital products that solve real-world problems.",
	},
	{
		title: "Let’s Talk",
		description:
			"Currently open to new collaborations and technical consulting. If you have an idea that needs a structured, scalable foundation, let’s build the future together.",
		href: "/contact",
	},
];

const Collaborate = () => {
	return (
		<section className="view-container my-32 px-6 md:px-10">
			{/* Header Section */}
			<div className="border-b border-black/10 pb-10 mb-16">
				<p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#8C8680] mb-4">
					Inquiry — Vol. 01
				</p>
				<h2 className="text-4xl md:text-7xl font-medium tracking-tighter leading-none">
					Let’s Build Something <br />
					<span className="italic">Together.</span>
				</h2>
			</div>

			{/* Grid Layout */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-x-12 be-vietnam">
				{insights.map((item, index) => (
					<div key={index} className="flex flex-col group">
						{/* Numbering to match the 'Eternal' catalog style */}
						<span className="font-mono text-[10px] text-[#8C8680] mb-6 tracking-widest">
							0{index + 1}
						</span>

						<h3 className="text-xl font-bold tracking-tight mb-4 group-hover:italic transition-all">
							{item.title}
						</h3>

						<p className="text-sm text-[#4a4a4a] leading-relaxed mb-8 font-light">
							{item.description}
						</p>

						{item.href && (
							<Link
								href={item.href}
								className="mt-auto text-[11px] font-bold uppercase tracking-widest border-b border-black w-fit pb-1 hover:opacity-50 transition-opacity"
							>
								Get in touch
							</Link>
						)}
					</div>
				))}
			</div>

			{/* Aesthetic Bottom Line */}
			<div className="mt-24 w-full h-px bg-gradient-to-r from-black/20 via-black/5 to-transparent" />
		</section>
	);
};

export default Collaborate;
