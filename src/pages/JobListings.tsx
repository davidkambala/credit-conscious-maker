import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { JobCard } from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mockJobs, searchJobs } from "@/data/mockJobs";
import { Search, MapPin } from "lucide-react";
import { toast } from "sonner";

const JobListings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [displayedJobs, setDisplayedJobs] = useState(mockJobs);

  const cities = ["all", "Kinshasa", "Lubumbashi", "Goma"];

  const handleSearch = () => {
    let filtered = searchQuery ? searchJobs(searchQuery) : mockJobs;
    
    if (selectedCity !== "all") {
      filtered = filtered.filter(job => job.location_city === selectedCity);
    }
    
    setDisplayedJobs(filtered);
    toast.success(`${filtered.length} emploi(s) trouvé(s)`);
  };

  const handleApply = (jobId: string) => {
    const job = mockJobs.find(j => j.id === jobId);
    if (job) {
      toast.success(`Candidature enregistrée pour ${job.title}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Dernières offres d'emploi</h1>
            <p className="text-muted-foreground">
              Découvrez les opportunités d'emploi disponibles en RDC
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher un emploi, entreprise..."
                    className="pl-10"
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <div className="flex gap-3">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="px-4 py-2 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="all">Toutes les villes</option>
                    {cities.slice(1).map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  <Button onClick={handleSearch}>
                    Rechercher
                  </Button>
                </div>
              </div>
              
              {/* Quick filters */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Filtres rapides:</span>
                {["Développeur", "Marketing", "Finance", "Éducation"].map(filter => (
                  <Button
                    key={filter}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery(filter);
                      setDisplayedJobs(searchJobs(filter));
                    }}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {displayedJobs.length} offre(s) d'emploi disponible(s)
            </p>
          </div>

          {/* Job Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedJobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={handleApply} />
            ))}
          </div>

          {displayedJobs.length === 0 && (
            <div className="text-center py-16">
              <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Aucun emploi trouvé
              </h3>
              <p className="text-muted-foreground">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListings;
