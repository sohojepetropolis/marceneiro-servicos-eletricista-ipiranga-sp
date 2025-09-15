import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { NeighborhoodMap } from "@/components/NeighborhoodMap";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { neighborhoods } from "@/data/neighborhoods";
import { Link } from "react-router-dom";
import { Wrench, Zap, Hammer, Clock, Shield, MapPin, Phone } from "lucide-react";

interface ServicePageProps {
  service: {
    name: string;
    slug: string;
    title: string;
    description: string;
    icon: string;
    services: string[];
  };
  neighborhood?: {
    name: string;
    slug: string;
    description: string;
  };
}

const iconMap = {
  Wrench: Wrench,
  Zap: Zap,
  Hammer: Hammer,
};

export const ServicePage = ({ service, neighborhood }: ServicePageProps) => {
  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const whatsappNumber = "5511920041659";
  const serviceArea = neighborhood ? neighborhood.name : "Zona Sul de São Paulo";
  
  const whatsappMessage = neighborhood 
    ? `Olá! Preciso de um ${service.name.toLowerCase()} em ${neighborhood.name}. Gostaria de solicitar um orçamento.`
    : `Olá! Preciso de um ${service.name.toLowerCase()} na zona sul. Gostaria de solicitar um orçamento.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceBreadcrumb 
        serviceName={service.name} 
        neighborhoodName={neighborhood?.name}
      />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary-dark to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {serviceArea}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">
                    {service.name} {neighborhood ? `em ${neighborhood.name}` : "na Zona Sul"}
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                {service.description} {neighborhood ? `em ${neighborhood.name}` : "na zona sul de São Paulo"}. 
                Atendimento rápido e profissional.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Orçamento Grátis
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white hover:text-primary transition-smooth"
                  asChild
                >
                  <a href="#servicos">Ver Todos os Serviços</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Atendimento Rápido</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {neighborhood 
                      ? `Atendimento em ${neighborhood.name} em até 2 horas`
                      : "Atendimento na zona sul em até 2 horas"
                    }
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Garantia de Qualidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Todos os nossos serviços têm garantia e são executados por profissionais qualificados
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Especialistas Locais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Conhecemos bem a região e oferecemos soluções específicas para cada localidade
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services List Section */}
        <section id="servicos" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Nossos Serviços de {service.name}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Oferecemos uma gama completa de serviços especializados para atender todas as suas necessidades
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {service.services.map((serviceItem, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg mt-1">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{serviceItem}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Falar com Especialista no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Neighborhood-specific section */}
        {neighborhood && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">
                      Por que escolher nossos serviços em {neighborhood.name}?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {neighborhood.description}. Nossa equipe conhece bem a região e oferece 
                      atendimento personalizado para as necessidades específicas do bairro.
                    </p>
                    
                    <div className="grid md:grid-cols-1 gap-8 text-left">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Vantagens do nosso atendimento:</h3>
                        <ul className="space-y-2 text-muted-foreground mb-6">
                          <li>• Conhecimento específico da região</li>
                          <li>• Tempo de resposta otimizado</li>
                          <li>• Materiais adequados para cada tipo de imóvel</li>
                          <li>• Relacionamento de confiança com síndicos e administradoras</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Atendimento especializado:</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Orçamento gratuito e transparente</li>
                          <li>• Profissionais uniformizados e identificados</li>
                          <li>• Garantia em todos os serviços</li>
                          <li>• Pagamento facilitado (dinheiro, PIX, cartão)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <NeighborhoodMap neighborhood={neighborhood} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Other Neighborhoods Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Também atendemos outros bairros
              </h2>
              <p className="text-lg text-muted-foreground">
                Confira todos os bairros onde oferecemos nossos serviços de {service.name.toLowerCase()}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {neighborhoods
                .filter(n => !neighborhood || n.slug !== neighborhood.slug)
                .slice(0, 12)
                .map((n) => (
                <Link
                  key={n.slug}
                  to={`/${service.slug}-${n.slug}`}
                  className="group"
                >
                  <Card className="hover:shadow-lg transition-all hover:border-primary/50">
                    <CardContent className="p-4 text-center">
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {n.name}
                      </p>
                      {n.highlight && (
                        <Badge variant="secondary" className="mt-2 text-xs">
                          Atendimento Priority
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};
