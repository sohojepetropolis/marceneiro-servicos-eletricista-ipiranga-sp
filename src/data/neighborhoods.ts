export const neighborhoods = [
  {
    name: "Ipiranga",
    slug: "ipiranga",
    highlight: true,
    description: "Nossa base de atendimento: bairro histórico e residencial com forte demanda por manutenção predial e residencial"
  },
  {
    name: "Sacomã",
    slug: "sacoma",
    highlight: true,
    description: "Bairro vizinho ao Ipiranga, com muitos condomínios e casas que precisam de reparos frequentes"
  },
  {
    name: "Cambuci",
    slug: "cambuci",
    highlight: true,
    description: "Região central e tradicional, ao lado do Ipiranga, com imóveis antigos que exigem manutenção constante"
  },
  {
    name: "Vila Mariana",
    slug: "vila-mariana",
    highlight: true,
    description: "Bairro tradicional com boa infraestrutura urbana e grande número de apartamentos"
  },
  {
    name: "Mooca",
    slug: "mooca",
    highlight: true,
    description: "Bairro vizinho com casas antigas, sobrados e novos edifícios residenciais"
  },
  {
    name: "Chácara Klabin",
    slug: "chacara-klabin",
    highlight: true,
    description: "Bairro residencial arborizado com boa qualidade de vida, a poucos minutos do Ipiranga"
  },
  {
    name: "Moema",
    slug: "moema",
    highlight: false,
    description: "Bairro nobre da zona sul, conhecido por seus edifícios residenciais de alto padrão"
  },
  {
    name: "Brooklin",
    slug: "brooklin",
    highlight: false,
    description: "Região empresarial e residencial em constante crescimento"
  },
  {
    name: "Campo Belo",
    slug: "campo-belo",
    highlight: false,
    description: "Bairro residencial tradicional com excelente infraestrutura"
  },
  {
    name: "Vila Olímpia",
    slug: "vila-olimpia",
    highlight: false,
    description: "Centro empresarial moderno com alta demanda por serviços especializados"
  },
  {
    name: "Itaim Bibi",
    slug: "itaim-bibi",
    highlight: false,
    description: "Hub corporativo e residencial de luxo"
  },
  {
    name: "Vila Nova Conceição",
    slug: "vila-nova-conceicao",
    highlight: false,
    description: "Área residencial premium próxima ao Ibirapuera"
  },
  {
    name: "Jardim Paulista",
    slug: "jardim-paulista",
    highlight: false,
    description: "Bairro sofisticado com residências e comércios de alto padrão"
  },
  {
    name: "Cidade Jardim",
    slug: "cidade-jardim",
    highlight: false,
    description: "Região exclusiva com mansões e condomínios de luxo"
  },
  {
    name: "Jardim Europa",
    slug: "jardim-europa",
    highlight: false,
    description: "Área residencial nobre com casas e apartamentos de alto valor"
  },
  {
    name: "Chácara Santo Antônio",
    slug: "chacara-santo-antonio",
    highlight: false,
    description: "Região tranquila com casas e edifícios residenciais"
  },
  {
    name: "Socorro",
    slug: "socorro",
    highlight: false,
    description: "Bairro em desenvolvimento com crescente demanda por serviços"
  },
  {
    name: "Paraíso",
    slug: "paraiso",
    highlight: false,
    description: "Área central bem localizada próxima à Avenida Paulista"
  },
  {
    name: "Vila Cordeiro",
    slug: "vila-cordeiro",
    highlight: false,
    description: "Região residencial próxima ao complexo empresarial"
  },
  {
    name: "Planalto Paulista",
    slug: "planalto-paulista",
    highlight: false,
    description: "Área residencial tranquila com fácil acesso aos principais centros"
  },
];

export const services = [
  {
    name: "Marido de Aluguel",
    slug: "marido-de-aluguel",
    title: "Marido de Aluguel e Manutenção Residencial",
    description: "Todos os pequenos reparos da casa resolvidos por um profissional só, com hora marcada",
    icon: "Wrench",
    services: [
      "Pequenos reparos hidráulicos e elétricos",
      "Instalação de prateleiras, quadros e suportes de TV",
      "Montagem e ajuste de móveis",
      "Troca de tomadas, interruptores e lâmpadas",
      "Reparo de portas, fechaduras e dobradiças",
      "Vedação de box, pias e janelas",
      "Instalação de chuveiros, torneiras e duchas",
      "Retoques de pintura e acabamentos"
    ]
  },
  {
    name: "Encanador",
    slug: "encanador",
    title: "Serviços de Encanamento",
    description: "Especialistas em instalação, manutenção e reparo de sistemas hidráulicos",
    icon: "Wrench",
    services: [
      "Desentupimento de pias, vasos e ralos",
      "Instalação e reparo de torneiras",
      "Troca de registros e válvulas",
      "Reparo de vazamentos",
      "Instalação de chuveiros e duchas",
      "Manutenção de caixas d'água",
      "Instalação de aquecedores",
      "Troca de sifões e conexões"
    ]
  },
  {
    name: "Eletricista",
    slug: "eletricista", 
    title: "Serviços Elétricos",
    description: "Profissionais qualificados em instalações e reparos elétricos",
    icon: "Zap",
    services: [
      "Instalação de tomadas e interruptores",
      "Troca de disjuntores",
      "Instalação de luminárias e lustres",
      "Reparo de curto-circuitos",
      "Instalação de ventiladores de teto",
      "Manutenção de quadros elétricos",
      "Instalação de chuveiros elétricos",
      "Cabeamento para aparelhos eletrônicos"
    ]
  },
  {
    name: "Marcenaria",
    slug: "marcenaria",
    title: "Serviços de Marcenaria", 
    description: "Móveis sob medida e reparos em madeira com acabamento profissional",
    icon: "Hammer",
    services: [
      "Móveis planejados sob medida",
      "Instalação de prateleiras",
      "Reparo de portas e janelas",
      "Montagem de móveis",
      "Instalação de rodapés",
      "Criação de divisórias",
      "Restauração de móveis antigos",
      "Instalação de closets"
    ]
  },
  {
    name: "Montador de Móveis",
    slug: "montador-de-moveis",
    title: "Serviços de Montagem de Móveis",
    description: "Especialistas em montagem e instalação de móveis residenciais e comerciais",
    icon: "Wrench",
    services: [
      "Montagem de móveis planejados",
      "Montagem de estantes e prateleiras",
      "Instalação de guarda-roupas",
      "Montagem de cozinhas modulares",
      "Instalação de painéis e divisórias",
      "Montagem de mesas e cadeiras",
      "Instalação de móveis de escritório",
      "Serviços de desmontagem e remontagem"
    ]
  }
];
