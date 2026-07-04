"use client";

import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";

interface Blog {
	slug: string;
	title: string;
	description: string;
	date: string;
	readingTime: string;
	category: string;
	author: string;
}

interface BlogListClientProps {
	blogs: Blog[];
}

const BlogListClient: React.FC<BlogListClientProps> = ({ blogs }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");

	const categories = ["All", "Frontend", "Backend", "Machine Learning"];

	const filteredBlogs = blogs.filter((blog) => {
		const matchesSearch =
			blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			blog.description.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesCategory =
			selectedCategory === "All" || blog.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		show: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", stiffness: 100, damping: 15 },
		},
	};

	return (
		<section className="view-container pt-36 md:pt-48 pb-20 md:pb-40 px-6 md:px-10 min-h-screen bg-[#F5F2EE]">
			{/* Editorial Header */}
			<div className="border-b border-black/10 pb-12 mb-16">
				<p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#8C8680] mb-4 flex items-center gap-2">
					<Sparkles className="w-3 h-3 text-[#8C8680] animate-pulse" />
					Writing — Tech, Design & Scale
				</p>
				<h1 className="text-4xl sm:text-5xl md:text-8xl font-medium tracking-tighter leading-none">
					Ideas in motion. <br />
					<span className="italic font-light">Documented.</span>
				</h1>
			</div>

			{/* Filter & Search Bar */}
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 pb-8 border-b border-black/5">
				{/* Categories */}
				<div className="flex flex-wrap gap-2">
					{categories.map((category) => (
						<button
							key={category}
							type="button"
							onClick={() => setSelectedCategory(category)}
							className={`text-[10px] font-mono border px-3 py-1.5 uppercase tracking-wider transition-all duration-300 rounded-sm ${
								selectedCategory === category
									? "bg-[#1A1A1A] text-white border-black"
									: "bg-white/40 border-black/10 hover:border-black/30 text-[#8C8680]"
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* Search Input */}
				<div className="relative w-full md:w-80">
					<span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
						<Search className="h-3.5 w-3.5 text-[#8C8680]" />
					</span>
					<input
						type="text"
						placeholder="Search articles..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full bg-white/40 border border-black/10 focus:border-black/40 focus:bg-white rounded-md pl-10 pr-4 py-2 text-xs font-mono tracking-wider outline-none transition-all placeholder:text-[#8C8680]/60"
					/>
				</div>
			</div>

			{/* Blog List Grid */}
			{filteredBlogs.length > 0 ? (
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 md:grid-cols-2 gap-10"
				>
					{filteredBlogs.map((blog) => (
						<motion.div
							key={blog.slug}
							variants={itemVariants}
							className="group bg-[#F5F2EE] border border-black/10 hover:border-black/30 p-6 sm:p-8 rounded-lg flex flex-col justify-between transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,0,0,0.01)]"
						>
							<div>
								<div className="flex justify-between items-baseline mb-6 font-mono text-[9px] text-[#8C8680] uppercase tracking-wider">
									<span>{blog.date}</span>
									<span>{blog.readingTime}</span>
								</div>

								<Link href={`/blog/${blog.slug}`}>
									<h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 group-hover:italic transition-all duration-300 text-[#1A1A1A]">
										{blog.title}
									</h2>
								</Link>

								<p className="text-sm text-[#4a4a4a] leading-relaxed mb-8 font-light be-vietnam">
									{blog.description}
								</p>
							</div>

							<div className="border-t border-black/5 pt-6 mt-auto flex justify-between items-center">
								<span className="text-[9px] font-mono border border-black/10 px-2 py-0.5 uppercase tracking-tighter text-[#8C8680] bg-white/40">
									{blog.category}
								</span>
								<Link
									href={`/blog/${blog.slug}`}
									className="text-[10px] font-mono font-bold uppercase tracking-widest border-b border-black pb-0.5 hover:opacity-50 transition-opacity"
								>
									Read Post →
								</Link>
							</div>
						</motion.div>
					))}
				</motion.div>
			) : (
				<div className="text-center py-20 border border-dashed border-black/10 rounded-lg">
					<p className="font-mono text-xs text-[#8C8680] uppercase tracking-wider">
						No articles found matching your query.
					</p>
				</div>
			)}
		</section>
	);
};

export default BlogListClient;
