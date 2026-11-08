import { GoogleGenAI } from '@google/genai';

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
2. PropelMatch AI Agent (In Development)
3. AI Lead Research Agent (Active / Production)
4. AI Business Automation (Completed Solutions)
5. SEO & Digital Marketing Portfolio

ESTIMATED PROJECT PRICING:
- Basic AI projects: $150–$500
- Intermediate AI solutions: $500–$1,000
- Advanced AI agents: $1,000–$3,000+
- Monthly maintenance & support: $100–$300/client

ESTIMATED EARNING SCENARIOS:
- $500/month: 1-2 small automation projects or 2 ongoing maintenance clients
- $1,000/month: 1 intermediate AI solution + maintenance client
- $2,000/month: 1 advanced AI agent or 2 intermediate systems
- $5,000+/month: Multiple enterprise autonomous agent deployments + monthly retainers

CRITICAL INSTRUCTIONS FOR CONTACT & HIRING:
Whenever asked how to contact or hire Bilal Iqbal, provide:
- Email: bilalwrite24@gmail.com
- WhatsApp: +92 320 9635410 (link: https://wa.me/923209635410)
- LinkedIn: https://linkedin.com/in/bilal-iqbal-jutt
- GitHub: https://github.com/bilalwrite24`;

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

export default async function handler(req: any, res: any) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { message, history } = req.body || {};

  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    res.json({ reply: generatePortfolioAnswer(message) });
    return;
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

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
  } catch (error) {
    res.json({ reply: generatePortfolioAnswer(message) });
  }
}
