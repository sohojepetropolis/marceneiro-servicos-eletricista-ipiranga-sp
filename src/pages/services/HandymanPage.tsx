import { ServicePage } from "@/components/ServicePage";
import { services } from "@/data/neighborhoods";
import { useSEO } from "@/hooks/useSEO";

const HandymanPage = () => {
  const handymanService = services.find(s => s.slug === "marido-de-aluguel")!;

  useSEO({
    title: "Marido de Aluguel no Ipiranga - Manutenção Residencial | MAGNVITA",
    description: "Marido de aluguel no Ipiranga e região: pequenos reparos hidráulicos, elétricos, montagem de móveis e manutenção residencial. Orçamento grátis: (11) 97748-0538.",
    keywords: "marido de aluguel ipiranga, manutenção residencial ipiranga, marido de aluguel são paulo, pequenos reparos ipiranga, marido de aluguel zona sul",
    canonical: `${window.location.origin}/marido-de-aluguel`
  });

  return <ServicePage service={handymanService} />;
};

export default HandymanPage;
