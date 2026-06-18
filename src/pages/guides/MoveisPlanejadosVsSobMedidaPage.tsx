import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Check, X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511977480538";
const whatsappMessage = encodeURIComponent(
  "Olá! Vim pelo guia 'Móveis Planejados vs Sob Medida' do site e gostaria de um orçamento."
);
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

const MoveisPlanejadosVsSobMedidaPage = () => {
  useSEO({
    title: "Móveis Planejados vs Sob Medida: Qual Escolher? | Guia 2026",
    description:
      "Entenda as diferenças entre móveis planejados e sob medida: preço, prazo, materiais, acabamento e durabilidade. Guia completo para sua casa em São Paulo.",
    keywords:
      "móveis planejados, móveis sob medida, diferença móveis planejados sob medida, marcenaria são paulo, móveis planejados ou sob medida",
    canonical: `${window.location.origin}/guia-moveis-planejados-vs-sob-medida`,
  });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qual a diferença entre móveis planejados e sob medida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Móveis planejados são produzidos em larga escala com módulos padronizados que se ajustam ao seu espaço. Móveis sob medida são fabricados artesanalmente por um marceneiro, com dimensões, materiais e acabamentos 100% personalizados.",
        },
      },
      {
        "@type": "Question",
        name: "O que é mais barato: planejado ou sob medida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Em geral, móveis planejados de grandes lojas têm preço inicial menor por usarem módulos pré-fabricados. Móveis sob medida feitos por marceneiro local costumam ter melhor custo-benefício em projetos com formato irregular ou madeira maciça.",
        },
      },
      {
        "@type": "Question",
        name: "Qual dura mais tempo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Móveis sob medida em MDF de boa procedência ou madeira maciça duram mais, pois usam ferragens de qualidade e estrutura reforçada. Planejados de baixo custo podem apresentar desgaste em 5 a 7 anos.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Início</Link>
          <span className="mx-2">/</span>
          <Link to="/marcenaria" className="hover:text-primary">Marcenaria</Link>
          <span className="mx-2">/</span>
          <span>Guia: Planejados vs Sob Medida</span>
        </nav>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Móveis Planejados vs Sob Medida: qual escolher para sua casa?
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Entenda de uma vez as diferenças reais entre <strong>móveis planejados</strong> e
            <strong> móveis sob medida</strong> — preço, prazo, materiais, acabamento e
            durabilidade — para decidir qual faz mais sentido no seu projeto em São Paulo.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">O que são móveis planejados?</h2>
            <p>
              Móveis planejados são fabricados em <strong>larga escala</strong>, a partir de
              módulos padronizados (caixas em medidas fixas, como 40, 60 ou 80 cm) que são
              combinados para se adaptar ao seu ambiente. São o modelo vendido por grandes
              marcas como Dell Anno, Todeschini, Favorita e Italínea.
            </p>
            <ul>
              <li>Produção industrial em fábrica</li>
              <li>Catálogo fechado de cores, puxadores e acabamentos</li>
              <li>Projeto feito por arquiteto/designer da loja</li>
              <li>Prazo de entrega entre 30 e 60 dias</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">O que são móveis sob medida?</h2>
            <p>
              Móveis sob medida são <strong>projetados e produzidos artesanalmente</strong>
              por um marceneiro, exatamente nas medidas do seu espaço. Não existem módulos
              fixos: cada gaveta, prateleira e nicho é desenhado para o seu uso.
            </p>
            <ul>
              <li>Produção artesanal em marcenaria local</li>
              <li>Liberdade total de materiais (MDF, madeira maciça, laminados especiais)</li>
              <li>Encaixe perfeito em paredes tortas, vigas, colunas</li>
              <li>Prazo de entrega entre 20 e 45 dias</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Comparativo rápido</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">Critério</th>
                    <th className="border p-3 text-left">Planejados</th>
                    <th className="border p-3 text-left">Sob Medida</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-medium">Personalização</td>
                    <td className="border p-3"><X className="inline w-4 h-4 text-destructive" /> Limitada a módulos</td>
                    <td className="border p-3"><Check className="inline w-4 h-4 text-primary" /> Total</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Preço inicial</td>
                    <td className="border p-3">Menor (entrada)</td>
                    <td className="border p-3">Médio a alto</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Aproveitamento de espaço</td>
                    <td className="border p-3">~85%</td>
                    <td className="border p-3">100%</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Variedade de materiais</td>
                    <td className="border p-3">Limitada ao catálogo</td>
                    <td className="border p-3">Ampla (inclui madeira maciça)</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Garantia de fábrica</td>
                    <td className="border p-3"><Check className="inline w-4 h-4 text-primary" /> 5 anos</td>
                    <td className="border p-3">Acordada com o marceneiro</td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-medium">Durabilidade média</td>
                    <td className="border p-3">7 a 10 anos</td>
                    <td className="border p-3">15+ anos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Quando escolher cada um?</h2>
            <h3 className="text-xl font-semibold mt-6 mb-2">Escolha planejados se:</h3>
            <ul>
              <li>O ambiente tem formato regular (retangular, sem muitos recortes)</li>
              <li>Você prioriza prazo e garantia de marca</li>
              <li>Quer acabamentos modernos prontos do catálogo</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-2">Escolha sob medida se:</h3>
            <ul>
              <li>O espaço é pequeno, irregular ou tem vigas/colunas</li>
              <li>Você quer madeira maciça, freijó, carvalho ou laminados premium</li>
              <li>Busca aproveitamento total do ambiente e detalhes únicos</li>
              <li>Quer trabalhar com um marceneiro local e acompanhar a produção</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Perguntas frequentes</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Móveis sob medida são mais caros?</h3>
            <p>
              Nem sempre. Em projetos pequenos ou com formato complicado, o sob medida
              costuma sair mais em conta que ajustar módulos planejados com peças extras.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Posso misturar os dois?</h3>
            <p>
              Sim. Muitos clientes usam planejados em quartos e cozinha e sob medida em
              home office, closets e living, onde o encaixe perfeito faz mais diferença.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Qual MDF é melhor?</h3>
            <p>
              Para ambientes úmidos (cozinha, banheiro, área externa), prefira MDF
              hidrófugo. Para quartos e sala, o MDF comum BP de boa procedência atende
              perfeitamente.
            </p>
          </section>

          <section className="bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Quer um orçamento sem compromisso?</h2>
            <p className="mb-6 text-muted-foreground">
              Atendemos toda a Zona Sul de São Paulo com marcenaria sob medida de alto padrão.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/marcenaria">Ver serviços de marcenaria</Link>
              </Button>
            </div>
          </section>
        </article>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default MoveisPlanejadosVsSobMedidaPage;
