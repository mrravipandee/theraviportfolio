import ContactClient from "@/components/ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact | Ravi Pandey • Software Engineer",
	description:
		"Get in touch with Ravi Pandey for professional inquiries, software engineering collaborations, or consulting.",
	alternates: {
		canonical: "/contact",
	},
};

const ContactPage = () => {
	const contactSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Ravi Pandey",
		url: "https://devravipandey.in",
		contactPoint: {
			"@type": "ContactPoint",
			telephone: "+91-70585-48204",
			contactType: "professional service",
			email: "imravipanday@gmail.com",
			availableLanguage: ["English", "Hindi"],
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD Person Schema
				dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
			/>
			<ContactClient />
		</>
	);
};

export default ContactPage;
