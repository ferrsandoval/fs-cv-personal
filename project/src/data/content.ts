import type { Job, Localized, Project, SkillCategory, Stat } from "../types";

export const L = {
  navAbout: { es: "Sobre mí", en: "About" },
  navExp: { es: "Experiencia", en: "Experience" },
  navProjects: { es: "Proyectos", en: "Projects" },
  navContact: { es: "Contacto", en: "Contact" },
  heroKicker: { es: "AI Specialist · IA Aplicada", en: "AI Specialist · Applied AI" },
  heroSub: {
    es: "Desarrollo de soluciones con IA aplicada · Operaciones",
    en: "Applied-AI solutions development · Operations",
  },
  heroTag: {
    es: "Del prototipo a producción — construyo IA que funciona en el mundo real. Entiendo el código y el KPI que ese código debe mejorar.",
    en: "From prototype to production — I build AI that works in the real world. I understand the code and the KPI that code must move.",
  },
  heroCta1: { es: "Ver proyectos →", en: "View projects →" },
  heroCta2: { es: "Contáctame", en: "Get in touch" },
  aboutKicker: { es: "Sobre mí", en: "About" },
  yearsWord: { es: "años", en: "years" },
  locLabel: { es: "Hermosillo, Sonora · México", en: "Hermosillo, Sonora · Mexico" },
  aboutTitle: { es: "Código que entiende el negocio.", en: "Code that understands the business." },
  aboutP1: {
    es: "Soy ingeniero en Mecatrónica con más de 10 años de experiencia en distintos entornos, combinando desarrollo de software con liderazgo operativo real. Mi trabajo vive en la intersección entre la ingeniería y el negocio.",
    en: "I am a Mechatronics engineer with 10+ years of experience across different environments, combining software development with real operational leadership. My work lives at the intersection of engineering and business.",
  },
  aboutP2: {
    es: "Construyo asistentes de IA con Retrieval-Augmented Generation (RAG), automatizo la generación de propuestas comerciales con LLMs, y diseño pipelines que transforman documentos no estructurados en datos listos para integraciones — mientras dirijo la optimización de inventarios y procesos comerciales de una empresa de equipamiento industrial.",
    en: "I build AI assistants with Retrieval-Augmented Generation (RAG), automate commercial-proposal generation with LLMs, and design pipelines that turn unstructured documents into integration-ready data — while leading inventory optimization and commercial processes for an industrial-equipment company.",
  },
  aboutQuote: {
    es: "No solo sé construir soluciones de IA — sé exactamente qué problema de negocio deben resolver.",
    en: "I don't just know how to build AI solutions — I know exactly which business problem they must solve.",
  },
  expKicker: { es: "Trayectoria", en: "Track record" },
  expTitle: { es: "Experiencia", en: "Experience" },
  projKicker: { es: "Trabajo", en: "Work" },
  projTitle: { es: "Proyectos destacados", en: "Featured projects" },
  projSub: {
    es: "Soluciones de IA aplicada llevadas a producción — de asistentes RAG a motores predictivos.",
    en: "Applied-AI solutions shipped to production — from RAG assistants to predictive engines.",
  },
  seeMore: { es: "Ver detalle", en: "View detail" },
  demoLabel: { es: "Vista previa · demo", en: "Preview · demo" },
  backToPortfolio: { es: "← Volver al portafolio", en: "← Back to portfolio" },
  comingSoon: { es: "Demo interactiva en construcción", en: "Interactive demo coming soon" },
  comingSoonSub: {
    es: "Esta demo completa todavía no está lista — por ahora te dejamos la vista previa del proyecto.",
    en: "The full interactive demo isn't ready yet — here's the project preview in the meantime.",
  },
  skillKicker: { es: "Stack", en: "Stack" },
  skillTitle: { es: "Competencias", en: "Skills" },
  eduKicker: { es: "Formación", en: "Background" },
  eduTitle: { es: "Educación", en: "Education" },
  eduDegree: { es: "Ingeniería en Mecatrónica", en: "Mechatronics Engineering" },
  eduHonor: { es: "Mención Honorífica · 3.8/4.0", en: "Honors · 3.8/4.0 GPA" },
  eduSchool: {
    es: "Universidad La Salle Noroeste, Cd. Obregón · 2010 – 2014",
    en: "Universidad La Salle Noroeste, Cd. Obregón · 2010 – 2014",
  },
  thesisWord: { es: "Tesis", en: "Thesis" },
  certWord: { es: "Certificaciones", en: "Certifications" },
  nowLabel: { es: "Actual", en: "Current" },
  eduThesis: {
    es: "Desarrollo de un tablero de semáforos y documentación de patente para monitorear eventos de control en líneas de producción secuenciales.",
    en: "Development of a signal-light dashboard and patent documentation to monitor control events in sequential production lines.",
  },
  contactTitle: { es: "¿Tienes un proyecto que necesita IA aplicada?", en: "Have a project that needs applied AI?" },
  contactSub: { es: "Hablemos de cómo puedo ayudarte a construirlo.", en: "Let's talk about how I can help you build it." },
} satisfies Record<string, Localized>;

export const EXP: Job[] = [
  {
    period: "02/2022 – Presente",
    company: "SonoraCloud",
    place: "Hermosillo, Sonora",
    current: true,
    role: { es: "Freelance Developer", en: "Freelance Developer" },
    desc: {
      es: "Diseño y mantengo apps web y móviles full-stack para clientes en México y EE.UU. Desarrollamos sitios corporativos entendiendo el core del negocio de cada cliente para conectar con el talento que buscan. También construí una plataforma de operaciones electorales con mapas interactivos y un chatbot de IA, y arquitecté una plataforma de enriquecimiento de datos para un cliente fintech con cumplimiento normativo.",
      en: "I design and maintain full-stack web & mobile apps for clients in Mexico and the US. We build corporate websites by understanding each client's business core to connect with the talent they seek. I also built an electoral-operations platform with interactive maps and an AI chatbot, and architected a compliance-ready data-enrichment platform for a fintech client.",
    },
  },
  {
    period: "11/2020 – Presente",
    company: "AINSA / OneWorks",
    place: "Hermosillo, Sonora",
    current: true,
    role: { es: "Líder de Operación · División Cocinas Industriales", en: "Operations Lead · Industrial Kitchens Division" },
    desc: {
      es: "Dirijo la operación de la división de cocinas industriales: coordino equipos de trabajo, clientes y proveedores, y optimizo procesos de punta a punta. Implementé IA y desarrollé LLMs propios para la gestión de la operación, además de sistemas de automatización de cotización y la infraestructura cloud que sostiene el ERP.",
      en: "I lead the operation of the industrial-kitchens division: coordinating teams, clients and suppliers, and optimizing end-to-end processes. I implemented AI and built in-house LLMs to manage the operation, plus quote-automation systems and the cloud infrastructure running the ERP.",
    },
  },
  {
    period: "04/2017 – 12/2021",
    company: "Inst. Sonorense de la Mujer",
    place: "Hermosillo, Sonora",
    role: { es: "Director de Evaluación y Seguimiento Técnico", en: "Director of Evaluation & Technical Follow-up" },
    desc: {
      es: "Coordiné el diseño del sistema interno de información y control, y definí los indicadores (KPIs) que permitieron dar seguimiento basado en datos a los programas de la institución.",
      en: "Coordinated the design of the internal information and control system, and defined the KPIs enabling data-driven tracking of the institution's programs.",
    },
  },
  {
    period: "09/2015 – 03/2017",
    company: "CECOP · Gob. de Sonora",
    place: "Hermosillo, Sonora",
    role: { es: "Consultor de Estrategia Digital", en: "Digital Strategy Consultant" },
    desc: {
      es: "Diseñé el sistema de información de beneficiarios del Gobierno del Estado y di seguimiento a sus indicadores clave.",
      en: "Designed the State Government's beneficiary information system and tracked its key indicators.",
    },
  },
];

export const PROJ: Project[] = [
  {
    slug: "rag",
    icon: "💬",
    mock: "chat",
    name: { es: "Asistente de IA para empresas (RAG)", en: "Enterprise AI assistant (RAG)" },
    desc: {
      es: "Chatbot conversacional que responde sobre documentación interna combinando embeddings, búsqueda semántica y LLMs.",
      en: "Conversational chatbot answering questions over internal docs by combining embeddings, semantic search and LLMs.",
    },
    longDesc: {
      es: "Un chatbot que indexa la documentación interna en una base vectorial y responde con contexto real: recupera los fragmentos relevantes vía búsqueda semántica y los pasa a un LLM para generar respuestas citadas. Reduce drásticamente el tiempo que el equipo pierde buscando en manuales, políticas y procedimientos.",
      en: "A chatbot that indexes internal documentation in a vector store and answers with real context: it retrieves the relevant chunks via semantic search and passes them to an LLM to produce cited answers. It drastically cuts the time teams waste digging through manuals and policies.",
    },
    tags: ["RAG", "LLMs", "Embeddings"],
  },
  {
    slug: "proposals",
    icon: "📄",
    mock: "proposal",
    name: { es: "Generación de propuestas comerciales", en: "Automated commercial proposals" },
    desc: {
      es: "Automatización de cotizaciones y propuestas técnicas con LLMs, reduciendo el tiempo de horas a minutos.",
      en: "Automating quotes and technical proposals with LLMs, cutting turnaround from hours to minutes.",
    },
    longDesc: {
      es: "Sistema que toma los requerimientos del cliente y genera cotizaciones y propuestas técnicas completas con LLMs, respetando plantillas, precios y condiciones de la empresa. Lo que tomaba horas de trabajo manual ahora sale en minutos, con un formato consistente.",
      en: "A system that takes client requirements and generates complete quotes and technical proposals with LLMs, respecting the company's templates, pricing and terms. What used to take hours of manual work now ships in minutes, with a consistent format.",
    },
    tags: ["LLMs", "Automatización", "Business"],
  },
  {
    slug: "docs",
    icon: "🔎",
    mock: "doc",
    name: { es: "Extracción inteligente de documentos", en: "Intelligent document extraction" },
    desc: {
      es: "Pipeline OCR + LLM que transforma PDFs y facturas en datos estructurados, listos para integraciones.",
      en: "OCR + LLM pipeline turning PDFs and invoices into structured, integration-ready data.",
    },
    longDesc: {
      es: "Pipeline que combina OCR con modelos de lenguaje para leer PDFs, facturas y documentos escaneados, y devolver datos estructurados (JSON) listos para cargarse en el ERP o en cualquier integración, eliminando la captura manual.",
      en: "A pipeline combining OCR with language models to read PDFs, invoices and scanned documents, returning structured data (JSON) ready to load into the ERP or any integration — eliminating manual data entry.",
    },
    tags: ["OCR", "LLMs", "Data Pipelines"],
  },
  {
    slug: "leads",
    icon: "🎯",
    mock: "list",
    name: { es: "Clasificación automática de leads", en: "Automated lead scoring" },
    desc: {
      es: "IA generativa y reglas de negocio para priorizar el seguimiento comercial de prospectos.",
      en: "Generative AI plus business rules to prioritize commercial follow-up of prospects.",
    },
    longDesc: {
      es: "Motor que combina IA generativa con reglas de negocio para puntuar y priorizar prospectos, de modo que el equipo comercial invierta su tiempo en los leads con mayor probabilidad de cierre en lugar de repartirlo por igual.",
      en: "An engine that combines generative AI with business rules to score and prioritize prospects, so the sales team spends its time on the leads most likely to close instead of spreading it evenly.",
    },
    tags: ["IA Generativa", "Sales Ops"],
  },
  {
    slug: "worldcup",
    icon: "⚽",
    mock: "chart",
    name: { es: "World Cup 2026 AI Prediction Engine", en: "World Cup 2026 AI Prediction Engine" },
    desc: {
      es: "Motor estadístico (Poisson + Elo + Dixon-Coles) con simulación Monte Carlo y criterio de Kelly, entrenado con 5,480 partidos.",
      en: "Statistical engine (Poisson + Elo + Dixon-Coles) with Monte Carlo simulation and Kelly criterion, trained on 5,480 matches.",
    },
    longDesc: {
      es: "Motor de predicción que mezcla modelos Poisson, ratings Elo y el ajuste Dixon-Coles, corre miles de simulaciones Monte Carlo y aplica criterio de Kelly para dimensionar cada apuesta. Entrenado con 5,480 partidos históricos.",
      en: "A prediction engine blending Poisson models, Elo ratings and the Dixon-Coles adjustment, running thousands of Monte Carlo simulations and applying the Kelly criterion to size each bet. Trained on 5,480 historical matches.",
    },
    tags: ["Statistical Modeling", "Python", "Monte Carlo"],
  },
  {
    slug: "llm-infra",
    icon: "🖥️",
    mock: "terminal",
    name: { es: "Private LLM Infrastructure", en: "Private LLM Infrastructure" },
    desc: {
      es: "Despliegue de Ollama con Qwen2.5 32B en Mac Mini M4 como alternativa local y privada a la IA en la nube.",
      en: "Ollama + Qwen2.5 32B deployment on a Mac Mini M4 as a local, private alternative to cloud AI.",
    },
    longDesc: {
      es: "Despliegue de un LLM privado (Qwen2.5 32B sobre Ollama) en un Mac Mini M4, como alternativa local, económica y sin fuga de datos frente a las APIs de IA en la nube. Ideal para procesar información sensible dentro de la empresa.",
      en: "Deployment of a private LLM (Qwen2.5 32B on Ollama) on a Mac Mini M4, as a local, low-cost, no-data-leak alternative to cloud AI APIs. Ideal for processing sensitive information inside the company.",
    },
    tags: ["Ollama", "Local AI", "Privacy"],
  },
  {
    slug: "ainsa",
    icon: "🏭",
    mock: "grid",
    name: { es: "AINSA OneWorks Industrial Platform", en: "AINSA OneWorks Industrial Platform" },
    desc: {
      es: "App web industrial en React, TypeScript y Tailwind: catálogo digital, búsqueda avanzada y arquitectura lista para CMS.",
      en: "Industrial web app in React, TypeScript and Tailwind: digital catalog, advanced search and CMS-ready architecture.",
    },
    longDesc: {
      es: "Aplicación web industrial en React + TypeScript + Tailwind: catálogo digital, búsqueda avanzada por especificaciones técnicas y una arquitectura preparada para conectarse a un CMS. Diseñada para escalar a múltiples marcas de equipamiento.",
      en: "Industrial web app in React + TypeScript + Tailwind: digital catalog, advanced search by technical specs and a CMS-ready architecture. Designed to scale across multiple equipment brands.",
    },
    tags: ["React", "TypeScript", "Web Platform"],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    icon: "✦",
    name: { es: "IA / LLM", en: "AI / LLM" },
    items: ["Gemini 2.5 Flash", "Claude / Claude Code", "Agentes conversacionales", "Ollama", "Qwen2.5 32B"],
  },
  {
    icon: "✦",
    name: { es: "Modelado estadístico", en: "Statistical modeling" },
    items: ["Poisson", "Elo", "Dixon-Coles", "Criterio de Kelly"],
  },
  {
    icon: "✦",
    name: { es: "Desarrollo", en: "Development" },
    items: ["React.js", "JavaScript", "Python", "FastAPI", "Celery", "Node.js", "HTML/CSS/SASS"],
  },
  {
    icon: "✦",
    name: { es: "Datos e infraestructura", en: "Data & infrastructure" },
    items: ["SQL", "MongoDB", "PostgreSQL", "Power BI", "SAP", "AWS (EC2, IIS)", "Playwright"],
  },
  {
    icon: "✦",
    name: { es: "Operaciones", en: "Operations" },
    items: [
      { es: "Diseño y seguimiento de KPIs", en: "KPI design & tracking" },
      { es: "Pronóstico de demanda", en: "Demand forecasting" },
      { es: "Gestión de proyectos", en: "Project management" },
    ],
  },
];

export const CERTS: string[] = [
  "Google Project Management (Coursera)",
  "React.JS (Udemy)",
  "HTML+CSS+JavaScript (Udemy)",
  "Esri ArcGIS 1-3 (SIGSA)",
];

export const STATS: Stat[] = [
  {
    value: 10,
    suffix: "+",
    label: {
      es: "años combinando desarrollo de software con liderazgo operativo real",
      en: "years combining software development with real operational leadership",
    },
  },
  {
    value: 7,
    suffix: "",
    label: { es: "proyectos de IA aplicada llevados a producción", en: "applied-AI projects shipped to production" },
  },
  {
    text: { es: "Horas → Min", en: "Hours → Min" },
    label: {
      es: "tiempo de generación de propuestas comerciales, reducido con automatización de IA",
      en: "commercial-proposal generation time, cut with AI automation",
    },
  },
  {
    text: { es: "Tiempo real", en: "Real time" },
    label: {
      es: "seguimiento y gestión de operaciones distribuidas geográficamente, con mapas interactivos",
      en: "tracking and management of geographically distributed operations, with interactive maps",
    },
  },
];
