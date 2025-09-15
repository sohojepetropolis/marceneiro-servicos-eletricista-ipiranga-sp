import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Zap, Hammer, Phone } from "lucide-react";
import encanadorImage from "@/assets/encanador-cms-express.png";
import eletricistaImage from "@/assets/eletricista-cms-express.png";
import marcenariaImage from "@/assets/marcenaria-cms-express.png";

export const ServicesSection = () => {
  const services = [
    {
      title: "Serviços de Encanamento",
      icon: <Wrench className="h-8 w-8 text-cms-red" />,
      image: encanadorImage,
      description: "Soluções completas em sistemas hidráulicos para sua residência",
      services: [
        "Instalação e reparo de torneiras e registros",
        "Desentupimento de pias, ralos e vasos sanitários",
        "Troca e instalação de chuveiros e duchas",
        "Reparo de vazamentos em tubulações",
        "Instalação de louças sanitárias",
        "Manutenção de sistemas de água quente",
        "Instalação de filtros e purificadores",
        "Serviços de emergência 24h"
      ]
    },
    {
      title: "Serviços Elétricos",
      icon: <Zap className="h-8 w-8 text-cms-red" />,
      image: eletricistaImage,
      description: "Instalações elétricas seguras e eficientes para seu lar",
      services: [
        "Instalação de tomadas e interruptores",
        "Troca de disjuntores e quadros elétricos",
        "Instalação de luminárias e spots",
        "Cabeamento de rede e telefonia",
        "Instalação de ventiladores de teto",
        "Sistemas de automação residencial",
        "Manutenção preventiva elétrica",
        "Laudos e certificações elétricas"
      ]
    },
    {
      title: "Serviços de Marcenaria",
      icon: <Hammer className="h-8 w-8 text-cms-red" />,
      image: marcenariaImage,
      description: "Móveis sob medida e soluções em madeira de alta qualidade",
      services: [
        "Montagem de móveis planejados",
        "Instalação de prateleiras e nichos",
        "Reparo de móveis e gavetas",
        "Instalação de portas e batentes",
        "Móveis sob medida personalizados",
        "Instalação de rodapés e molduras",
        "Serviços de carpintaria residencial",
        "Restauração de móveis antigos"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-cms-black mb-4">
            Nossos <span className="text-cms-red">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em encanamento, elétrica e marcenaria, 
            com a qualidade e agilidade que os bairros nobres da zona sul merecem.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-cms-gray rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cms-red group-hover:text-white transition-smooth">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-cms-black mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - CMS Express zona sul São Paulo`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cms-red rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="cms" 
                  className="w-full"
                  onClick={() => window.open("https://wa.me/5511920041659", "_blank")}
                >
                  <Phone className="h-4 w-4" />
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open("https://wa.me/5511920041659", "_blank")}
          >
            <Phone className="h-5 w-5" />
            Falar com Especialista no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};