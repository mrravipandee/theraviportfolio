import ShareProfileClient from "@/components/ShareProfileClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Ravi Pandey | Full-Stack SDE - Share Profile",
	description:
		"Connect with Ravi Pandey — Software Engineer & Full-Stack Developer. View phone contact, digital channels, and featured video showcase.",
	alternates: {
		canonical: "/contact/share-profile",
	},
	openGraph: {
		title: "Ravi Pandey | Full-Stack SDE - Share Profile",
		description:
			"Connect with Ravi Pandey — Software Engineer & Full-Stack Developer. View phone contact, digital channels, and featured video showcase.",
		url: "https://raviverse.dev/contact/share-profile",
		siteName: "Ravi Pandey Portfolio",
		locale: "en_US",
		type: "profile",
	},
	twitter: {
		card: "summary_large_image",
		title: "Ravi Pandey | Full-Stack SDE - Share Profile",
		description:
			"Connect with Ravi Pandey — Software Engineer & Full-Stack Developer. View phone contact, digital channels, and featured video showcase.",
		creator: "@mrravipandee",
	},
};

const ShareProfilePage = () => {
	const profilePageSchema = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		mainEntity: {
			"@type": "Person",
			name: "Ravi Pandey",
			jobTitle: "Software Engineer & Full-Stack SDE",
			description:
				"Software Engineer & Full-Stack SDE helping startups turn complex concepts into beautiful, scalable digital realities.",
			image: "https://raviverse.dev/founder-ravi-pandey.png",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Nashik",
				addressRegion: "Maharashtra",
				addressCountry: "India",
			},
			sameAs: [
				"https://github.com/mrravipandee",
				"https://linkedin.com/in/mrravipandee",
				"https://bento.me/mrravipandee",
			],
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD ProfilePage Schema
				dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
			/>
			<ShareProfileClient />
		</>
	);
};

export default ShareProfilePage;
