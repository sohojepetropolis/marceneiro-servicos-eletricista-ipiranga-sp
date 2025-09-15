import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import cmsLogo from "@/assets/cms-express-logo.jpg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cms-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img 
              src={cmsLogo} 
              alt="CMS Express"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm mb-4">
              Especialistas em serviços de encanamento, elétrica e marcenaria 
              para os bairros nobres da zona sul de São Paulo.
            </p>
            <Button 
              variant="whatsapp" 
              size="sm"
              onClick={() => window.open("https://wa.me/5511920041659", "_blank")}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cms-red">Serviços</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Encanamento Residencial</li>
              <li>Instalações Elétricas</li>
              <li>Marcenaria e Móveis</li>
              <li>Reparos Emergenciais</li>
              <li>Manutenção Preventiva</li>
              <li>Orçamento Gratuito</li>
            </ul>
          </div>

          {/* Coverage Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cms-red">Principais Bairros</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Moema</li>
              <li>Brooklin</li>
              <li>Campo Belo</li>
              <li>Vila Olímpia</li>
              <li>Cidade Jardim</li>
              <li>Itaim Bibi</li>
              <li>Vila Nova Conceição</li>
              <li>Jardim Paulista</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cms-red">Contato</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cms-red" />
                <span>(11) 92004-1659</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cms-red" />
                <span>contato@cmsexpress.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cms-red" />
                <span>Zona Sul - São Paulo/SP</span>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-400">
                  Horário de Atendimento:
                </p>
                <p className="text-xs text-gray-300">
                  Segunda a Sábado - 08:00 às 18:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} CMS Express. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-400 hover:text-cms-red text-sm transition-smooth"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-400 hover:text-cms-red text-sm transition-smooth"
              >
                Serviços
              </button>
              <button 
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-400 hover:text-cms-red text-sm transition-smooth"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};