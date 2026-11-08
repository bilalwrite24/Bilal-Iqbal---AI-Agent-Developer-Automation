import React, { useState, useEffect } from 'react';
import { INITIAL_PORTFOLIO_CONFIG } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { EarningCalculatorSection } from './components/EarningCalculatorSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BilalChatbot } from './components/BilalChatbot';
import { EditConfigModal } from './components/EditConfigModal';

const STORAGE_KEY = 'bilal_iqbal_portfolio_config_v1';

export default function App() {
  // Load editable config from localStorage or defaults
  const [personalConfig, setPersonalConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_PORTFOLIO_CONFIG.personal,
          ...parsed,
        };
      }
    } catch (e) {
      console.warn('Failed to parse saved config from localStorage', e);
    }
    return INITIAL_PORTFOLIO_CONFIG.personal;
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatPrompt, setChatPrompt] = useState<string | null>(null);
  const [selectedTierForContact, setSelectedTierForContact] = useState<string>('AI Agent Development');

  // Handle saving customized config
  const handleSaveConfig = (newConfig: {
    instagramUrl: string;
    calendlyUrl: string;
    email: string;
    phone: string;
    whatsappUrl: string;
  }) => {
    const updated = {
      ...personalConfig,
      ...newConfig,
    };
    setPersonalConfig(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.warn('Failed to save config to localStorage', e);
    }
  };

  const handleResetConfig = () => {
    setPersonalConfig(INITIAL_PORTFOLIO_CONFIG.personal);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to remove config', e);
    }
  };

  const handleOpenChatWithPrompt = (prompt: string) => {
    setChatPrompt(prompt);
    setIsChatOpen(true);
  };

  const handleSelectTierForContact = (tierTitle: string) => {
    setSelectedTierForContact(tierTitle);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenEditModal={() => setIsEditModalOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
        whatsappUrl={personalConfig.whatsappUrl}
        calendlyUrl={personalConfig.calendlyUrl}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section with Bilal Cutout */}
        <Hero
          personal={personalConfig}
          stats={INITIAL_PORTFOLIO_CONFIG.stats}
          onOpenChat={() => setIsChatOpen(true)}
          onOpenEditModal={() => setIsEditModalOpen(true)}
        />

        {/* Core Skills (9 Skills) */}
        <SkillsSection />

        {/* Featured Projects (5 Projects including Practical AI Lead Finder live) */}
        <ProjectsSection
          projects={INITIAL_PORTFOLIO_CONFIG.projects}
          onOpenChatWithPrompt={handleOpenChatWithPrompt}
        />

        {/* Work Experience Track Record (IP Services, Bypassline, PropelMatch) */}
        <ExperienceSection
          experiences={INITIAL_PORTFOLIO_CONFIG.experiences}
        />

        {/* Education & Mathematical Foundation */}
        <EducationSection
          education={INITIAL_PORTFOLIO_CONFIG.education}
        />

        {/* Estimated Earning Section & Scope Calculator */}
        <EarningCalculatorSection
          servicePricing={INITIAL_PORTFOLIO_CONFIG.servicePricing}
          earningScenarios={INITIAL_PORTFOLIO_CONFIG.earningScenarios}
          calendlyUrl={personalConfig.calendlyUrl}
          onSelectTierForContact={handleSelectTierForContact}
        />

        {/* Contact Section with Functional Channels & Form */}
        <ContactSection
          personal={personalConfig}
          selectedTier={selectedTierForContact}
          onOpenEditModal={() => setIsEditModalOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        personal={personalConfig}
        onOpenEditModal={() => setIsEditModalOpen(true)}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Floating Bilal AI Assistant Chatbot */}
      <BilalChatbot
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        externalPrompt={chatPrompt}
        onClearExternalPrompt={() => setChatPrompt(null)}
        whatsappUrl={personalConfig.whatsappUrl}
        email={personalConfig.email}
        phone={personalConfig.phone}
        calendlyUrl={personalConfig.calendlyUrl}
        portraitImage={personalConfig.portraitImage}
      />

      {/* Edit Config Modal (Instagram, Calendly, WhatsApp customizer) */}
      <EditConfigModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        config={{
          instagramUrl: personalConfig.instagramUrl,
          calendlyUrl: personalConfig.calendlyUrl,
          email: personalConfig.email,
          phone: personalConfig.phone,
          whatsappUrl: personalConfig.whatsappUrl,
        }}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
      />
    </div>
  );
}
