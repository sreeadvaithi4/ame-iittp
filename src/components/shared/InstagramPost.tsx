import { useState } from "react";
import { Heart, Share2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface InstagramPostProps {
  image: string;
  caption: string;
  date: string;
  className?: string;
}

const InstagramPost = ({ image, caption, date, className }: InstagramPostProps) => {
  const [liked, setLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const getAbsoluteUrl = (path: string) => {
    if (path.startsWith('http')) return path;
    return `${window.location.origin}${path}`;
  };

  const shareUrl = `${window.location.origin}/posts`;
  const shareText = `${caption} - AME IIT Tirupati`;
  const imageUrl = getAbsoluteUrl(image);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: caption,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or share failed
      }
    }
    setShowShareMenu(false);
  };

  const handleWhatsAppShare = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`;
    window.open(url, '_blank');
    setShowShareMenu(false);
  };

  const handleLinkedInShare = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
    setShowShareMenu(false);
  };

  const handleXShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
    setShowShareMenu(false);
  };

  const handleInstagramShare = () => {
    // Instagram doesn't have a direct share URL, so we copy to clipboard
    navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
    alert('Link copied! You can paste it on Instagram.');
    setShowShareMenu(false);
  };

  return (
    <div
      className={cn(
        "group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 relative",
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
              setShowShareMenu(true);
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

      {/* Share Menu Modal */}
      {showShareMenu && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowShareMenu(false)}
        >
          <div 
            className="bg-card border border-border rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Share Post</h3>
              <button 
                onClick={() => setShowShareMenu(false)}
                className="p-1 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Post Preview */}
            <div className="flex items-center gap-3 mb-6 p-3 bg-secondary rounded-lg">
              <img src={image} alt={caption} className="w-12 h-12 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm truncate">{caption}</p>
                <p className="text-xs text-muted-foreground">{date}</p>
              </div>
            </div>

            {/* Share Options */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleWhatsAppShare}
                className="flex items-center gap-3 p-3 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
              >
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-sm font-medium text-foreground">WhatsApp</span>
              </button>

              <button
                onClick={handleLinkedInShare}
                className="flex items-center gap-3 p-3 rounded-lg bg-[#0077B5]/10 hover:bg-[#0077B5]/20 transition-colors"
              >
                <svg className="w-5 h-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="text-sm font-medium text-foreground">LinkedIn</span>
              </button>

              <button
                onClick={handleXShare}
                className="flex items-center gap-3 p-3 rounded-lg bg-foreground/10 hover:bg-foreground/20 transition-colors"
              >
                <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-sm font-medium text-foreground">X</span>
              </button>

              <button
                onClick={handleInstagramShare}
                className="flex items-center gap-3 p-3 rounded-lg bg-[#E4405F]/10 hover:bg-[#E4405F]/20 transition-colors"
              >
                <svg className="w-5 h-5 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-sm font-medium text-foreground">Instagram</span>
              </button>
            </div>

            {/* Native Share */}
            {navigator.share && (
              <button
                onClick={handleNativeShare}
                className="w-full mt-4 p-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                More Options
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InstagramPost;
