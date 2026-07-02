import Link from "next/link";
import type React from "react";

const MagicButton = ({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) => {
	return (
		<Link href={href}>
			<button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900/90 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl">
					{children}
				</span>
			</button>
		</Link>
	);
};

export default MagicButton;
