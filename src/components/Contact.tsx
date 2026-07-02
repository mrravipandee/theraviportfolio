"use client";

import contactBanner from "@/assets/contact_banner.jpg";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
	return (
		<div className="view-container">
			<section className="relative w-full py-20 md:py-40 flex flex-col items-center justify-center overflow-hidden bg-[#F5F2EE]">
				{/* Background Accent - Very subtle crop of your banner */}
				<div className="absolute inset-0 opacity-[0.03] grayscale pointer-events-none">
					<Image
						src={contactBanner}
						alt="Background Texture"
						fill
						className="object-cover"
					/>
				</div>

				{/* The "Big Statement" Header */}
				<div className="z-10 text-center px-6">
					<p className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#8C8680] mb-8 md:mb-12">
						Status — Available for 2026
					</p>

					<h2 className="text-5xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.85] mb-16 italic">
						Interested in <br />
						<span className="not-italic">working together?</span>
					</h2>

					{/* Action Links */}
					<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
						<Link
							href="mailto:imravipanday@gmail.com"
							className="text-xl md:text-2xl font-semibold border-b-2 border-black pb-2 hover:opacity-50 transition-all"
						>
							Say Hello
						</Link>

						<Link
							href="https://bento.me/mrravipandee"
							target="_blank"
							className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] font-bold text-[#8C8680] hover:text-black transition-colors"
						>
							Other options
							<span className="group-hover:translate-x-2 transition-transform duration-300">
								→
							</span>
						</Link>
					</div>
				</div>

				{/* Bottom Metadata - Matches the Header Style */}
				<div className="absolute bottom-10 w-full px-10 hidden md:flex justify-between font-mono text-[9px] tracking-[0.3em] text-[#8C8680] uppercase">
					<p>Get in touch</p>
					<p>© MMXXVI Ravi Pandey</p>
					<p>Nashik, IN</p>
				</div>

				{/* Decorative Hairline */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-black/5" />
			</section>
		</div>
	);
};

export default Contact;
