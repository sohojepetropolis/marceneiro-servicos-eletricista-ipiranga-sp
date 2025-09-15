import { useParams } from "react-router-dom";
import { ServicePage } from "@/components/ServicePage";
import { services, neighborhoods } from "@/data/neighborhoods";
import { useSEO } from "@/hooks/useSEO";
import NotFound from "@/pages/NotFound";

const ServiceNeighborhoodPage = () => {
  const { serviceSlug, neighborhoodSlug } = useParams();
  
  const service = services.find(s => s.slug === serviceSlug);
  const neighborhood = neighborhoods.find(n => n.slug === neighborhoodSlug);
  
  if (!service || !neighborhood) {
    return <NotFound />;
  }

  useSEO({
    title: `${service.name} em ${neighborhood.name} - Atendimento Rápido | CMS Express`,
    description: `${service.name} especializado em ${neighborhood.name}. ${service.description}. Orçamento grátis: (11) 92004-1659`,
    keywords: `${service.slug} ${neighborhood.slug}, ${service.slug} ${neighborhood.name}, serviços ${neighborhood.name}, ${service.slug} zona sul`,
    canonical: `${window.location.origin}/${serviceSlug}-${neighborhoodSlug}`
  });
  
  return <ServicePage service={service} neighborhood={neighborhood} />;
};

export default ServiceNeighborhoodPage;