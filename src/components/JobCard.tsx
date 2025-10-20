import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import { Job } from "@/data/mockJobs";

interface JobCardProps {
  job: Job;
  onApply?: (jobId: string) => void;
}

export const JobCard = ({ job, onApply }: JobCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Aujourd'hui";
    if (diffDays === 1) return "Hier";
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    return date.toLocaleDateString('fr-FR');
  };

  return (
    <Card className="p-4 hover:shadow-lg transition-shadow border-border bg-card">
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-foreground">{job.title}</h3>
          <p className="text-muted-foreground font-medium">{job.company}</p>
        </div>
        
        {job.skills && job.skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{job.location_city}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(job.date_posted)}</span>
          </div>
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button 
            variant="default" 
            size="sm"
            onClick={() => onApply?.(job.id)}
            className="flex-1"
          >
            Postuler
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(job.url, '_blank')}
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
