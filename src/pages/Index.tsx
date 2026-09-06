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
    title: "Marido de Aluguel no Ipiranga | MAGNVITA Manutenção",
    description: "Marido de aluguel e manutenção residencial no Ipiranga: reparos hidráulicos, elétricos, marcenaria e montagem de móveis. Orçamento grátis: (11) 97748-0538.",
    keywords: "marido de aluguel ipiranga, manutenção residencial ipiranga, pequenos reparos ipiranga, encanador ipiranga, eletricista ipiranga, montador de móveis ipiranga",
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
