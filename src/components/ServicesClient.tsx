"use client";

import { motion } from "framer-motion";
import {
	ArrowUpRight,
	Brain,
	Cpu,
	Monitor,
	Smartphone,
	Sparkles,
} from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const ServicesClient = () => {
	const services = [
		{
			id: "01",
			title: "Frontend Engineering",
			description:
				"Crafting visually stunning, high-performance web applications. Focused on fluid micro-animations, speed optimization, and responsive design systems. I translate complex user paths into simple, gorgeous interactions.",
			icon: <Monitor className="w-6 h-6 text-black" />,
			technologies: [
				"React",
				"Next.js",
				"TailwindCSS",
				"Framer Motion",
				"TypeScript",
			],
		},
		{
			id: "02",
			title: "Backend Architecture",
			description:
				"Designing secure, robust, and highly concurrent databases and API systems. Structured to handle high-frequency requests, clean data modeling, and seamless integrations with third-party service architectures.",
			icon: <Cpu className="w-6 h-6 text-black" />,
			technologies: [
				"Node.js",
				"Express",
				"Go",
				"PostgreSQL",
				"MongoDB",
				"REST & gRPC",
			],
		},
		{
			id: "03",
			title: "Android App Development",
			description:
				"Building intuitive, offline-first mobile applications with clean state management. Designed for native responsiveness, background synchronizations, location services, and robust deployment pipelines.",
			icon: <Smartphone className="w-6 h-6 text-black" />,
			technologies: [
				"Android SDK",
				"Kotlin",
				"React Native",
				"Local DBs",
				"API Sync",
			],
		},
		{
			id: "04",
			title: "ML Solutions",
			description:
				"Integrating predictive analysis, automation, and natural language processing capabilities into products. Helping startups leverage trained models, smart recommendations, and data parsing to stay competitive.",
			icon: <Brain className="w-6 h-6 text-black" />,
			technologies: [
				"Python",
				"PyTorch",
				"TensorFlow",
				"NLP Models",
				"Data Pipelines",
			],
		},
	];

	const processSteps = [
		{
			id: "01",
			title: "Scope & Align",
			description:
				"We collaborate to dissect your idea, identify core product requirements, and map out a structured engineering roadmap.",
		},
		{
			id: "02",
			title: "Design & Build",
			description:
				"Writing clean, modular code with constant validation, feedback loops, and staging environment previews.",
		},
		{
			id: "03",
			title: "Deploy & Scale",
			description:
				"Launching with performance audits, cloud configuration, caching strategies, and ongoing optimization support.",
		},
	];

	const testimonials = [
		{
			quote:
				"Ravi scaled our local delivery service platform backend to handle thousands of active requests smoothly. The API design and real-time updates were perfectly executed.",
			author: "Amit Sharma",
			role: "Founder, Sahayakji",
			project: "Sahayakji App",
		},
		{
			quote:
				"Working with Ravi on our inventory SaaS was incredible. His expertise in Node.js and MongoDB helped us deploy our MVP in record time with absolute stability.",
			author: "Priya Patel",
			role: "Co-Founder, Pharmly",
			project: "Pharmly Healthcare",
		},
		{
			quote:
				"Ravi integrated predictive vehicle analytics seamlessly. His work in PostgreSQL and data visualization has allowed our users to monitor real-time maintenance effortlessly.",
			author: "Rohan Deshmukh",
			role: "Product Owner, VehicleCare",
			project: "VehicleCare Systems",
		},
		{
			quote:
				"The Next.js frontend built by Ravi is super fast, incredibly responsive, and has beautiful editorial aesthetics. Our client engagement surged right after deployment.",
			author: "Sneha Iyer",
			role: "Design Lead, Veda Studios",
			project: "Agency Portfolio",
		},
		{
			quote:
				"Ravi's full-stack expertise helped us ship our AI-powered product demo to investors within two weeks. A highly professional, detail-oriented SDE.",
			author: "Aarav Joshi",
			role: "CTO, Vyapaar.ai",
			project: "Vyapaar AI Platform",
		},
		{
			quote:
				"The offline-first native functionalities Ravi built in Kotlin for our delivery team are rock solid. Excellent communication and prompt deliveries.",
			author: "Ananya Reddy",
			role: "Operations Head, QuickCart",
			project: "Logistics App",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		show: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", stiffness: 100, damping: 15 },
		},
	};

	return (
		<section className="view-container mt-24 md:mt-32 mb-20 md:mb-40 px-6 md:px-10">
			{/* 1. Page Header */}
			<div className="border-b border-black/10 pb-12 mb-20">
				<p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#8C8680] mb-4 flex items-center gap-2">
					<Sparkles className="w-3 h-3 text-[#8C8680] animate-pulse" />
					Services — SDE Consulting / MMXXVI
				</p>
				<h1 className="text-4xl sm:text-5xl md:text-8xl font-medium tracking-tighter leading-none">
					Engineered to scale. <br />
					<span className="italic font-light">Built to last.</span>
				</h1>
				<p className="mt-8 max-w-xl text-sm md:text-base text-[#4a4a4a] font-light leading-relaxed be-vietnam">
					I partner with early-stage founders and modern businesses to turn
					complex product requirements into clean, highly-performant codebases.
				</p>
			</div>

			{/* 2. Services Grid */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: "-100px" }}
				className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32"
			>
				{services.map((service) => (
					<motion.div
						key={service.id}
						variants={itemVariants}
						className="group relative bg-[#F5F2EE] border border-black/10 hover:border-black/30 hover:shadow-[0_4px_30px_rgba(0,0,0,0.02)] p-6 sm:p-8 rounded-lg flex flex-col justify-between transition-all duration-300"
					>
						{/* Top Card Info */}
						<div>
							<div className="flex justify-between items-start mb-8">
								<span className="font-mono text-xs text-[#8C8680] font-bold">
									{service.id}
								</span>
								<div className="p-3 bg-white/60 border border-black/5 rounded-full group-hover:bg-white group-hover:scale-110 transition-all duration-500">
									{service.icon}
								</div>
							</div>

							<h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 group-hover:italic transition-all duration-300">
								{service.title}
							</h3>

							<p className="text-sm text-[#4a4a4a] leading-relaxed mb-8 font-light be-vietnam">
								{service.description}
							</p>
						</div>

						{/* Card Footer Tech */}
						<div className="border-t border-black/5 pt-6 mt-auto">
							<div className="flex flex-wrap gap-2">
								{service.technologies.map((tech) => (
									<span
										key={tech}
										className="text-[9px] font-mono border border-black/10 px-2 py-0.5 uppercase tracking-tighter text-[#8C8680] bg-white/40"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>

			{/* 3. Process Section */}
			<div className="mb-32">
				<div className="border-b border-black/10 pb-8 mb-16">
					<p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#8C8680] mb-2">
						Collaboration Workflow
					</p>
					<h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
						The Engineering Process
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
					{processSteps.map((step) => (
						<div key={step.id} className="space-y-4">
							<span className="font-mono text-xs text-[#8C8680] font-bold">
								Step {step.id}
							</span>
							<h3 className="text-lg font-bold tracking-tight">{step.title}</h3>
							<p className="text-xs sm:text-sm text-[#4a4a4a] leading-relaxed font-light be-vietnam">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* 4. Delivered Impact & Testimonials */}
			<div className="mb-32">
				<div className="border-b border-black/10 pb-8 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
					<div>
						<p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#8C8680] mb-2">
							Delivered Impact
						</p>
						<h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
							Client Feedback & Stats
						</h2>
					</div>
					<div className="flex flex-wrap gap-8 border-l border-black/10 pl-6 h-auto md:h-12 items-center">
						<div>
							<p className="text-2xl md:text-3xl font-bold tracking-tight">
								10+
							</p>
							<p className="font-mono text-[9px] uppercase tracking-wider text-[#8C8680]">
								Projects Shipped
							</p>
						</div>
						<div>
							<p className="text-2xl md:text-3xl font-bold tracking-tight">
								100%
							</p>
							<p className="font-mono text-[9px] uppercase tracking-wider text-[#8C8680]">
								Success Rate
							</p>
						</div>
						<div>
							<p className="text-2xl md:text-3xl font-bold tracking-tight">
								1+
							</p>
							<p className="font-mono text-[9px] uppercase tracking-wider text-[#8C8680]">
								Years Experience
							</p>
						</div>
					</div>
				</div>

				<div className="w-full overflow-hidden">
					<Marquee
						direction="right"
						speed={35}
						gradient={false}
						pauseOnHover={true}
						className="py-4"
					>
						{testimonials.map((t) => (
							<div
								key={t.author}
								className="bg-[#F5F2EE] border border-black/10 p-6 sm:p-8 rounded-lg flex flex-col justify-between transition-all duration-300 hover:border-black/30 hover:shadow-[0_4px_30px_rgba(0,0,0,0.01)] h-[280px] w-[320px] sm:w-[380px] shrink-0 mx-4"
							>
								<div className="space-y-6">
									<div className="flex items-center gap-1">
										{[...Array(5)].map((_, i) => (
											<svg
												key={`${t.author}-star-${i}`}
												className="w-3.5 h-3.5 fill-current text-amber-600"
												viewBox="0 0 24 24"
												role="img"
												aria-label="Star Rating"
											>
												<title>Star</title>
												<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
											</svg>
										))}
									</div>
									<p className="text-sm text-[#4a4a4a] leading-relaxed font-light italic be-vietnam min-h-[90px]">
										&ldquo;{t.quote}&rdquo;
									</p>
								</div>
								<div className="border-t border-black/5 pt-6 mt-8 flex justify-between items-end">
									<div>
										<h4 className="text-sm font-bold tracking-tight">
											{t.author}
										</h4>
										<p className="text-[10px] text-[#8C8680] font-mono uppercase tracking-wider mt-0.5">
											{t.role}
										</p>
									</div>
									<span className="text-[9px] font-mono border border-black/10 px-2 py-0.5 uppercase tracking-tighter text-[#8C8680] bg-white/40">
										{t.project}
									</span>
								</div>
							</div>
						))}
					</Marquee>
				</div>
			</div>

			{/* 5. Large CTA Section */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="relative group w-full bg-[#1A1A1A] text-white p-8 sm:p-12 md:p-16 rounded-xl overflow-hidden shadow-2xl text-center space-y-8"
			>
				{/* Background Noise Deco */}
				<div className="pointer-events-none absolute inset-0 opacity-[0.02] bg-[url('/noise.png')]" />

				<span className="inline-block font-mono text-[9px] tracking-[0.4em] uppercase text-[#8C8680]">
					Get Started
				</span>

				<h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-medium tracking-tighter max-w-3xl mx-auto leading-tight">
					Have an idea? Let&apos;s turn it into a{" "}
					<span className="italic font-light text-green-400">
						scalable product.
					</span>
				</h2>

				<p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-lg mx-auto font-light leading-relaxed be-vietnam">
					Whether you need a complete prototype, cloud API architecture, or
					custom AI integrations, I can guide you from early scoping to
					deployment.
				</p>

				{/* CTA Buttons */}
				<div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
					<Link
						href="/contact"
						className="flex justify-center items-center gap-2 w-full sm:w-auto bg-white text-black font-mono uppercase tracking-wider text-xs font-bold py-3.5 px-8 rounded-lg hover:bg-white/80 transition-all"
					>
						Start Project <ArrowUpRight className="w-4 h-4" />
					</Link>
					<Link
						href="/contact"
						className="flex justify-center items-center gap-2 w-full sm:w-auto bg-transparent border border-white/20 text-white font-mono uppercase tracking-wider text-xs py-3.5 px-8 rounded-lg hover:bg-white/5 transition-all"
					>
						Get in Touch
					</Link>
				</div>
			</motion.div>
		</section>
	);
};

export default ServicesClient;
