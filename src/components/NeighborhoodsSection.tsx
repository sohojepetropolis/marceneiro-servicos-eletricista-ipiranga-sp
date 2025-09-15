import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CheckCircle } from "lucide-react";

export const NeighborhoodsSection = () => {
  const neighborhoods = [
    { name: "Moema", highlight: true },
    { name: "Brooklin", highlight: true },
    { name: "Campo Belo", highlight: true },
    { name: "Vila Olímpia", highlight: true },
    { name: "Itaim Bibi", highlight: true },
    { name: "Ipiranga", highlight: true },
    { name: "Vila Nova Conceição", highlight: false },
    { name: "Jardim Paulista", highlight: false },
    { name: "Cidade Jardim", highlight: false },
    { name: "Jardim Europa", highlight: false },
    { name: "Vila Mariana", highlight: false },
    { name: "Chácara Santo Antônio", highlight: false },
    { name: "Socorro", highlight: false },
    { name: "Paraíso", highlight: false },
    { name: "Vila Cordeiro", highlight: false },
    { name: "Chácara Klabin", highlight: false },
    { name: "Planalto Paulista", highlight: false }
  ];

  return (
    <section id="bairros" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-cms-black mb-4">
            <span className="text-cms-red">Bairros</span> Atendidos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Atendemos exclusivamente os bairros mais nobres da zona sul de São Paulo, 
            garantindo proximidade e atendimento especializado para sua região.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-cms-black mb-6">
              Cobertura Estratégica na Zona Sul
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa localização privilegiada na zona sul nos permite oferecer 
              atendimento rápido e eficiente nos principais bairros nobres da região.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cms-red" />
                <span className="text-foreground">Atendimento em até 2 horas</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cms-red" />
                <span className="text-foreground">Conhecimento local especializado</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cms-red" />
                <span className="text-foreground">Equipe dedicada para cada região</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cms-red" />
                <span className="text-foreground">Visita técnica gratuita</span>
              </div>
            </div>
          </div>

          <div className="bg-cms-gray rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-cms-red mr-2" />
              <h4 className="text-lg font-semibold text-cms-black">
                Zona Sul - São Paulo
              </h4>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Nossos principais bairros de atuação estão destacados em vermelho
            </p>
          </div>
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {neighborhoods.map((neighborhood, index) => (
            <Card 
              key={index} 
              className={`text-center p-4 transition-smooth hover:shadow-card ${
                neighborhood.highlight 
                  ? 'border-cms-red bg-gradient-to-br from-cms-red/5 to-cms-red/10' 
                  : 'border-border'
              }`}
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className={`h-4 w-4 ${
                    neighborhood.highlight ? 'text-cms-red' : 'text-muted-foreground'
                  }`} />
                  <span className={`font-medium ${
                    neighborhood.highlight ? 'text-cms-black' : 'text-muted-foreground'
                  }`}>
                    {neighborhood.name}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            Não encontrou seu bairro na lista? Entre em contato conosco!
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="inline-block w-3 h-3 bg-cms-red rounded-full mr-2"></span>
            Bairros com atendimento prioritário
          </p>
        </div>
      </div>
    </section>
  );
};