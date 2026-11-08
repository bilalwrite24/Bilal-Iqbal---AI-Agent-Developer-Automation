import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Minimize2, 
  Maximize2, 
  RotateCcw, 
  Phone, 
  Mail, 
  Calendar, 
  ExternalLink, 
  Sparkles, 
  Check, 
  MessageSquare,
  ChevronDown
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  hasContactActions?: boolean;
}

interface BilalChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
  externalPrompt?: string | null;
  onClearExternalPrompt?: () => void;
  whatsappUrl: string;
  email: string;
  phone: string;
  calendlyUrl: string;
  portraitImage: string;
}

const DEFAULT_PROMPTS = [
  "How can I contact or hire Bilal?",
  "What is your educational background?",
  "Tell me about your Top Rated status",
  "What is your project pricing?",
  "Tell me about Practical AI Lead Finder",
  "What are your estimated earning scenarios?",
];

export const BilalChatbot: React.FC<BilalChatbotProps> = ({
  isOpen,
  onToggle,
  externalPrompt,
  onClearExternalPrompt,
  whatsappUrl,
  email,
  phone,
  calendlyUrl,
  portraitImage,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "👋 Hi! I'm **Bilal AI Assistant**.\n\nI can answer questions about Bilal Iqbal's **AI agent development**, **B2B lead generation systems**, **project pricing**, past experience, or help you connect with him directly.\n\nHow can I help you today?",
      timestamp: 'Just now',
      hasContactActions: true,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Handle external prompts sent from project cards or hero
  useEffect(() => {
    if (externalPrompt && isOpen) {
      sendMessage(externalPrompt);
      onClearExternalPrompt?.();
    }
  }, [externalPrompt, isOpen]);

  const sendMessage = async (userText: string) => {
    if (!userText.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: userText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Build conversation history for server proxy
      const history = messages.slice(-6).map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText.trim(),
          history,
        }),
      });

      if (!response.ok) {
        throw new Error('Server returned an error');
      }

      const data = await response.json();
      const replyText = data.reply || "I am here to help you connect with Bilal Iqbal. You can reach him directly at bilalwrite24@gmail.com or WhatsApp +92 320 9635410.";
      
      const containsContact = replyText.toLowerCase().includes('whatsapp') || 
                              replyText.toLowerCase().includes('email') || 
                              replyText.toLowerCase().includes('contact') || 
                              replyText.toLowerCase().includes('hire');

      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        hasContactActions: containsContact,
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err) {
      console.warn('Backend chat fallback triggered:', err);
      // Client-side intelligent fallback knowledge engine
      const fallbackReply = generateFallbackAnswer(userText);
      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: fallbackReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        hasContactActions: true,
      };
      setMessages((prev) => [...prev, modelMsg]);
    } finally {
      setLoading(false);
    }
  };

  const generateFallbackAnswer = (text: string): string => {
    const lower = text.toLowerCase();
    if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('whatsapp') || lower.includes('phone') || lower.includes('reach')) {
      return `You can reach and hire Bilal Iqbal directly:\n\n- **Email**: bilalwrite24@gmail.com\n- **WhatsApp / Phone**: +92 320 9635410\n- **LinkedIn**: [bilal-iqbal-jutt](https://linkedin.com/in/bilal-iqbal-jutt)\n- **GitHub**: [bilalwrite24](https://github.com/bilalwrite24)\n\nHe responds promptly to project inquiries and RFPs!`;
    }
    if (lower.includes('education') || lower.includes('degree') || lower.includes('university') || lower.includes('bzu') || lower.includes('math') || lower.includes('study') || lower.includes('academic')) {
      return `Bilal Iqbal is currently pursuing an **MSc in Mathematics** at **Bahauddin Zakariya University (BZU), Multan, Pakistan**.\n\nHis mathematical background directly powers his autonomous agent logic, computational problem solving, and quantitative ICP scoring architectures.`;
    }
    if (lower.includes('top rated') || lower.includes('freelancer') || lower.includes('recognition') || lower.includes('badge') || lower.includes('award') || lower.includes('rating')) {
      return `Bilal Iqbal holds **Top Rated Freelancer** status, backed by verified track records:\n\n- ⭐ **TOP RATED FREELANCER** Status\n- 🚀 **4+ Years** Professional Experience\n- 💼 **50+** Freelance Platform Projects\n- 🤝 **100+** Direct Client Projects\n\nReach out directly at **bilalwrite24@gmail.com** or WhatsApp **+92 320 9635410** to collaborate!`;
    }
    if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('tier')) {
      return `Here is Bilal's illustrative service pricing structure:\n\n- **Basic AI Projects**: $150–$500 (3-5 days turnaround)\n- **Intermediate AI Solutions**: $500–$1,000 (1-2 weeks)\n- **Advanced AI Agents**: $1,000–$3,000+ (2-4 weeks)\n- **Monthly Maintenance**: $100–$300/client per month\n\nFor a customized scope, reach out via WhatsApp (+92 320 9635410) or email (bilalwrite24@gmail.com).`;
    }
    if (lower.includes('earning') || lower.includes('scenario') || lower.includes('milestone')) {
      return `Here are the illustrative monthly earning scenarios based on project volumes:\n\n- **$500/month**: 1 basic project + 1-2 retainers\n- **$1,000/month**: 1 intermediate project + retainers\n- **$2,000/month**: 1 advanced agent or 2 intermediate systems\n- **$5,000+/month**: Multiple advanced agent systems + ongoing retainers\n\n*(Note: These are illustrative earning scenarios, not actual earnings).*`;
    }
    if (lower.includes('project') || lower.includes('lead finder') || lower.includes('propelmatch')) {
      return `Bilal's portfolio includes:\n\n1. **Practical AI Lead Finder** ([Live App](https://practical-ai-lead-finder.vercel.app/) | [GitHub](https://github.com/bilalwrite24/Ai-lead))\n2. **PropelMatch AI Agent** (Autonomous B2B prospect discovery & ICP scoring)\n3. **AI Lead Research Agent** (Deep company qualification)\n4. **AI Business Automation** (SaaS & IT workflow pipelines)\n5. **SEO & Digital Marketing Portfolio**`;
    }
    return `Bilal Iqbal is a **Top Rated Freelancer**, **AI Agent Developer**, and **B2B Growth Specialist** with 4+ years of professional experience, 50+ freelance platform projects, and 100+ direct client projects.\n\nHe is currently pursuing an MSc in Mathematics at Bahauddin Zakariya University (BZU).\n\nTo discuss hiring Bilal, contact him directly at **bilalwrite24@gmail.com** or WhatsApp **+92 320 9635410**.`;
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'model',
        text: "Conversation reset! How can I assist you with Bilal Iqbal's AI development services today?",
        timestamp: 'Just now',
        hasContactActions: true,
      },
    ]);
  };

  // Helper to format text with markdown-like highlights and links
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, idx) => {
      // Bold rendering
      let processed = line;
      
      // Simple link matching [Label](url)
      const linkMatch = processed.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        const [full, label, url] = linkMatch;
        const parts = processed.split(full);
        return (
          <p key={idx} className="my-1">
            {parts[0]}
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 underline font-semibold hover:text-blue-300"
            >
              {label}
            </a>
            {parts[1]}
          </p>
        );
      }

      if (line.startsWith('- ') || line.startsWith('* ')) {
        return (
          <li key={idx} className="ml-4 list-disc text-slate-300 my-0.5">
            {line.substring(2).replace(/\*\*(.*?)\*\*/g, '$1')}
          </li>
        );
      }

      if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
        return (
          <li key={idx} className="ml-4 list-decimal text-slate-300 my-0.5">
            {line.substring(3).replace(/\*\*(.*?)\*\*/g, '$1')}
          </li>
        );
      }

      if (!line.trim()) {
        return <div key={idx} className="h-1.5" />;
      }

      return (
        <p key={idx} className="my-1">
          {line.replace(/\*\*(.*?)\*\*/g, '$1')}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Trigger Button (when chat is closed) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={onToggle}
            className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60 transition-all hover:scale-105 active:scale-95"
            aria-label="Open Bilal AI Assistant"
          >
            {/* Status pulsing dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>

            <Bot className="w-5 h-5 text-white animate-bounce" />
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold leading-none">Bilal AI Assistant</p>
              <p className="text-[10px] text-blue-200 mt-0.5">Ask questions or hire</p>
            </div>
            
            {/* Unread badge */}
            <span className="px-1.5 py-0.5 rounded-full bg-white text-blue-700 text-[10px] font-extrabold">
              Online
            </span>
          </button>
        </div>
      )}

      {/* Floating Chat Window (when open) */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[92vw] sm:w-[420px] h-[580px] max-h-[85vh] z-50 rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-black/80 flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Chat Header */}
          <div className="px-4 py-3.5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-purple-600 p-0.5">
                  <img
                    src={portraitImage}
                    alt="Bilal Iqbal"
                    className="w-full h-full object-cover rounded-[10px] bg-slate-900"
                  />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm text-white">Bilal AI Assistant</h4>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 font-mono">
                    Gemini 3.8
                  </span>
                </div>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Ready to answer & connect
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={onToggle}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.role === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 rounded-br-none'
                      : 'bg-slate-950/80 text-slate-200 border border-slate-800/90 rounded-bl-none shadow-sm'
                  }`}
                >
                  <div className="text-xs sm:text-[13px]">
                    {renderFormattedText(msg.text)}
                  </div>

                  {/* Render Quick Action CTAs when contact info is mentioned */}
                  {msg.hasContactActions && msg.role === 'model' && (
                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold flex items-center gap-1 transition-colors"
                      >
                        <Phone className="w-3 h-3 text-emerald-400" />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <a
                        href={`mailto:${email}`}
                        className="px-2.5 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-[11px] font-semibold flex items-center gap-1 transition-colors"
                      >
                        <Mail className="w-3 h-3 text-blue-400" />
                        <span>Send Email</span>
                      </a>
                      <a
                        href={calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 text-[11px] font-semibold flex items-center gap-1 transition-colors"
                      >
                        <Calendar className="w-3 h-3 text-purple-400" />
                        <span>Book Call</span>
                      </a>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-slate-500 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
                <Bot className="w-4 h-4 text-blue-400 animate-spin" />
                <span>Bilal AI is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-slate-950/60 border-t border-slate-800/80 overflow-x-auto no-scrollbar flex items-center gap-1.5">
            {DEFAULT_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => sendMessage(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium border border-slate-700/60 transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, pricing, projects, or hiring..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 transition-colors shrink-0 shadow-md shadow-blue-600/20"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[10px] text-slate-500 text-center mt-1.5">
              Email: bilalwrite24@gmail.com • WhatsApp: +92 320 9635410
            </p>
          </div>

        </div>
      )}
    </>
  );
};
