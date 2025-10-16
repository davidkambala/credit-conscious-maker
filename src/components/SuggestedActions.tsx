import { Button } from "@/components/ui/button";
import { FileText, Search } from "lucide-react";

interface SuggestedActionsProps {
  onAction: (action: string) => void;
}

export const SuggestedActions = ({ onAction }: SuggestedActionsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("find_jobs")}
        className="text-xs"
      >
        <Search className="w-3 h-3 mr-1" />
        Trouver des emplois dans ma ville
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onAction("generate_cv")}
        className="text-xs"
      >
        <FileText className="w-3 h-3 mr-1" />
        Générer mon CV
      </Button>
    </div>
  );
};
