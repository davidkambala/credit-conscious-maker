import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { MessageSquare, FileText, Briefcase, MapPin, Sparkles, Users, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
const Home = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroBackground})`
      }} />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        
        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-white text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              Intelligence Artificielle au service de votre carrière
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Trouvez votre emploi de rêve en{" "}
              <span className="text-primary">RDC</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Job Finder RDC est votre assistant intelligent qui vous aide à découvrir les meilleures 
              opportunités d'emploi à Kinshasa, Lubumbashi et Goma, et génère des CV professionnels 
              adaptés à chaque poste.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/chat">
                <Button size="lg" className="w-full sm:w-auto text-base group">
                  <MessageSquare className="w-5 h-5" />
                  Discuter avec l'assistant
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/jobs">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base">
                  <Briefcase className="w-5 h-5" />
                  Voir les emplois
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Pourquoi choisir Job Finder RDC?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Assistant Intelligent</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discutez avec notre chatbot IA pour trouver des emplois adaptés à vos compétences 
                et préférences en quelques secondes.
              </p>
            </Card>
            
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Génération de CV</h3>
              <p className="text-muted-foreground leading-relaxed">
                Créez automatiquement des CV professionnels personnalisés pour chaque offre d'emploi 
                pour maximiser vos chances.
              </p>
            </Card>
            
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Emplois Locaux</h3>
              <p className="text-muted-foreground leading-relaxed">
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
      <section className="py-24 px-4 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="inline-flex p-4 rounded-2xl bg-primary/20 mb-4">
            <Users className="w-16 h-16 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Prêt à commencer votre recherche d'emploi?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto my-[20px]">
            Rejoignez des centaines de Congolais qui utilisent Job Finder RDC pour trouver leur emploi idéal.
          </p>
          <Link to="/chat">
            <Button size="lg" className="text-base group my-[50px]">
              Commencer maintenant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 Job Finder RDC. Tous droits réservés.</p>
        </div>
      </footer>
    </div>;
};
export default Home;