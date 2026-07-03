"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<div className="view-container">
			<section className="relative w-full min-h-screen bg-[#F5F2EE] text-[#1A1A1A] px-6 md:px-10 flex flex-col justify-center items-center overflow-hidden">
				{/* 1. Background Grid & Grain */}
				<div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[url('/noise.png')]" />
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
						backgroundSize: "clamp(40px, 8vw, 80px) clamp(40px, 8vw, 80px)",
					}}
				/>

				{/* 2. Top Bar - Simplified & Personal */}
				<div className="absolute top-24 md:top-15 w-full px-6 md:px-10 flex justify-between items-start font-mono text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.35em] text-[#8C8680] uppercase">
					<div className="flex items-center gap-2">
						<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
						<p>Available for new ideas</p>
					</div>
					<div className="text-right">
						<p>Based in India</p>
						<p className="hidden md:block">Est. MMXXIV</p>
					</div>
				</div>

				{/* 3. Center Text Content - Simplified & Human */}
				<div className="z-10 text-center max-w-5xl px-4">
					<h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] font-medium">
						Building things <br />
						<span className="italic font-light">people love.</span>
					</h1>

					<p className="mt-8 mx-auto max-w-xs md:max-w-md text-base md:text-xl text-[#4a4a4a] font-light leading-relaxed be-vietnam">
						I&apos;m Ravi, a developer who focuses on making the complex feel
						simple. I help founders turn messy ideas into polished products.
					</p>

					<div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8 text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold">
						<Link href="/about" className="group flex items-center gap-2">
							<span>Say Hello</span>
							<span className="group-hover:translate-x-1 transition-transform">
								→
							</span>
						</Link>
						<Link
							href="/work"
							className="opacity-60 hover:opacity-100 transition-opacity"
						>
							My Work
						</Link>
						<a
							href="/ravipande-sde.pdf"
							download="Ravi_Pandey_Resume.pdf"
							className="opacity-60 hover:opacity-100 transition-opacity"
						>
							Resume
						</a>
					</div>
				</div>

				{/* 4. Bottom Bar & Founder Card */}
				<div className="absolute bottom-6 md:bottom-10 w-full px-6 md:px-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0">
					{/* Coordinates (Left) - Kept for that 'pro' feel */}
					<div className="hidden md:block font-mono text-[9px] tracking-[0.35em] text-[#8C8680] leading-loose">
						<p>51.5074° N</p>
						<p>0.1278° W</p>
					</div>

					{/* Personal Card - Hidden headshot reveal */}
					<div className="group relative flex items-center gap-5 bg-white/10 backdrop-blur-sm p-4 border border-black/5 hover:bg-white/60 transition-all duration-500 cursor-pointer rounded-sm">
						<div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden grayscale opacity-100  transition-all duration-700 ease-out rounded-full">
							<Image
								src="/founder-ravi-pandey.png"
								alt="Ravii Pandey"
								fill
								className="object-cover"
							/>
						</div>

						<div className="text-left">
							<p className="text-[9px] uppercase tracking-[0.2em] text-[#8C8680] mb-1">
								Currently thinking about
							</p>
							<p className="text-sm font-medium leading-tight">
								Better User Experiences
							</p>
							<p className="text-[10px] text-black/40 mt-1">
								Click to learn why
							</p>
						</div>
					</div>
				</div>

				{/* Vertical Line Decor */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 md:h-24 bg-gradient-to-b from-black/20 to-transparent" />
			</section>
		</div>
	);
};

export default Header;
