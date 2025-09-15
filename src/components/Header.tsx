import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import cmsLogo from "@/assets/cms-express-logo.jpg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={cmsLogo} 
              alt="CMS Express - Serviços de Encanador, Eletricista e Marcenaria"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-cms-red transition-smooth"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-cms-red transition-smooth"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-cms-red transition-smooth"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("bairros")}
              className="text-foreground hover:text-cms-red transition-smooth"
            >
              Bairros Atendidos
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-cms-red transition-smooth"
            >
              Contato
            </button>
          </nav>

          {/* WhatsApp Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="whatsapp" 
              size="sm"
              className="hidden sm:flex"
              onClick={() => window.open("https://wa.me/5511920041659", "_blank")}
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection("inicio")}
                className="text-left py-2 text-foreground hover:text-cms-red transition-smooth"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection("sobre")}
                className="text-left py-2 text-foreground hover:text-cms-red transition-smooth"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection("servicos")}
                className="text-left py-2 text-foreground hover:text-cms-red transition-smooth"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection("bairros")}
                className="text-left py-2 text-foreground hover:text-cms-red transition-smooth"
              >
                Bairros Atendidos
              </button>
              <button 
                onClick={() => scrollToSection("contato")}
                className="text-left py-2 text-foreground hover:text-cms-red transition-smooth"
              >
                Contato
              </button>
              <Button 
                variant="whatsapp" 
                size="sm"
                className="mt-2 w-fit"
                onClick={() => window.open("https://wa.me/5511920041659", "_blank")}
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};