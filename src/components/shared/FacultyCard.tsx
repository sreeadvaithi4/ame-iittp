import { useState } from "react";
import PlaceholderModal from "./PlaceholderModal";
import { User } from "lucide-react";

interface FacultyCardProps {
  name: string;
  designation: string;
  quote?: string;
  image?: string;
}

const FacultyCard = ({ name, designation, quote, image }: FacultyCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="group w-full text-left bg-card border border-border rounded-xl p-6 card-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-4 overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-12 h-12 text-muted-foreground" />
            )}
          </div>

          {/* Info */}
          <h3 className="heading-4 text-foreground mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{designation}</p>

          {quote && (
            <p className="body-text text-sm italic">"{quote}"</p>
          )}
        </div>
      </button>

      <PlaceholderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={name}
      />
    </>
  );
};

export default FacultyCard;
