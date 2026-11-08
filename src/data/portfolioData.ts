export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  status: 'Live Project' | 'In Development' | 'Production' | 'Completed Case Study' | 'Active Consulting';
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  metrics?: string[];
  features: string[];
  badgeColor: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  focus: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface ServiceTier {
  id: string;
  title: string;
  priceRange: string;
  turnaround: string;
  idealFor: string;
  deliverables: string[];
  popular?: boolean;
}

export interface EarningScenario {
  milestone: string;
  monthlyTarget: number;
  label: string;
  breakdown: string;
  deliverablesMix: {
    basic: number;
    intermediate: number;
    advanced: number;
    maintenance: number;
  };
  overview: string;
}

export interface EducationItem {
  degree: string;
  university: string;
  location: string;
  status: string;
  field: string;
  description: string;
}

export const INITIAL_PORTFOLIO_CONFIG = {
  education: [
    {
      degree: "Master of Science (MSc) in Mathematics",
      university: "Bahauddin Zakariya University (BZU)",
      location: "Multan, Pakistan",
      status: "Currently Studying",
      field: "Mathematics",
      description: "Advanced mathematical principles, computational logic, statistical analysis, and algorithmic foundations that power AI models and autonomous systems.",
    },
  ] as EducationItem[],
  personal: {
    fullName: "Bilal Iqbal",
    title: "AI Agent Developer | AI Automation Specialist | B2B Growth & Lead Generation",
    shortBio: "Transforming manual sales prospecting and business workflows into autonomous AI agent pipelines. Specialized in custom LLM agents, intelligent ICP qualification, and scalable automation systems.",
    email: "bilalwrite24@gmail.com",
    phone: "+92 320 9635410",
    whatsappUrl: "https://wa.me/923209635410",
    whatsappDisplay: "+92 320 9635410",
    githubUrl: "https://github.com/bilalwrite24",
    linkedinUrl: "https://linkedin.com/in/bilal-iqbal-jutt",
    instagramUrl: "https://instagram.com/bilalwrite24", // Editable placeholder
    calendlyUrl: "https://calendly.com/bilalwrite24/strategy-call", // Editable Calendly URL
    location: "Global Remote / Available Worldwide",
    availability: "Available for New Projects & Contracts",
    portraitImage: "/assets/aistudio/Professional_Portrait_Cutout_with_Crossed_Arms_30486fbd.png",
  },
  stats: [
    { label: "Professional Experience", value: "4+", unit: "Years" },
    { label: "Freelance Projects", value: "50+", unit: "Delivered" },
    { label: "Direct Client Projects", value: "100+", unit: "Completed" },
    { label: "Client Satisfaction", value: "100%", unit: "Dedicated" },
  ],
  skills: [
    {
      category: "AI & Autonomous Agents",
      icon: "Bot",
      items: [
        { name: "AI Agent Development", level: 95, desc: "Autonomous agentic workflows, multi-agent coordination, tool execution" },
        { name: "Python & AI Solutions", level: 92, desc: "FastAPI, LangChain, LlamaIndex, OpenAI, Gemini SDK, web scrapers" },
        { name: "Lead Research & ICP Scoring", level: 96, desc: "Automated prospect qualification, deep research, relevance scoring" },
      ],
    },
    {
      category: "Automation & Growth",
      icon: "Cpu",
      items: [
        { name: "AI Automation", level: 94, desc: "n8n, Zapier, Make.com, custom API pipelines, CRM integrations" },
        { name: "Business Automation", level: 90, desc: "End-to-end workflows for SaaS, IT, cybersecurity, and sales teams" },
        { name: "B2B Lead Generation", level: 95, desc: "Outbound pipeline design, company sourcing, email drafting AI" },
      ],
    },
    {
      category: "Engineering & Digital",
      icon: "Globe",
      items: [
        { name: "Website Development", level: 88, desc: "Modern responsive web applications, React, Next.js, Tailwind CSS" },
        { name: "E-commerce Development", level: 85, desc: "Store architecture, conversion funnels, e-commerce automation" },
        { name: "SEO & Digital Marketing", level: 88, desc: "Technical SEO audits, search visibility, conversion optimization" },
      ],
    },
  ],
  projects: [
    {
      id: "practical-ai-lead-finder",
      title: "Practical AI Lead Finder",
      subtitle: "Autonomous Lead Discovery & Qualification Engine",
      description: "An AI-powered application that discovers target businesses, analyzes website content, evaluates Ideal Customer Profile (ICP) fit, and extracts verified contact details.",
      status: "Live Project",
      liveUrl: "https://practical-ai-lead-finder.vercel.app/",
      githubUrl: "https://github.com/bilalwrite24/Ai-lead",
      tags: ["AI Agent", "Lead Mining", "Next.js", "Python", "Web Scraping", "ICP Scoring"],
      metrics: ["Live Production App", "Automated Enrichment", "Real-time Verification"],
      features: [
        "Live web application hosted on Vercel with real-time prospect extraction",
        "Open-source codebase on GitHub with custom AI enrichment scripts",
        "Automated scraping and domain validation for target accounts",
        "Direct export to CSV / CRM ready format",
      ],
      badgeColor: "from-emerald-500 to-teal-500",
    },
    {
      id: "propelmatch-ai-agent",
      title: "PropelMatch AI Agent",
      subtitle: "Autonomous B2B Prospecting & Cold Outreach Intelligence",
      description: "Next-generation autonomous agent built for intelligent company discovery, in-depth prospect research, algorithmic ICP scoring, and hyper-personalized email drafting.",
      status: "In Development",
      tags: ["Autonomous Agent", "Email Personalization", "Company Discovery", "ICP Scoring"],
      metrics: ["Deep Qualification", "Custom AI Prompts", "Multi-factor Scoring"],
      features: [
        "Automated discovery of matching companies based on defined firmographic parameters",
        "Deep research agent that extracts tech stacks, hiring signals, and recent company news",
        "Algorithmic ICP scoring model assigning fit rankings (A/B/C/D tiers)",
        "Contextual email drafting engine tailoring messaging to specific company pain points",
      ],
      badgeColor: "from-blue-500 to-indigo-500",
    },
    {
      id: "ai-lead-research-agent",
      title: "AI Lead Research Agent",
      subtitle: "Automated Prospect Qualification & Background Synthesis",
      description: "Production-ready AI research system that automates deep-dive company analysis, executive profiling, and qualifying signals for enterprise sales teams.",
      status: "Production",
      tags: ["Prospect Research", "Signal Extraction", "Executive Profiling", "Data Enrichment"],
      metrics: ["90% Research Time Saved", "Rich Context Dossiers", "Accurate Firmographics"],
      features: [
        "Scrapes and digests company whitepapers, blog posts, and press releases",
        "Identifies key decision-maker titles and cross-references public footprints",
        "Generates one-page executive briefings before client discovery calls",
        "Integrates with outreach engines and CRM databases seamlessly",
      ],
      badgeColor: "from-purple-500 to-pink-500",
    },
    {
      id: "ai-business-automation",
      title: "AI Business Automation",
      subtitle: "Workflows for SaaS, IT & Cybersecurity Systems",
      description: "Tailored AI automation pipelines designed to eliminate manual bottlenecks across SaaS operations, IT ticket handling, and cybersecurity customer qualification.",
      status: "Completed Case Study",
      tags: ["SaaS Automation", "Cybersecurity", "IT Workflows", "API Integrations", "n8n"],
      metrics: ["Enterprise Grade", "Zero-Touch Data Flow", "Scalable Architecture"],
      features: [
        "Autonomous inbound lead qualification for cybersecurity managed service providers",
        "Automated triage and sentiment analysis for customer support and SaaS ops",
        "Custom webhook connectors linking CRMs, Slack, email, and LLM backends",
        "Structured logging and error handling for high reliability",
      ],
      badgeColor: "from-cyan-500 to-blue-600",
    },
    {
      id: "seo-digital-marketing-portfolio",
      title: "SEO & Digital Marketing Portfolio",
      subtitle: "Data-Driven Search Engine & Digital Growth Systems",
      description: "Strategic portfolio of SEO initiatives, organic search optimizations, conversion rate improvements, and high-impact digital marketing pipelines for international clients.",
      status: "Active Consulting",
      tags: ["Technical SEO", "Conversion Rate", "Content Strategy", "Digital Growth"],
      metrics: ["Organic Traffic Uplift", "B2B Conversion Focus", "Search Authority"],
      features: [
        "Comprehensive technical SEO audits fixing crawlability, indexation, and speed",
        "High-intent keyword architecture tailored for B2B search discovery",
        "Landing page conversion optimization and user flow enhancements",
        "Analytics, goal tracking, and attribution modeling setup",
      ],
      badgeColor: "from-amber-500 to-orange-500",
    },
  ] as ProjectItem[],
  experiences: [
    {
      company: "Propel Expert / PropelMatch",
      role: "Lead Generation & AI Sourcing Specialist",
      period: "Recent / Core Track Record",
      focus: "Website Sourcing, Email Sourcing, Outreach & Meeting Generation",
      description: "Spearheaded advanced data mining and automated outreach mechanisms to drive qualified sales discovery meetings for B2B clients.",
      highlights: [
        "Architected scalable website and email sourcing pipelines across target verticals",
        "Developed custom qualification filters to isolate high-intent buyer profiles",
        "Executed personalized outbound campaigns generating consistent client meetings",
        "Pioneered early AI workflows for dynamic email drafting and lead enrichment",
      ],
      skills: ["Website Sourcing", "Email Verification", "Cold Outreach", "Meeting Gen", "ICP Filters"],
    },
    {
      company: "Bypassline",
      role: "Digital Marketing & E-commerce Specialist",
      period: "Professional Experience",
      focus: "Digital Marketing, Store Development & Growth Automation",
      description: "Managed e-commerce operations, digital growth campaigns, and technical marketing systems to maximize conversions and brand reach.",
      highlights: [
        "Built and optimized high-converting e-commerce web layouts and checkout funnels",
        "Implemented targeted digital marketing campaigns with conversion-driven creative",
        "Streamlined inventory and customer communication workflows through automation",
        "Conducted in-depth search optimization and performance benchmarking",
      ],
      skills: ["E-commerce", "Digital Marketing", "Web Development", "Conversion Optimization"],
    },
    {
      company: "IP Services",
      role: "B2B Outreach & Cybersecurity Prospecting Specialist",
      period: "Professional Experience",
      focus: "B2B Outreach, Cybersecurity Prospecting & Lead Generation",
      description: "Delivered highly targeted lead generation and strategic outbound prospecting initiatives tailored specifically to cybersecurity and IT enterprise decision-makers.",
      highlights: [
        "Researched and qualified enterprise IT and cybersecurity buyer personas",
        "Authored tailored cold outreach sequences addressing vulnerability and compliance priorities",
        "Consistently built high-value sales pipelines for specialized security service packages",
        "Standardized qualification checklists and prospect research frameworks",
      ],
      skills: ["Cybersecurity Prospecting", "B2B Outreach", "Lead Qualification", "Enterprise Research"],
    },
  ] as ExperienceItem[],
  servicePricing: [
    {
      id: "basic",
      title: "Basic AI Projects",
      priceRange: "$150 – $500",
      turnaround: "3 – 5 Days",
      idealFor: "Startups, small agencies, or solo founders needing rapid, focused AI capabilities.",
      deliverables: [
        "Single-purpose AI bots or assistant tools",
        "Lightweight automation scripts (Python / n8n / Zapier)",
        "API integration with OpenAI or Google Gemini",
        "Basic prompt engineering and structured JSON outputs",
        "Deployment support and usage documentation",
      ],
    },
    {
      id: "intermediate",
      title: "Intermediate AI Solutions",
      priceRange: "$500 – $1,000",
      turnaround: "1 – 2 Weeks",
      idealFor: "Growing businesses requiring automated lead research, custom scraping, or multi-step pipelines.",
      deliverables: [
        "Multi-step automated workflows with error handling",
        "Custom web scrapers & lead enrichment systems",
        "ICP scoring and qualification engines",
        "Automated email drafting & CRM synchronizations",
        "Interactive dashboard or Web UI interface",
        "30 days post-launch support and adjustments",
      ],
      popular: true,
    },
    {
      id: "advanced",
      title: "Advanced AI Agents",
      priceRange: "$1,000 – $3,000+",
      turnaround: "2 – 4 Weeks",
      idealFor: "Enterprises & high-growth teams requiring fully autonomous multi-agent systems and custom architectures.",
      deliverables: [
        "Full autonomous multi-agent architecture (LangChain / custom agents)",
        "Retrieval Augmented Generation (RAG) over proprietary knowledge",
        "End-to-end B2B prospecting, discovery & engagement pipeline",
        "Enterprise-grade security, logging, and token optimization",
        "Custom integrations with Salesforce, HubSpot, Slack, or custom APIs",
        "Comprehensive architectural handoff and team training",
      ],
    },
    {
      id: "maintenance",
      title: "Monthly Maintenance & Retainer",
      priceRange: "$100 – $300 / client",
      turnaround: "Ongoing Monthly",
      idealFor: "Ongoing peace-of-mind, prompt tuning, API monitoring, and pipeline health.",
      deliverables: [
        "Continuous uptime monitoring and API quota health checks",
        "Prompt tuning and model version upgrades",
        "Bug fixes and edge-case handling for ongoing automations",
        "Priority Slack/WhatsApp direct communication channel",
        "Monthly performance and system optimization reports",
      ],
    },
  ] as ServiceTier[],
  earningScenarios: [
    {
      milestone: "$500 / month",
      monthlyTarget: 500,
      label: "Foundation Tier",
      overview: "Ideal starting baseline achieved with a single lightweight project or 2 monthly maintenance clients.",
      breakdown: "1 Basic AI Project ($300) + 1-2 Monthly Retainers ($200) = $500",
      deliverablesMix: {
        basic: 1,
        intermediate: 0,
        advanced: 0,
        maintenance: 2,
      },
    },
    {
      milestone: "$1,000 / month",
      monthlyTarget: 1000,
      label: "Growth Tier",
      overview: "Solid monthly target combining 1 mid-tier solution with ongoing client support.",
      breakdown: "1 Intermediate AI Solution ($800) + 1 Monthly Retainer ($200) = $1,000",
      deliverablesMix: {
        basic: 1,
        intermediate: 1,
        advanced: 0,
        maintenance: 2,
      },
    },
    {
      milestone: "$2,000 / month",
      monthlyTarget: 2000,
      label: "Scale Tier",
      overview: "Higher velocity target delivered through an advanced autonomous agent or two intermediate systems.",
      breakdown: "1 Advanced Agent ($1,500) + 1 Intermediate System ($500) = $2,000",
      deliverablesMix: {
        basic: 0,
        intermediate: 2,
        advanced: 1,
        maintenance: 3,
      },
    },
    {
      milestone: "$5,000+ / month",
      monthlyTarget: 5000,
      label: "Enterprise Tier",
      overview: "Full capacity agency/consultancy target spanning complex agent deployments and steady monthly retainers.",
      breakdown: "2 Advanced Agents ($3,500) + 2 Intermediate Solutions ($1,000) + Retainers ($500+) = $5,000+",
      deliverablesMix: {
        basic: 2,
        intermediate: 2,
        advanced: 2,
        maintenance: 5,
      },
    },
  ] as EarningScenario[],
};
