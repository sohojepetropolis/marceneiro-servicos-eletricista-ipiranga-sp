import { ServicePage } from "@/components/ServicePage";
import { services } from "@/data/neighborhoods";
import { useSEO } from "@/hooks/useSEO";

const ElectricalPage = () => {
  const electricalService = services.find(s => s.slug === "eletricista")!;
  
  useSEO({
    title: "Eletricista na Zona Sul de São Paulo - Instalação e Manutenção | CMS Express",
    description: "Serviços elétricos em Moema, Vila Olímpia, Itaim Bibi e região. Instalação de tomadas, disjuntores, iluminação. Orçamento grátis: (11) 92004-1659",
    keywords: "eletricista zona sul, eletricista moema, eletricista vila olimpia, eletricista ipiranga, instalação elétrica são paulo",
    canonical: `${window.location.origin}/eletricista`
  });
  
  return <ServicePage service={electricalService} />;
};

export default ElectricalPage;