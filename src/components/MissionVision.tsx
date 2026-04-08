"use client";

import Image from "next/image";

const Vision = () => {
    return (
        <div className="view-container">
            <section className="py-10 md:py-16 bg-[#F5F2EE] px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

                    {/* Left Content: Text */}
                    <div className="space-y-16">

                        {/* Vision Section */}
                        <div className="relative pl-8">
                            {/* The Blue Accent Line */}
                            <div className="absolute left-0 top-2 w-[3px] h-8 bg-gray-400" />
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#1A1A1A]">
                                Our vision
                            </h2>
                            <p className="text-sm font-light md:text-lg text-[#4a4a4a] leading-relaxed max-w-md be-vietnam">
                                To bridge the digital divide by providing seamless access to internet and
                                AI technologies for those left behind. We strive to empower every individual
                                with the tools needed to thrive in this era of rapid innovation.
                            </p>
                        </div>

                        {/* Mission Section */}
                        <div className="relative pl-8">
                            {/* The Blue Accent Line */}
                            <div className="absolute left-0 top-2 w-[3px] h-8 bg-gray-400" />
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#1A1A1A]">
                                Our mission
                            </h2>
                            <p className="text-sm font-light md:text-lg text-[#4a4a4a] leading-relaxed max-w-md be-vietnam">
                                To craft systems that endure and empower. We aim to build human-centric
                                solutions that redefine connectivity, foster lifelong learning, and
                                transform creative passion into scalable digital realities.
                            </p>
                        </div>

                    </div>

                    {/* Right Content: Image with Hover Effect */}
                    <div className="group relative w-full aspect-square flex items-center justify-center overflow-hidden bg-transparent">

                        {/* The SVG Image */}
                        <div className="relative w-full h-full transition-all duration-1000 ease-in-out 
                  filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 
                  scale-95 group-hover:scale-100 group-hover:-translate-y-2">
                            <Image
                                src="/vision-image.svg"
                                alt="Vision and Mission"
                                fill
                                className="object-contain" // Changed to contain so the SVG doesn't get cropped
                                priority
                            />
                        </div>

                        {/* Subtle Glow/Shadow Effect that appears on hover */}
                        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-[#F5F2EE]/50 rounded-full blur-3xl transition-all duration-1000 pointer-events-none" />

                        {/* Aesthetic Decoration: Floating lines to match 'eternal' grid */}
                        <div className="absolute top-0 right-0 w-12 h-px bg-black/10 group-hover:w-full transition-all duration-1000" />
                        <div className="absolute bottom-0 left-0 w-px h-12 bg-black/10 group-hover:h-full transition-all duration-1000" />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Vision;