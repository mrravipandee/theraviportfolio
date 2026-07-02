"use client";

import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

const ContactPage = () => {
	const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
	const [shareUrl, setShareUrl] = useState<string>("");
	const [copied, setCopied] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const origin = window.location.origin;
			const url = `${origin}/contact/share-profile`;
			setShareUrl(url);

			QRCode.toDataURL(
				url,
				{
					width: 400,
					margin: 3,
					color: {
						dark: "#1A1A1A",
						light: "#F5F2EE",
					},
				},
				(err, generatedUrl) => {
					if (err) {
						console.error("Error generating QR code:", err);
						return;
					}
					setQrCodeUrl(generatedUrl);
				},
			);
		}
	}, []);

	const copyShareLink = async () => {
		try {
			await navigator.clipboard.writeText(shareUrl);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy URL:", err);
		}
	};

	return (
		<section className="view-container mt-32 mb-40 px-6 md:px-10">
			{/* 1. Header Section */}
			<div className="border-b border-black/10 pb-12 mb-16">
				<p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#8C8680] mb-4">
					Get in touch — Status: Available 2026
				</p>
				<h1 className="text-4xl sm:text-5xl md:text-8xl font-medium tracking-tighter leading-none">
					Let&apos;s build <br />
					<span className="italic font-light">something great.</span>
				</h1>
			</div>

			{/* 2. Main Content Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
				{/* Left Column: Traditional Contact & Info */}
				<div className="col-span-12 lg:col-span-6 space-y-12">
					<div className="space-y-6">
						<h2 className="text-sm font-mono tracking-widest uppercase text-[#8C8680]">
							Direct Contact
						</h2>
						<div className="space-y-4">
							<p className="text-xl md:text-2xl font-light">
								<a
									href="mailto:imravipanday@gmail.com"
									className="hover:opacity-60 border-b border-black/20 pb-1 transition-opacity"
								>
									imravipanday@gmail.com
								</a>
							</p>
							<p className="text-xl md:text-2xl font-light">
								<a
									href="tel:+917058548204"
									className="hover:opacity-60 border-b border-black/20 pb-1 transition-opacity"
								>
									+91 70585 48204
								</a>
							</p>
						</div>
					</div>

					<div className="space-y-6">
						<h2 className="text-sm font-mono tracking-widest uppercase text-[#8C8680]">
							Digital Channels
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
							<Link
								href="https://bento.me/mrravipandee"
								target="_blank"
								className="group flex items-center justify-between border border-black/10 p-4 hover:bg-black/5 transition-all text-xs font-mono uppercase tracking-wider"
							>
								<span>Bento</span>
								<span className="group-hover:translate-x-1 transition-transform">
									→
								</span>
							</Link>
							<Link
								href="https://github.com/mrravipandee"
								target="_blank"
								className="group flex items-center justify-between border border-black/10 p-4 hover:bg-black/5 transition-all text-xs font-mono uppercase tracking-wider"
							>
								<span>GitHub</span>
								<span className="group-hover:translate-x-1 transition-transform">
									→
								</span>
							</Link>
							<Link
								href="https://linkedin.com/in/mrravipandee"
								target="_blank"
								className="group flex items-center justify-between border border-black/10 p-4 hover:bg-black/5 transition-all text-xs font-mono uppercase tracking-wider"
							>
								<span>LinkedIn</span>
								<span className="group-hover:translate-x-1 transition-transform">
									→
								</span>
							</Link>
							<Link
								href="https://wa.me/917058548204"
								target="_blank"
								className="group flex items-center justify-between border border-black/10 p-4 hover:bg-black/5 transition-all text-xs font-mono uppercase tracking-wider"
							>
								<span>WhatsApp</span>
								<span className="group-hover:translate-x-1 transition-transform">
									→
								</span>
							</Link>
						</div>
					</div>

					<div className="font-mono text-[9px] tracking-[0.35em] text-[#8C8680] leading-loose">
						<p>LOCATION: NASHIK, MH, INDIA</p>
						<p>COORDINATES: 19.9975° N, 73.7898° E</p>
						<p>TIMEZONE: IST (GMT+5:30)</p>
					</div>
				</div>

				{/* Right Column: Premium Business Card QR Code */}
				<div className="col-span-12 lg:col-span-6 flex flex-col items-center">
					<div className="relative group w-full max-w-[360px] bg-[#F5F2EE] border border-black/10 p-5 sm:p-8 rounded-sm shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:border-black/30 transition-all duration-500">
						{/* Visual Grid Deco */}
						<div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-black/10 group-hover:border-black/40 transition-colors" />
						<div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-black/10 group-hover:border-black/40 transition-colors" />

						<div className="text-center space-y-6">
							<div className="flex justify-between items-baseline font-mono text-[8px] tracking-[0.2em] text-[#8C8680] uppercase">
								<span>Business Card</span>
								<span>Scan Me</span>
							</div>

							{/* QR Code Container */}
							<div className="bg-[#F5F2EE] border border-black/5 p-4 flex justify-center items-center aspect-square rounded-sm overflow-hidden select-none">
								{qrCodeUrl ? (
									<Image
										src={qrCodeUrl}
										alt="Ravi Pandey Portfolio QR Code"
										width={240}
										height={240}
										className="w-full h-full object-contain mix-blend-multiply"
									/>
								) : (
									<div className="w-[200px] h-[200px] bg-black/5 animate-pulse rounded-sm" />
								)}
							</div>

							<div className="space-y-2">
								<h3 className="text-base font-semibold tracking-tight">
									Mobile Share Profile
								</h3>
								<p className="text-xs text-[#8C8680] leading-relaxed">
									Scan this QR code with your mobile camera to quickly view my
									interactive business card, copy/call my number, and explore
									socials.
								</p>
							</div>

							{/* Action Buttons inside Card */}
							<div className="pt-2 flex flex-col sm:flex-row gap-2 sm:gap-3">
								<button
									type="button"
									onClick={copyShareLink}
									className="flex-1 text-[10px] font-mono uppercase tracking-wider border border-black py-2 px-3 hover:bg-black hover:text-white transition-colors cursor-pointer text-center"
								>
									{copied ? "Copied Link!" : "Copy Link"}
								</button>
								{qrCodeUrl && (
									<a
										href={qrCodeUrl}
										download="ravi-pandey-qr.png"
										className="flex-1 text-[10px] font-mono uppercase tracking-wider border border-black/10 py-2 px-3 hover:border-black hover:bg-black/5 transition-all text-center"
									>
										Save QR
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 3. Footer Spacer Decor */}
			<div className="mt-32 pt-10 border-t border-black/5 flex justify-between items-center font-mono text-[10px] text-[#8C8680] uppercase tracking-[0.2em]">
				<p>© MMXXVI</p>
				<Link href="/" className="hover:text-black transition-colors">
					Back to Home
				</Link>
			</div>
		</section>
	);
};

export default ContactPage;
