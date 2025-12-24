import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  description?: string;
  date: string;
  image?: string;
  featured?: boolean;
  href?: string;
  className?: string;
}

const EventCard = ({
  title,
  description,
  date,
  image,
  featured = false,
  href,
  className,
}: EventCardProps) => {
  const CardWrapper = href ? Link : "div";
  const wrapperProps = href ? { to: href } : {};

  return (
    <CardWrapper
      {...(wrapperProps as any)}
      className={cn(
        "group relative block overflow-hidden rounded-2xl transition-all duration-300",
        featured
          ? "md:col-span-1 row-span-1"
          : "hover:shadow-xl hover:-translate-y-1",
        href && "cursor-pointer",
        className
      )}
    >
      {featured && image ? (
        // Featured card with image background
        <div className="relative h-full min-h-[400px] md:min-h-[450px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide">
                <Star className="w-3 h-3" />
                Featured Event
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            {description && (
              <p className="text-muted-foreground text-sm md:text-base mb-3 line-clamp-2">
                {description}
              </p>
            )}
            <div className="flex items-center gap-2 text-primary">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">{date}</span>
            </div>
          </div>

          {/* Glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/50 ring-inset" />
          </div>
        </div>
      ) : (
        // Regular card
        <div className="relative h-full min-h-[400px] md:min-h-[450px] bg-card border border-border p-6 md:p-8 flex flex-col justify-between group-hover:border-primary/40 transition-colors">
          {/* MATLAB-themed subtle accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
          
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            {description && (
              <p className="text-muted-foreground mb-4">
                {description}
              </p>
            )}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>

          {href && (
            <div className="flex items-center gap-2 text-primary font-medium mt-6">
              <span>View Workshop Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          )}
        </div>
      )}
    </CardWrapper>
  );
};

export default EventCard;
