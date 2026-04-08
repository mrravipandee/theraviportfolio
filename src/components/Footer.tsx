"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react";

type footerLinkType = {
    href: string;
    icon: React.ReactNode;
    label: string;
};

const footerLinks: footerLinkType[] = [
    {
        href: "https://github.com/mrravipandee",
        icon: <Github size={16} strokeWidth={1.5} />,
        label: "GitHub",
    },
    {
        href: "https://x.com/mrravipandee",
        icon: <Twitter size={16} strokeWidth={1.5} />,
        label: "Twitter",
    },
    {
        href: "https://linkedin.com/in/mrravipandee",
        icon: <Linkedin size={16} strokeWidth={1.5} />,
        label: "LinkedIn",
    },
    {
        href: "mailto:imravipanday@gmail.com",
        icon: <Mail size={16} strokeWidth={1.5} />,
        label: "Email",
    },
];

const Footer = () => {
    return (
        <footer className="view-container border-t border-black/5 pt-10 pb-20 px-6 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                
                {/* Brand & Credits */}
                <div className="space-y-4">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#8C8680]">
                        Crafted with rigor by Ravii Pandey
                    </p>
                    <Link
                        href="/work"
                        className="group flex gap-2 items-center text-sm font-semibold tracking-tight"
                    >
                        Explore Recent Work
                        <ArrowUpRight 
                            size={18} 
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
                        />
                    </Link>
                </div>

                {/* Social Links - Clean Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#8C8680] hover:text-black transition-colors"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span className="opacity-70">{link.icon}</span>
                            <span>{link.label}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Bottom Meta Bar */}
            <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-black/5 pt-8">
                <div className="flex gap-8 font-mono text-[9px] tracking-[0.2em] text-[#8C8680] uppercase">
                    <p>© raviverse.</p>
                    <p>Open Source</p>
                </div>
                
                <div className="font-mono text-[9px] tracking-[0.2em] text-[#8C8680] uppercase">
                    <p>NASHIK — MAHARASHTRA, INDIA</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;