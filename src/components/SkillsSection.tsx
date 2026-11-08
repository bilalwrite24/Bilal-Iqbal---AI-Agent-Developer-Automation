import React, { useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Target, 
  Globe, 
  ShoppingBag, 
  Terminal, 
  Search, 
  Workflow, 
  Database, 
  Sparkles, 
  Layers, 
  CheckCircle,
  Code
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'automation' | 'growth'>('all');

  const skillsList = [
    {
      id: 'ai-agents',
      name: 'AI Agent Development',
      category: 'ai',
      icon: Bot,
      highlight: 'Core Focus',
      color: 'from-blue-500 to-indigo-600',
      description: 'Engineering multi-agent collaborative loops, memory retention systems, tool routing, and autonomous goal-seeking execution.',
      techStack: ['LangChain', 'LlamaIndex', 'Gemini 3.8 Flash', 'OpenAI Agents', 'Tool Calling', 'Vector DBs'],
      experienceContext: 'PropelMatch AI & Practical AI Lead Finder architecture',
    },
    {
      id: 'ai-automation',
      name: 'AI Automation',
      category: 'automation',
      icon: Workflow,
      highlight: 'Production Systems',
      color: 'from-indigo-500 to-purple-600',
      description: 'Deploying autonomous business pipelines that bridge webhooks, AI models, CRMs, and messaging apps to execute zero-touch operations.',
      techStack: ['n8n', 'Zapier', 'Make.com', 'Python Webhooks', 'REST APIs', 'Data Transforms'],
      experienceContext: 'End-to-end automation pipelines for SaaS and IT workflows',
    },
    {
      id: 'b2b-lead-gen',
      name: 'B2B Lead Generation',
      category: 'growth',
      icon: Target,
      highlight: 'High Conversion',
      color: 'from-emerald-500 to-teal-600',
      description: 'Systematic outbound prospecting architectures: identifying verified decision-makers, validating corporate domains, and executing targeted outreach.',
      techStack: ['Firmographic Sourcing', 'Email Verification', 'Deliverability Infra', 'Apollo / Clay Workflows', 'Outreach AI'],
      experienceContext: '100+ projects delivering discovery meetings across B2B verticals',
    },
    {
      id: 'python-ai',
      name: 'Python & AI Solutions',
      category: 'ai',
      icon: Terminal,
      highlight: 'Backend Engine',
      color: 'from-blue-600 to-cyan-600',
      description: 'Custom Python microservices, asynchronous web scrapers, data pipelines, LLM prompt orchestration, and fast REST APIs.',
      techStack: ['Python 3.12+', 'FastAPI', 'BeautifulSoup', 'Playwright Scraping', 'Pandas', 'Pydantic'],
      experienceContext: 'Custom scrapers & backend algorithms for lead qualification',
    },
    {
      id: 'lead-research-icp',
      name: 'Lead Research & ICP Scoring',
      category: 'growth',
      icon: Database,
      highlight: 'Algorithmic Fit',
      color: 'from-purple-500 to-pink-600',
      description: 'Algorithmic grading of target accounts based on headcount, tech stack, funding, hiring signals, and personalized pain point matching.',
      techStack: ['ICP Scoring Models', 'Domain Enrichment', 'Executive Profiling', 'Signal Detection', 'Custom Heuristics'],
      experienceContext: 'Propel Expert / PropelMatch proprietary scoring mechanisms',
    },
    {
      id: 'business-automation',
      name: 'Business Automation',
      category: 'automation',
      icon: Cpu,
      highlight: 'Operational Efficiency',
      color: 'from-cyan-500 to-blue-500',
      description: 'Eliminating repetitive manual human tasks across sales operations, cybersecurity prospecting, and IT ticketing pipelines.',
      techStack: ['CRM Automations', 'Slack Bots', 'Webhook Routers', 'Error Fallbacks', 'Custom Logic'],
      experienceContext: 'Tailored solutions built for IP Services & cybersecurity clients',
    },
    {
      id: 'seo-marketing',
      name: 'SEO & Digital Marketing',
      category: 'growth',
      icon: Search,
      highlight: 'Organic Authority',
      color: 'from-amber-500 to-orange-500',
      description: 'Comprehensive technical SEO audits, high-intent keyword strategies, search console analytics, and organic conversion funnels.',
      techStack: ['Technical SEO', 'Structured Schema', 'Content Clustering', 'Core Web Vitals', 'Search Analytics'],
      experienceContext: 'Multi-brand digital marketing and search visibility campaigns',
    },
    {
      id: 'web-dev',
      name: 'Website Development',
      category: 'automation',
      icon: Globe,
      highlight: 'Full-Stack UI',
      color: 'from-sky-500 to-indigo-500',
      description: 'Crafting responsive, high-performance web applications with clean architecture, interactive components, and robust API backends.',
      techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js Express'],
      experienceContext: 'Practical AI Lead Finder frontend & client application portals',
    },
    {
      id: 'ecommerce-dev',
      name: 'E-commerce Development',
      category: 'growth',
      icon: ShoppingBag,
      highlight: 'Revenue Funnels',
      color: 'from-rose-500 to-pink-600',
      description: 'Designing and optimizing online store experiences, conversion-driven product pages, checkout flows, and automated inventory sync.',
      techStack: ['E-commerce Architecture', 'Payment Gateways', 'Conversion Optimization', 'Store Automation'],
      experienceContext: 'Bypassline digital store development and marketing systems',
    },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsList 
    : skillsList.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-[#0B0F19]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Skills & Technical Architecture
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering robust end-to-end solutions: from autonomous AI reasoning agents to scalable B2B outbound engines and automated operational workflows.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              All Skills (9)
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'ai'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              AI Agents & Python
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'automation'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Automations & Web
            </button>
            <button
              onClick={() => setActiveTab('growth')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'growth'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              B2B Lead Gen & SEO
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${skill.color} p-0.5 shadow-md flex items-center justify-center text-white`}>
                      <div className="w-full h-full bg-slate-950/40 rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {skill.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Context */}
                  <div className="mt-3.5 text-[11px] text-slate-400 flex items-center gap-1.5 italic">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>{skill.experienceContext}</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {skill.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
