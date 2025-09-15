import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, MapPin, Clock } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-cms-black mb-4">
            Sobre a <span className="text-cms-red">CMS Express</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especializada em serviços domésticos de alta qualidade, a CMS Express 
            é referência em soluções de encanamento, marcenaria e elétrica na zona sul de São Paulo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-cms-black mb-6">
              Profissionalismo e Experiência
            </h3>
            <p className="text-muted-foreground mb-6">
              Com mais de 5 anos de experiência no mercado, nossa equipe é formada por 
              profissionais certificados e especializados em atender as necessidades 
              específicas dos bairros mais exclusivos da zona sul paulistana.
            </p>
            <p className="text-muted-foreground mb-6">
              Nos destacamos pela agilidade, qualidade técnica e compromisso com a 
              satisfação do cliente. Cada projeto é executado com precisão e cuidado, 
              garantindo resultados duradouros e eficientes.
            </p>
            <p className="text-muted-foreground">
              Nossa localização estratégica na zona sul nos permite oferecer 
              atendimento rápido e personalizado, com profundo conhecimento das 
              características e necessidades dos imóveis da região.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-6 shadow-card">
              <CardContent className="p-0">
                <Users className="h-8 w-8 text-cms-red mx-auto mb-3" />
                <div className="text-2xl font-bold text-cms-black mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Profissionais</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-card">
              <CardContent className="p-0">
                <Award className="h-8 w-8 text-cms-red mx-auto mb-3" />
                <div className="text-2xl font-bold text-cms-black mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Projetos</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-card">
              <CardContent className="p-0">
                <MapPin className="h-8 w-8 text-cms-red mx-auto mb-3" />
                <div className="text-2xl font-bold text-cms-black mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Bairros</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 shadow-card">
              <CardContent className="p-0">
                <Clock className="h-8 w-8 text-cms-red mx-auto mb-3" />
                <div className="text-2xl font-bold text-cms-black mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="bg-cms-gray rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-cms-black mb-8 text-center">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cms-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-cms-black mb-2">Qualidade</h4>
              <p className="text-muted-foreground">
                Excelência técnica em cada serviço executado
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cms-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-cms-black mb-2">Agilidade</h4>
              <p className="text-muted-foreground">
                Atendimento rápido e pontualidade garantida
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cms-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-cms-black mb-2">Confiança</h4>
              <p className="text-muted-foreground">
                Transparência e compromisso com nossos clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};