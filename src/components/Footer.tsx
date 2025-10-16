import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* App Info */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">Job Finder RDC</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Votre assistant intelligent pour trouver les meilleures opportunités d'emploi 
              en RDC et créer des CV professionnels adaptés à chaque poste.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Assistant IA
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Offres d'emploi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">contact@jobfinderrdc.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">+243 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Job Finder RDC. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
