import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface InsightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  href?: string;
}

const InsightCard = ({ title, description, href, className }: InsightCardProps) => {
  const content = (
    <div
      className={`flex flex-col group py-4 md:py-6 lg:py-8 border-b border-muted-1 hover:px-4 md:hover:px-6 lg:hover:px-8 hover:bg-muted-1 hover:border-primary-light transition-all ${className}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary-light transition">
          {title}
        </h3>
        {href && <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition" />}
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );

  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </Link>
  ) : (
    content
  );
};

export default InsightCard;
