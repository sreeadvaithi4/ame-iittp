import { useState } from "react";
import { Heart, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface InstagramPostProps {
  image: string;
  caption: string;
  date: string;
  className?: string;
}

const InstagramPost = ({ image, caption, date, className }: InstagramPostProps) => {
  const [liked, setLiked] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: caption,
          text: `${caption} - AME IIT Tirupati`,
        });
      } catch (err) {
        // User cancelled or share failed
      }
    }
  };

  return (
    <div
      className={cn(
        "group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30",
        className
      )}
    >
      {/* Square Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={caption}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Hover overlay with icons */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
            className={cn(
              "p-3 rounded-full transition-all duration-200 hover:scale-110",
              liked ? "bg-primary text-primary-foreground" : "bg-card/80 text-foreground hover:bg-primary/20"
            )}
          >
            <Heart className={cn("w-6 h-6", liked && "fill-current")} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleShare();
            }}
            className="p-3 rounded-full bg-card/80 text-foreground hover:bg-primary/20 transition-all duration-200 hover:scale-110"
          >
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Caption and Date */}
      <div className="p-4">
        <p className="font-medium text-foreground text-sm md:text-base line-clamp-2 mb-1">
          {caption}
        </p>
        <p className="text-xs text-muted-foreground">
          {date}
        </p>
      </div>
    </div>
  );
};

export default InstagramPost;
