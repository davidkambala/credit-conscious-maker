import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { MessageSquare, FileText, Briefcase, MapPin, Sparkles, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Intelligence Artificielle au service de votre carrière
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Trouvez votre emploi de rêve en{" "}
            <span className="text-primary">RDC</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Job Finder RDC est votre assistant intelligent qui vous aide à découvrir les meilleures 
            opportunités d'emploi à Kinshasa, Lubumbashi et Goma, et génère des CV professionnels 
            adaptés à chaque poste.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/chat">
              <Button size="lg" className="w-full sm:w-auto">
                <MessageSquare className="w-5 h-5" />
                Discuter avec l'assistant
              </Button>
            </Link>
            <Link to="/jobs">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Briefcase className="w-5 h-5" />
                Voir les emplois
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Pourquoi choisir Job Finder RDC?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Assistant Intelligent</h3>
              <p className="text-muted-foreground">
                Discutez avec notre chatbot IA pour trouver des emplois adaptés à vos compétences 
                et préférences en quelques secondes.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Génération de CV</h3>
              <p className="text-muted-foreground">
                Créez automatiquement des CV professionnels personnalisés pour chaque offre d'emploi 
                pour maximiser vos chances.
              </p>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Emplois Locaux</h3>
              <p className="text-muted-foreground">
                Accédez aux dernières opportunités d'emploi dans les principales villes de la RDC: 
                Kinshasa, Lubumbashi et Goma.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Offres d'emploi</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">3</div>
              <div className="text-muted-foreground">Villes couvertes</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Assistance IA</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Gratuit</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Users className="w-16 h-16 text-primary mx-auto" />
          <h2 className="text-3xl font-bold text-foreground">
            Prêt à commencer votre recherche d'emploi?
          </h2>
          <p className="text-lg text-muted-foreground">
            Rejoignez des centaines de Congolais qui utilisent Job Finder RDC pour trouver leur emploi idéal.
          </p>
          <Link to="/chat">
            <Button size="lg">
              Commencer maintenant
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Job Finder RDC. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
