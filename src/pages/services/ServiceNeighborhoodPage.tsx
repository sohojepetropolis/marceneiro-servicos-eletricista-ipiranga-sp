import { useParams } from "react-router-dom";
import { ServicePage } from "@/components/ServicePage";
import { services, neighborhoods } from "@/data/neighborhoods";
import { useSEO } from "@/hooks/useSEO";
import NotFound from "@/pages/NotFound";

const ServiceNeighborhoodPage = () => {
  const { serviceSlug, neighborhoodSlug, combined } = useParams();

  console.info('ServiceNeighborhoodPage params:', { serviceSlug, neighborhoodSlug, combined });

  // Normalize slugs (lowercase, trim, remove accents, replace spaces with hyphens)
  const normalize = (str?: string) =>
    (str ?? '')
      .toString()
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-');

  let finalServiceSlug = serviceSlug;
  let finalNeighborhoodSlug = neighborhoodSlug;

  // Handle combined parameter (fallback route): match the longest known service slug prefix
  if (combined && !serviceSlug && !neighborhoodSlug) {
    const full = normalize(combined);
    const match = [...services]
      .sort((a, b) => b.slug.length - a.slug.length)
      .find((s) => full.startsWith(`${normalize(s.slug)}-`));

    if (match) {
      finalServiceSlug = match.slug;
      finalNeighborhoodSlug = full.substring(normalize(match.slug).length + 1);
    } else {
      const hyphenIndex = full.indexOf('-');
      if (hyphenIndex > 0) {
        finalServiceSlug = full.substring(0, hyphenIndex);
        finalNeighborhoodSlug = full.substring(hyphenIndex + 1);
      }
    }
  }

  const sSlug = normalize(finalServiceSlug);
  const nSlug = normalize(finalNeighborhoodSlug);

  const service = services.find((s) => normalize(s.slug) === sSlug || normalize(s.name) === sSlug);
  const neighborhood = neighborhoods.find((n) => normalize(n.slug) === nSlug || normalize(n.name) === nSlug);

  if (!service || !neighborhood) {
    console.error('404 Service/Neighborhood not found', {
      received: { serviceSlug, neighborhoodSlug, combined, finalServiceSlug, finalNeighborhoodSlug, sSlug, nSlug },
      availableServices: services.map((s) => s.slug),
      availableNeighborhoods: neighborhoods.map((n) => n.slug),
    });
    return <NotFound />;
  }

  useSEO({
    title: `${service.name} em ${neighborhood.name} | MAGNVITA`,
    description: `${service.name} em ${neighborhood.name}, zona sul de SP. Atendimento ágil e orçamento grátis: (11) 97748-0538.`,
    keywords: `${service.slug} ${neighborhood.slug}, ${service.slug} ${neighborhood.name}, serviços ${neighborhood.name}, ${service.slug} zona sul`,
    canonical: `${window.location.origin}/${sSlug}-${nSlug}`
  });
  
  return <ServicePage service={service} neighborhood={neighborhood} />;
};

export default ServiceNeighborhoodPage;