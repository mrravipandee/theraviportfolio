import ServicesClient from "@/components/ServicesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Services | Ravi Pandey • Freelance Software Engineer",
	description:
		"Hire a freelance software engineer and full-stack developer based in Nashik, India. Specializing in custom Frontend, Backend, Android Apps, and Machine Learning solutions.",
	alternates: {
		canonical: "/services",
	},
	openGraph: {
		title: "Services | Ravi Pandey • Freelance Software Engineer",
		description:
			"Hire a freelance software engineer and full-stack developer based in Nashik, India. Specializing in custom Frontend, Backend, Android Apps, and Machine Learning solutions.",
		url: "https://devravipandey.in/services",
		siteName: "Ravi Pandey Portfolio",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Services | Ravi Pandey • Freelance Software Engineer",
		description:
			"Hire a freelance software engineer and full-stack developer based in Nashik, India. Specializing in custom Frontend, Backend, Android Apps, and Machine Learning solutions.",
		creator: "@mrravipandee",
	},
};

const ServicesPage = () => {
	const professionalServiceSchema = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		name: "Ravi Pandey - Freelance SDE",
		image: "https://devravipandey.in/founder-ravi-pandey.png",
		url: "https://devravipandey.in/services",
		telephone: "+917058548204",
		priceRange: "$$",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Nashik",
			addressRegion: "Maharashtra",
			addressCountry: "India",
		},
		areaServed: "Worldwide",
		knowsAbout: [
			"Full-Stack Development",
			"Frontend Engineering",
			"Backend Architecture",
			"Android App Development",
			"Machine Learning Integration",
			"SaaS Scaling",
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD ProfessionalService Schema
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(professionalServiceSchema),
				}}
			/>
			<ServicesClient />
		</>
	);
};

export default ServicesPage;
