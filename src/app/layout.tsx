import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
});

const generalSans = localFont({
	src: "./fonts/GeneralSans-Variable.ttf",
	display: "swap",
	fallback: ["system-ui", "arial"],
	variable: "--font-general-sans",
});
export const metadata: Metadata = {
	title:
		"Ravi Pandey • Software Engineer | Full-Stack Developer | ML Enthusiast",
	description:
		"Ravi Pandey is a passionate software engineer, full-stack web developer, and machine learning enthusiast. He builds scalable digital solutions for startups and modern businesses.",
	metadataBase: new URL("https://devravipandey.in"),
	keywords: [
		"Ravi Pandey",
		"Ravi Pandey Dev",
		"Ravi Pandey SDE",
		"Dev Ravi Pandey",
		"Web Developer",
		"Full-Stack Developer",
		"MERN Developer",
		"Software Engineer",
		"Machine Learning",
		"Portfolio",
		"React Developer",
		"Next.js",
		"Freelancer",
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	openGraph: {
		title: "Ravi Pandey • Software Engineer | Web Developer | ML Enthusiast",
		description:
			"Explore the work of Ravi Pandey — a full-stack developer, backend engineer, and machine learning enthusiast helping startups with purpose-driven solutions.",
		url: "https://raviverse.dev",
		siteName: "Ravi Pandey Portfolio",
		images: {
			url: "/opengraph-image.png",
			width: 1920,
			height: 960,
			alt: "Ravi Pandey: Software Engineer, Web Developer, and Machine Learning Enthusiast",
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${generalSans.variable} ${spaceGrotesk.variable}`}>
				<Navigation />
				{children}
				<Analytics />
				<Footer />
			</body>
		</html>
	);
}
