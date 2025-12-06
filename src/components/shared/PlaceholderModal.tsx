import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Clock } from "lucide-react";

interface PlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const PlaceholderModal = ({ isOpen, onClose, title }: PlaceholderModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center py-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground">
            Will be updated in the future
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlaceholderModal;
