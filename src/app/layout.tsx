import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Be_Vietnam_Pro, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
});
const beVietnamPro = Be_Vietnam_Pro({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-be-vietnam-pro",
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
	alternates: {
		canonical: "/",
	},
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
		url: "https://devravipandey.in",
		siteName: "Ravi Pandey Portfolio",
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Ravi Pandey: Software Engineer, Web Developer, and Machine Learning Enthusiast",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Ravi Pandey • Software Engineer | Web Developer | ML Enthusiast",
		description:
			"Explore the work of Ravi Pandey — a full-stack developer, backend engineer, and machine learning enthusiast helping startups.",
		images: ["/opengraph-image.png"],
		creator: "@mrravipandee",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
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
			<body
				className={`${generalSans.variable} ${spaceGrotesk.variable} ${beVietnamPro.variable}`}
			>
				<Navigation />
				{children}
				<Analytics />
				<Footer />
			</body>
		</html>
	);
}
