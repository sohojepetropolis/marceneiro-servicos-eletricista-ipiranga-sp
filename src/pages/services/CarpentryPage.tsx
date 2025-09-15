import { ServicePage } from "@/components/ServicePage";
import { services } from "@/data/neighborhoods";
import { useSEO } from "@/hooks/useSEO";

const CarpentryPage = () => {
  const carpentryService = services.find(s => s.slug === "marcenaria")!;
  
  useSEO({
    title: "Marcenaria na Zona Sul de São Paulo - Móveis Sob Medida | CMS Express",
    description: "Serviços de marcenaria em Brooklin, Campo Belo, Jardim Paulista e região. Móveis planejados, montagem, reparos. Orçamento grátis: (11) 92004-1659",
    keywords: "marcenaria zona sul, marcenaria brooklin, marcenaria campo belo, marcenaria ipiranga, móveis sob medida são paulo",
    canonical: `${window.location.origin}/marcenaria`
  });
  
  return <ServicePage service={carpentryService} />;
};

export default CarpentryPage;