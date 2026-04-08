import pharmly from "./pharmly.png";
import sahayakji from "./sahayakji.png";
import vahiclecare from "./vehiclecare.png";

export { pharmly, sahayakji, vahiclecare };

export const projects = [
  {
    id: "01",
    title: "Pharmly",
    scope: "SaaS + Healthcare",
    tagline: "Healthcare Management Platform",
    description:
      "A SaaS-based platform for medical stores to manage inventory, prescriptions, and customer records efficiently. Built with a scalable backend architecture, it enables real-time stock tracking, automated billing, and data-driven insights for better decision-making.",
    image: pharmly,
    sourceLink: "https://github.com/mrravipandee/Pharmly",
    liveLink: "#", // Add if available
    technologies: ["Node.js", "Express", "MongoDB", "React", "Scalable Architecture"],
  },
  {
    id: "02",
    title: "Sahayakji",
    scope: "Marketplace + Dev",
    tagline: "Local Service Marketplace",
    description:
      "A platform that connects users with verified local service professionals. It enables quick service discovery, booking, and communication through a structured system designed for reliability. Built with a scalable backend to handle high-frequency requests and real-time availability.",
    image: sahayakji,
    sourceLink: "https://github.com/mrravipandee/Sahayakji",
    liveLink: "#", // Add if available
    technologies: ["React", "Node.js", "Real-time DB", "TailwindCSS", "API Design"],
  },
  {
    id: "03",
    title: "VehicleCare",
    scope: "Data Systems",
    tagline: "Vehicle Maintenance System",
    description:
      "A comprehensive system for tracking vehicle health, service history, and maintenance schedules. It helps users prevent breakdowns through timely alerts, structured data management, and predictive maintenance insights based on usage patterns.",
    image: vahiclecare,
    sourceLink: "https://github.com/mrravipandee/VehicleCare",
    liveLink: "#", // Add if available
    technologies: ["Python", "Flask", "PostgreSQL", "Predictive Logic", "Data Visualization"],
  },
];