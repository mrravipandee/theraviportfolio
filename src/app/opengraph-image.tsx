import { ImageResponse } from "next/og";

export const alt =
	"Ravi Pandey • Software Engineer | Full-Stack Developer | ML Enthusiast";
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
						Engineering Portfolio
					</span>
					<span
						style={{
							fontSize: "13px",
							fontFamily: "monospace",
							letterSpacing: "0.15em",
							textTransform: "uppercase",
							color: "#8C8680",
							fontWeight: 600,
						}}
					>
						Nashik, India
					</span>
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
							fontSize: "72px",
							fontWeight: 800,
							margin: "0 0 10px 0",
							letterSpacing: "-0.04em",
							color: "#1A1A1A",
						}}
					>
						Building things people love.
					</h1>
					<p
						style={{
							fontSize: "18px",
							margin: "0 0 24px 0",
							fontFamily: "monospace",
							textTransform: "uppercase",
							letterSpacing: "0.18em",
							color: "#8C8680",
							fontWeight: 600,
						}}
					>
						Ravi Pandey • Software Engineer
					</p>
					<p
						style={{
							fontSize: "20px",
							color: "#4A4A4A",
							maxWidth: "850px",
							lineHeight: "1.55",
							margin: 0,
							fontWeight: 400,
						}}
					>
						I focus on making the complex feel simple. Helping founders and
						modern startups scale by turning ideas into clean, robust, and
						beautiful digital products.
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
