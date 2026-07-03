"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
	Check,
	Copy,
	Github,
	Globe,
	Linkedin,
	MessageSquare,
	Phone,
	Share2,
	X,
	Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Easily customizable YouTube video ID
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

const ShareProfileClient = () => {
	const [showOptions, setShowOptions] = useState(false);
	const [copied, setCopied] = useState(false);
	const [toastMessage, setToastMessage] = useState("");

	const phoneNumber = "+91 70585 48204";
	const rawPhoneNumber = "+917058548204";

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(phoneNumber);
			setCopied(true);
			showToast("Phone number copied to clipboard!");
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
			showToast("Failed to copy number.");
		}
	};

	const showToast = (message: string) => {
		setToastMessage(message);
		setTimeout(() => {
			setToastMessage("");
		}, 3000);
	};

	const shareProfile = async () => {
		if (typeof navigator !== "undefined" && navigator.share) {
			try {
				await navigator.share({
					title: "Ravi Pandey | Full-Stack SDE",
					text: "Connect with Ravi Pandey — Software Engineer & Full-Stack Developer",
					url: window.location.href,
				});
			} catch (err) {
				console.error("Error sharing:", err);
			}
		} else {
			try {
				await navigator.clipboard.writeText(window.location.href);
				showToast("Profile link copied to clipboard!");
			} catch (err) {
				console.error("Failed to copy link:", err);
			}
		}
	};

	return (
		<section className="min-h-screen bg-[#F5F2EE] text-[#1A1A1A] relative flex flex-col justify-start items-center px-4 py-16 overflow-hidden">
			{/* Background Texture & Noise */}
			<div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

			<div className="w-full max-w-md mx-auto space-y-8 z-10">
				{/* Profile Card Header */}
				<div className="text-center space-y-4">
					{/* Circular Profile Picture */}
					<div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border border-black/10 shadow-lg group">
						<Image
							src="/founder-ravi-pandey.png"
							alt="Ravi Pandey"
							fill
							className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
							unoptimized
						/>
						{/* Pulsing Available status indicator */}
						<span className="absolute bottom-1 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-[#F5F2EE] animate-pulse" />
					</div>

					<div className="space-y-1">
						<h1 className="text-2xl font-bold tracking-tight">Ravi Pandey</h1>
						<p className="text-xs font-mono tracking-widest uppercase text-[#8C8680]">
							Software Engineer & Full-Stack SDE
						</p>
					</div>

					<div className="flex justify-center items-center gap-2 font-mono text-[9px] tracking-wider text-[#8C8680] uppercase">
						<span>Nashik, IN</span>
						<span className="opacity-30">•</span>
						<span>Available for projects</span>
					</div>
				</div>

				{/* INTERACTIVE PHONE CARD */}
				<button
					type="button"
					onClick={() => setShowOptions(true)}
					className="w-full text-left group relative cursor-pointer bg-white border border-black/5 p-5 hover:border-black/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 rounded-lg flex justify-between items-center"
				>
					<div className="space-y-1">
						<p className="text-[9px] font-mono tracking-widest uppercase text-[#8C8680]">
							Phone Contact
						</p>
						<p className="text-lg font-medium tracking-tight group-hover:text-black transition-colors">
							{phoneNumber}
						</p>
					</div>
					<div className="flex gap-2">
						<span className="p-2.5 bg-[#F5F2EE] rounded-full text-black hover:bg-black hover:text-white transition-colors">
							<Phone className="w-4 h-4" />
						</span>
					</div>
				</button>

				{/* SOCIAL MEDIA LINKS SECTION */}
				<div className="space-y-3">
					<p className="text-[9px] font-mono tracking-widest uppercase text-[#8C8680] px-1">
						Connect & Follow
					</p>

					<div className="grid grid-cols-2 gap-3">
						<Link
							href="https://linkedin.com/in/mrravipandee"
							target="_blank"
							className="flex items-center gap-3 bg-white border border-black/5 p-4 rounded-lg hover:border-black/20 transition-all text-xs font-mono uppercase tracking-wider group"
						>
							<Linkedin className="w-4 h-4 text-[#0077B5] group-hover:scale-110 transition-transform" />
							<span>LinkedIn</span>
						</Link>

						<Link
							href="https://github.com/mrravipandee"
							target="_blank"
							className="flex items-center gap-3 bg-white border border-black/5 p-4 rounded-lg hover:border-black/20 transition-all text-xs font-mono uppercase tracking-wider group"
						>
							<Github className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
							<span>GitHub</span>
						</Link>

						<Link
							href="https://bento.me/mrravipandee"
							target="_blank"
							className="flex items-center gap-3 bg-white border border-black/5 p-4 rounded-lg hover:border-black/20 transition-all text-xs font-mono uppercase tracking-wider group"
						>
							<Globe className="w-4 h-4 text-[#8C8680] group-hover:scale-110 transition-transform" />
							<span>Bento</span>
						</Link>

						<Link
							href="https://wa.me/917058548204"
							target="_blank"
							className="flex items-center gap-3 bg-white border border-black/5 p-4 rounded-lg hover:border-black/20 transition-all text-xs font-mono uppercase tracking-wider group"
						>
							<MessageSquare className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
							<span>WhatsApp</span>
						</Link>
					</div>

					<Link
						href="mailto:imravipanday@gmail.com"
						className="flex justify-center items-center gap-2 w-full bg-black text-white py-3.5 px-4 rounded-lg hover:bg-black/80 transition-all text-xs font-mono uppercase tracking-wider"
					>
						Send an Email
					</Link>
				</div>

				{/* YOUTUBE VIDEO SECTION */}
				<div className="space-y-3 pt-2">
					<div className="flex justify-between items-center px-1">
						<p className="text-[9px] font-mono tracking-widest uppercase text-[#8C8680]">
							Featured Video Showcase
						</p>
						<span className="flex items-center gap-1 font-mono text-[8px] uppercase text-red-500">
							<Youtube className="w-3 h-3" /> Live
						</span>
					</div>

					{/* Embedded Video aspect 16/9 */}
					<div className="relative overflow-hidden bg-black border border-black/10 rounded-lg shadow-sm aspect-video">
						<iframe
							width="100%"
							height="100%"
							src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
							title="Ravi Pandey Feature Video Showcase"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className="absolute inset-0 w-full h-full"
						/>
					</div>
				</div>

				{/* Bottom Utility Actions */}
				<div className="flex justify-between items-center pt-8 border-t border-black/5">
					<button
						type="button"
						onClick={shareProfile}
						className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest hover:opacity-50 transition-opacity cursor-pointer"
					>
						<Share2 className="w-3.5 h-3.5" /> Share Profile
					</button>

					<Link
						href="/"
						className="font-mono text-[9px] uppercase tracking-widest hover:underline transition-all"
					>
						Visit Portfolio
					</Link>
				</div>
			</div>

			{/* POPUP OPTIONS MODAL (CALL / COPY) */}
			<AnimatePresence>
				{showOptions && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setShowOptions(false)}
							className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40"
						/>

						{/* Dialog Card */}
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 100 }}
							transition={{ type: "spring", damping: 25, stiffness: 350 }}
							className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#F5F2EE] border-t border-black/10 rounded-t-2xl p-6 pb-8 z-50 shadow-2xl space-y-4 text-center"
						>
							<div className="flex justify-between items-center border-b border-black/5 pb-3">
								<span className="text-[10px] font-mono tracking-widest uppercase text-[#8C8680]">
									Contact Options
								</span>
								<button
									type="button"
									onClick={() => setShowOptions(false)}
									className="p-1 hover:bg-black/5 rounded-full transition-colors cursor-pointer"
								>
									<X className="w-4 h-4" />
								</button>
							</div>

							<div className="py-2">
								<p className="text-xl font-medium tracking-tight">
									{phoneNumber}
								</p>
								<p className="text-[10px] font-mono text-[#8C8680] mt-1">
									Nashik, India
								</p>
							</div>

							<div className="flex flex-col gap-3">
								{/* CALL OPTION */}
								<a
									href={`tel:${rawPhoneNumber}`}
									className="flex justify-center items-center gap-3 w-full bg-black text-white py-3.5 px-4 rounded-xl font-mono uppercase tracking-wider text-xs hover:bg-black/80 transition-all text-center"
								>
									<Phone className="w-4 h-4" />
									Call Number
								</a>

								{/* COPY OPTION */}
								<button
									type="button"
									onClick={() => {
										copyToClipboard();
										setShowOptions(false);
									}}
									className="flex justify-center items-center gap-3 w-full bg-white border border-black/10 text-black py-3.5 px-4 rounded-xl font-mono uppercase tracking-wider text-xs hover:bg-black/5 transition-all cursor-pointer"
								>
									{copied ? (
										<>
											<Check className="w-4 h-4 text-green-600" />
											Number Copied!
										</>
									) : (
										<>
											<Copy className="w-4 h-4" />
											Copy Number
										</>
									)}
								</button>

								<button
									type="button"
									onClick={() => setShowOptions(false)}
									className="w-full text-center py-2 text-[10px] font-mono uppercase tracking-wider text-[#8C8680] hover:text-black transition-colors"
								>
									Cancel
								</button>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>

			{/* TOAST FEEDBACK */}
			<AnimatePresence>
				{toastMessage && (
					<motion.div
						initial={{ opacity: 0, y: 50, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 50, scale: 0.95 }}
						className="fixed bottom-6 bg-black text-white px-4 py-3 rounded-lg shadow-xl text-xs font-mono uppercase tracking-wider z-50 flex items-center gap-2 border border-white/10"
					>
						<Check className="w-4 h-4 text-green-400" />
						{toastMessage}
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default ShareProfileClient;
