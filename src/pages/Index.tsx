import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { NeighborhoodsSection } from "@/components/NeighborhoodsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ServiceBreadcrumb } from "@/components/ServiceBreadcrumb";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Serviços de Encanador, Eletricista e Marcenaria em Bairros Nobres da Zona Sul de São Paulo | CMS Express",
    description: "Especialistas em encanamento, marcenaria e elétrica para Moema, Brooklin, Campo Belo e região nobre da zona sul. Atendimento ágil e profissional. Fale com a CMS Express: (11) 92004-1659",
    keywords: "encanador zona sul são paulo, eletricista moema, marcenaria brooklin, serviços domésticos bairros nobres, ipiranga",
    canonical: window.location.origin
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceBreadcrumb isHomePage={true} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <NeighborhoodsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
