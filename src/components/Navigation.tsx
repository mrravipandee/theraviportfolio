"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "Work", href: "/work" },
		{ name: "About", href: "/about" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<nav className="absolute top-0 left-0 w-full px-6 md:px-10 py-8 flex justify-between items-center z-50">
			{/* LOGO */}
			<Link href="/" className="z-50 transition-opacity hover:opacity-70">
				<Image
					src="/raviverse-dev.svg"
					alt="Ravi Pandey Logo"
					width={100}
					height={40}
					className="w-24 md:w-[120px]"
				/>
			</Link>

			{/* DESKTOP NAV LINKS */}
			<div className="hidden md:flex gap-10 font-mono text-[11px] tracking-[0.3em] uppercase text-[#1A1A1A]">
				{navLinks.map((link) => (
					<Link
						key={link.name}
						href={link.href}
						className="hover:opacity-50 transition"
					>
						{link.name}
					</Link>
				))}
			</div>

			{/* MOBILE HAMBURGER BUTTON */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="md:hidden z-50 flex flex-col gap-1.5 p-2"
				aria-label="Toggle Menu"
			>
				<div
					className={`w-6 h-[1px] bg-black transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
				/>
				<div
					className={`w-6 h-[1px] bg-black transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
				/>
				<div
					className={`w-6 h-[1px] bg-black transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
				/>
			</button>

			{/* MOBILE MENU OVERLAY */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="fixed inset-0 bg-[#F5F2EE] flex flex-col items-center justify-center z-40 md:hidden"
					>
						<div className="flex flex-col gap-8 text-center">
							{navLinks.map((link, i) => (
								<motion.div
									key={link.name}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.1 }}
								>
									<Link
										href={link.href}
										onClick={() => setIsOpen(false)}
										className="text-2xl font-medium tracking-widest uppercase hover:italic transition-all"
									>
										{link.name}
									</Link>
								</motion.div>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navigation;
