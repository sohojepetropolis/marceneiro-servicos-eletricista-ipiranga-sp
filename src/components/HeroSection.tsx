import { Button } from "@/components/ui/button";
import { Phone, CheckCircle } from "lucide-react";
import equipeImage from "@/assets/equipe-cms-express.png";
import escritorioImage from "@/assets/escritorio-cms-express.png";

export const HeroSection = () => {
  return (
    <section id="inicio" className="bg-gradient-section pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-cms-black mb-6 leading-tight">
              <span className="text-cms-red">Marido de Aluguel</span> no Ipiranga: 
              manutenção residencial e pequenos reparos com hora marcada
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              A MAGNVITA resolve reparos hidráulicos, elétricos, marcenaria e montagem 
              de móveis no Ipiranga e bairros vizinhos, com atendimento ágil e preço fechado antes de começar.
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cms-red" />
                <span className="text-foreground">Profissionais certificados e experientes</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cms-red" />
                <span className="text-foreground">Atendimento no Ipiranga e região no mesmo dia</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cms-red" />
                <span className="text-foreground">Orçamento rápido e transparente</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cms-red" />
                <span className="text-foreground">Garantia em todos os serviços</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => {
                  const message = "Olá! Vi os serviços no site da MAGNVITA e gostaria de solicitar um orçamento para manutenção residencial no Ipiranga.";
                  window.open(`https://wa.me/5511977480538?text=${encodeURIComponent(message)}`, "_blank");
                }}
              >
                <Phone className="h-5 w-5" />
                Solicitar Orçamento Grátis
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conhecer Serviços
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              <img 
                src={escritorioImage} 
                alt="Escritório da MAGNVITA Marido de Aluguel, empresa de manutenção residencial no Ipiranga, São Paulo"
                className="rounded-2xl shadow-elegant w-full h-64 object-cover"
              />
              <img 
                src={equipeImage} 
                alt="Equipe MAGNVITA de marido de aluguel, encanadores, eletricistas e marceneiros que atendem o Ipiranga e região"
                className="rounded-2xl shadow-elegant w-full h-64 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-card">
              <div className="text-center">
                <div className="text-2xl font-bold text-cms-red">5+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};