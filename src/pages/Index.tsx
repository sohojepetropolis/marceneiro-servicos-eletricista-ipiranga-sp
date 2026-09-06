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
    title: "Encanador, Eletricista e Marcenaria SP | MAGNVITA",
    description: "Encanador, eletricista e marceneiro na zona sul de São Paulo. Atendimento ágil em Moema, Brooklin, Ipiranga e região. Orçamento grátis: (11) 97748-0538.",
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
