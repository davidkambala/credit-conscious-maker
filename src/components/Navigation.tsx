import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, MessageSquare, List, Mail } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="border-b border-border bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Job Finder RDC</h1>
              <p className="text-xs text-muted-foreground">Votre assistant emploi intelligent</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-2">
            <Link to="/">
              <Button variant={isActive("/") ? "default" : "ghost"} size="sm">
                <Briefcase className="w-4 h-4" />
                Accueil
              </Button>
            </Link>
            <Link to="/chat">
              <Button variant={isActive("/chat") ? "default" : "ghost"} size="sm">
                <MessageSquare className="w-4 h-4" />
                Chat
              </Button>
            </Link>
            <Link to="/jobs">
              <Button variant={isActive("/jobs") ? "default" : "ghost"} size="sm">
                <List className="w-4 h-4" />
                Emplois
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant={isActive("/contact") ? "default" : "ghost"} size="sm">
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </Link>
          </nav>
          
          {/* Mobile navigation */}
          <nav className="flex md:hidden items-center gap-1">
            <Link to="/">
              <Button variant={isActive("/") ? "default" : "ghost"} size="icon">
                <Briefcase className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/chat">
              <Button variant={isActive("/chat") ? "default" : "ghost"} size="icon">
                <MessageSquare className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/jobs">
              <Button variant={isActive("/jobs") ? "default" : "ghost"} size="icon">
                <List className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant={isActive("/contact") ? "default" : "ghost"} size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
