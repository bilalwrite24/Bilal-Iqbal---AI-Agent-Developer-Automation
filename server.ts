import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Google GenAI
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const BILAL_SYSTEM_INSTRUCTION = `You are "Bilal AI Assistant", the official interactive AI assistant on the personal portfolio website of Bilal Iqbal.

ABOUT BILAL IQBAL:
- Name: Bilal Iqbal
- Professional Title: AI Agent Developer | AI Automation Specialist | B2B Growth & Lead Generation
- Professional Recognition: TOP RATED FREELANCER (Top Rated status on freelance platforms)
- Statistics: 4+ years professional experience, 50+ freelance platform projects, 100+ direct client projects
- Education: Currently pursuing a Master of Science (MSc) in Mathematics at Bahauddin Zakariya University (BZU), Multan, Pakistan. Field: Mathematics. Status: Currently Studying.
- Email: bilalwrite24@gmail.com
- Phone / WhatsApp: +92 320 9635410 (https://wa.me/923209635410)
- GitHub: https://github.com/bilalwrite24
- LinkedIn: https://linkedin.com/in/bilal-iqbal-jutt

EDUCATION & ACADEMICS:
- Degree: Master of Science (MSc) in Mathematics
- University: Bahauddin Zakariya University (BZU), Multan, Pakistan
- Status: Currently Studying
- Field: Mathematics
- Core Foundation: Advanced mathematical modeling, computational logic, statistical analysis, and algorithmic foundations that power AI models and autonomous systems.
(CRITICAL: Do NOT invent graduation dates, grades, awards, or academic achievements).

PROFESSIONAL RECOGNITION:
- Bilal has earned "TOP RATED FREELANCER" status with a verified track record of 4+ years professional experience, 50+ freelance platform projects, and 100+ direct client projects.

SKILLS & CORE EXPERTISE:
1. AI Agent Development: Custom autonomous agents, LangChain/LlamaIndex, Gemini/OpenAI integration, multi-agent workflows, tool calling, retrieval augmented generation (RAG).
2. AI Automation: Business workflow automation, SaaS integration, IT & cybersecurity workflows, n8n, Zapier, Python scripting.
3. B2B Lead Generation & Research: Deep prospect research, company qualification, ICP scoring, automated email drafting, list enrichment.
4. Website & E-commerce Development: Modern web apps, React, Next.js, Tailwind CSS, API integrations, store optimization.
5. SEO & Digital Marketing: Technical SEO, search engine ranking, conversion rate optimization, digital growth funnels.

PROJECTS:
1. Practical AI Lead Finder (Live Project)
   - URL: https://practical-ai-lead-finder.vercel.app/
   - GitHub: https://github.com/bilalwrite24/Ai-lead
   - Description: AI-powered tool for intelligent lead discovery, verification, and enrichment.
2. PropelMatch AI Agent (In Development)
   - Description: Autonomous agent for company discovery, targeted lead research, ICP scoring, and personalized email drafting.
3. AI Lead Research Agent (Active / Production)
   - Description: Deep AI-powered prospect qualification and automated company intelligence.
4. AI Business Automation (Completed Solutions)
   - Description: End-to-end automation pipelines for SaaS, IT, cybersecurity, and enterprise business workflows.
5. SEO & Digital Marketing Portfolio
   - Description: Comprehensive digital marketing, SEO audits, optimization, and conversion-driven growth systems.

PAST EXPERIENCE / WORK HISTORY:
- IP Services: B2B outreach, cybersecurity prospecting, and strategic lead generation.
- Bypassline: Digital marketing, e-commerce growth, and store development.
- Propel Expert / PropelMatch: Website sourcing, email sourcing, automated outreach, and meeting generation.

ESTIMATED PROJECT PRICING (Illustrative market ranges):
- Basic AI projects: $150–$500 (Simple automations, single-purpose bots, API hooks)
- Intermediate AI solutions: $500–$1,000 (Multi-step workflows, lead scoring pipelines, custom data scrapers)
- Advanced AI agents: $1,000–$3,000+ (Full autonomous multi-agent systems, custom RAG, enterprise integrations)
- Monthly maintenance & support: $100–$300/client (Continuous monitoring, prompt tuning, API updates)

ESTIMATED EARNING SCENARIOS:
- $500/month: 1-2 small automation projects or 2 ongoing maintenance clients
- $1,000/month: 1 intermediate AI solution + maintenance client
- $2,000/month: 1 advanced AI agent or a combination of 2 intermediate projects + retainers
- $5,000+/month: Multiple enterprise autonomous agent deployments + monthly retainer contracts
*(Note: These are illustrative earning potential scenarios, not Bilal's actual personal revenue).*

CRITICAL INSTRUCTIONS FOR CONTACT & HIRING:
- Whenever a visitor asks how to contact, message, reach out to, or hire Bilal Iqbal, you MUST accurately and clearly provide:
  - Email: bilalwrite24@gmail.com
  - WhatsApp: +92 320 9635410 (link: https://wa.me/923209635410)
  - LinkedIn: https://linkedin.com/in/bilal-iqbal-jutt
  - GitHub: https://github.com/bilalwrite24
- Be courteous, professional, concise, enthusiastic, and confident.
- Highlight Bilal's technical strengths in AI agents, automations, and B2B growth.
- Do NOT invent fictional testimonials, client names, or revenues.
- Keep answers formatted with readable bullet points and clear sections.`;

function generatePortfolioAnswer(message: string): string {
  const lower = message.toLowerCase();
  let fallbackText = "Hello! I'm **Bilal AI Assistant**. ";

  if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('whatsapp') || lower.includes('reach') || lower.includes('phone')) {
    fallbackText += `You can reach and hire Bilal Iqbal directly:\n\n- **Email**: bilalwrite24@gmail.com\n- **WhatsApp**: [+92 320 9635410](https://wa.me/923209635410)\n- **LinkedIn**: [bilal-iqbal-jutt](https://linkedin.com/in/bilal-iqbal-jutt)\n- **GitHub**: [bilalwrite24](https://github.com/bilalwrite24)\n\nBilal is currently available for new autonomous agent contracts and B2B growth projects!`;
  } else if (lower.includes('education') || lower.includes('degree') || lower.includes('university') || lower.includes('bzu') || lower.includes('math') || lower.includes('study') || lower.includes('academic')) {
    fallbackText += `Bilal Iqbal is currently pursuing an **MSc in Mathematics** at **Bahauddin Zakariya University (BZU), Multan, Pakistan**.\n\nHis mathematical background provides the analytical and algorithmic foundation for his autonomous AI agent architectures and quantitative ICP scoring models.`;
  } else if (lower.includes('top rated') || lower.includes('freelancer') || lower.includes('recognition') || lower.includes('badge') || lower.includes('award') || lower.includes('rating')) {
    fallbackText += `Bilal Iqbal holds prestigious **Top Rated Freelancer** status with verified professional milestones:\n\n- ⭐ **TOP RATED FREELANCER** status\n- 🚀 **4+ Years** Professional Experience\n- 💼 **50+** Freelance Platform Projects Delivered\n- 🤝 **100+** Direct Client Engagements Completed\n\nYou can hire Bilal directly by emailing **bilalwrite24@gmail.com** or messaging him on WhatsApp at **+92 320 9635410**.`;
  } else if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('tier')) {
    fallbackText += `Here is Bilal's illustrative service pricing breakdown:\n\n- **Basic AI Projects**: $150–$500 (3-5 days turnaround)\n- **Intermediate AI Solutions**: $500–$1,000 (1-2 weeks)\n- **Advanced AI Agents**: $1,000–$3,000+ (2-4 weeks)\n- **Monthly Maintenance & Retainer**: $100–$300/client/mo\n\nContact Bilal at **bilalwrite24@gmail.com** or WhatsApp **+92 320 9635410** for an exact scope and proposal!`;
  } else if (lower.includes('earning') || lower.includes('scenario') || lower.includes('potential') || lower.includes('milestone')) {
    fallbackText += `Here are the illustrative monthly earning potential scenarios based on service tiers:\n\n- **$500 / month**: 1 basic project + 1-2 monthly maintenance retainers\n- **$1,000 / month**: 1 intermediate AI solution + retainers\n- **$2,000 / month**: 1 advanced AI agent or 2 intermediate systems\n- **$5,000+ / month**: Multiple autonomous agent deployments + steady retainers\n\n*(Note: These are illustrative earning scenarios, not actual earnings).*`;
  } else if (lower.includes('project') || lower.includes('lead finder') || lower.includes('propelmatch')) {
    fallbackText += `Bilal has built multiple high-impact systems:\n\n1. **Practical AI Lead Finder** ([Live App](https://practical-ai-lead-finder.vercel.app/) | [GitHub](https://github.com/bilalwrite24/Ai-lead))\n2. **PropelMatch AI Agent** (Autonomous company discovery, ICP scoring & email drafting)\n3. **AI Lead Research Agent** (Deep prospect qualification)\n4. **AI Business Automation** (SaaS, IT, cybersecurity workflows)\n5. **SEO & Digital Marketing Portfolio**`;
  } else {
    fallbackText += `Bilal Iqbal is a **Top Rated Freelancer**, **AI Agent Developer**, and **B2B Growth Specialist** with 4+ years of professional experience, 50+ freelance platform projects, and 100+ direct client projects.\n\nHe is currently pursuing an MSc in Mathematics at Bahauddin Zakariya University (BZU).\n\nTo connect or hire Bilal, message him on WhatsApp at **+92 320 9635410** or email **bilalwrite24@gmail.com**.`;
  }

  return fallbackText;
}

// Chat API endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    if (!ai) {
      res.json({ reply: generatePortfolioAnswer(message) });
      return;
    }

    // Format prompt and conversation history
    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      for (const item of history.slice(-6)) {
        if (item && item.role && item.text) {
          contents.push({
            role: item.role === 'model' ? 'model' : 'user',
            parts: [{ text: String(item.text) }],
          });
        }
      }
    }

    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('AI generation timed out')), 2500)
      );

      const responsePromise = ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: contents as any,
        config: {
          systemInstruction: BILAL_SYSTEM_INSTRUCTION,
        },
      });

      const response: any = await Promise.race([responsePromise, timeoutPromise]);
      const reply = response.text || generatePortfolioAnswer(message);
      res.json({ reply });
      return;
    } catch (genAiError: any) {
      res.json({ reply: generatePortfolioAnswer(message) });
      return;
    }
  } catch (error: any) {
    console.error('Chat endpoint error:', error);
    res.json({ reply: generatePortfolioAnswer(req.body?.message || '') });
  }
});

// Contact message simulation endpoint
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ error: 'Name, email, and message are required' });
    return;
  }
  console.log(`[Contact Message Received] From: ${name} <${email}> | Subject: ${subject || 'Inquiry'}`);
  res.json({
    success: true,
    message: 'Your message has been received! Bilal will respond via email shortly.',
  });
});

// Set up Vite or Static File Serving
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
