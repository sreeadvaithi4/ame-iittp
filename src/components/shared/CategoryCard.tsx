import { ReactNode, useState } from "react";
import PlaceholderModal from "./PlaceholderModal";

interface CategoryCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
}

const CategoryCard = ({ title, description, icon }: CategoryCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="group w-full text-left bg-card border border-border rounded-xl p-6 card-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            {icon}
          </div>
        )}
        <h3 className="heading-4 text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        {description && (
          <p className="body-text text-sm">{description}</p>
        )}
      </button>

      <PlaceholderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      />
    </>
  );
};

export default CategoryCard;
