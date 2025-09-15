import { ServicePage } from "@/components/ServicePage";
import { services } from "@/data/neighborhoods";
import { useSEO } from "@/hooks/useSEO";

const PlumbingPage = () => {
  const plumbingService = services.find(s => s.slug === "encanador")!;
  
  useSEO({
    title: "Encanador na Zona Sul de São Paulo - Atendimento 24h | CMS Express",
    description: "Serviços de encanamento em Moema, Brooklin, Campo Belo e região. Desentupimento, vazamentos, instalação de torneiras. Orçamento grátis: (11) 92004-1659",
    keywords: "encanador zona sul, encanador moema, encanador brooklin, encanador ipiranga, desentupimento zona sul, vazamento são paulo",
    canonical: `${window.location.origin}/encanador`
  });
  
  return <ServicePage service={plumbingService} />;
};

export default PlumbingPage;