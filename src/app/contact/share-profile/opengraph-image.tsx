import { ImageResponse } from "next/og";

export const alt = "Ravi Pandey • Software Engineer & Full-Stack SDE";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";
export const runtime = "edge";

export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#F5F2EE",
				color: "#1A1A1A",
				padding: "60px",
				fontFamily: "system-ui, -apple-system, sans-serif",
				position: "relative",
			}}
		>
			{/* Aesthetic Outer Border */}
			<div
				style={{
					position: "absolute",
					top: "30px",
					left: "30px",
					right: "30px",
					bottom: "30px",
					border: "1px solid rgba(0, 0, 0, 0.08)",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					padding: "40px",
				}}
			>
				{/* Top Header Row */}
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
					}}
				>
					<span
						style={{
							fontSize: "13px",
							fontFamily: "monospace",
							letterSpacing: "0.25em",
							textTransform: "uppercase",
							color: "#8C8680",
							fontWeight: 600,
						}}
					>
						Share Profile • SDE Card
					</span>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							backgroundColor: "rgba(34, 197, 94, 0.08)",
							border: "1px solid rgba(34, 197, 94, 0.2)",
							padding: "6px 12px",
							borderRadius: "9999px",
						}}
					>
						<div
							style={{
								width: "8px",
								height: "8px",
								backgroundColor: "#22c55e",
								borderRadius: "50%",
								marginRight: "6px",
							}}
						/>
						<span
							style={{
								fontSize: "11px",
								fontFamily: "monospace",
								color: "#166534",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								fontWeight: 700,
							}}
						>
							Available
						</span>
					</div>
				</div>

				{/* Center Identity Section */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						marginTop: "20px",
					}}
				>
					<h1
						style={{
							fontSize: "68px",
							fontWeight: 800,
							margin: "0 0 12px 0",
							letterSpacing: "-0.04em",
							color: "#1A1A1A",
						}}
					>
						Ravi Pandey
					</h1>
					<p
						style={{
							fontSize: "20px",
							margin: "0 0 24px 0",
							fontFamily: "monospace",
							textTransform: "uppercase",
							letterSpacing: "0.18em",
							color: "#8C8680",
							fontWeight: 600,
						}}
					>
						Software Engineer & Full-Stack SDE
					</p>
					<p
						style={{
							fontSize: "21px",
							color: "#4A4A4A",
							maxWidth: "820px",
							lineHeight: "1.55",
							margin: 0,
							fontWeight: 400,
						}}
					>
						Simplifying complexity. Building purpose-driven full-stack web
						applications, SaaS systems, and machine learning solutions for
						modern startups.
					</p>
				</div>

				{/* Bottom Branding Row */}
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
						borderTop: "1px solid rgba(0, 0, 0, 0.05)",
						paddingTop: "24px",
					}}
				>
					<span
						style={{
							fontSize: "14px",
							fontFamily: "monospace",
							fontWeight: 700,
							color: "#1A1A1A",
							letterSpacing: "0.05em",
						}}
					>
						devravipandey.in
					</span>
					<span
						style={{
							fontSize: "13px",
							fontFamily: "monospace",
							color: "#8C8680",
							letterSpacing: "0.1em",
						}}
					>
						EST. MMXXIV
					</span>
				</div>
			</div>
		</div>,
		{
			...size,
		},
	);
}
