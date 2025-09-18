import { ServicePage } from "@/components/ServicePage";
import { services } from "@/data/neighborhoods";
import { useSEO } from "@/hooks/useSEO";

const FurnitureAssemblyPage = () => {
  const furnitureAssemblyService = services.find(s => s.slug === "montador-de-moveis")!;
  
  useSEO({
    title: "Montador de Móveis na Zona Sul de São Paulo - Montagem Profissional | CMS Express",
    description: "Serviços de montagem de móveis em Moema, Brooklin, Campo Belo e região. Montagem planejados, estantes, guarda-roupas. Orçamento grátis: (11) 92004-1659",
    keywords: "montador móveis zona sul, montagem móveis moema, montador móveis brooklin, montagem móveis ipiranga, montador profissional são paulo",
    canonical: `${window.location.origin}/montador-de-moveis`
  });
  
  return <ServicePage service={furnitureAssemblyService} />;
};

export default FurnitureAssemblyPage;