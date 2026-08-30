import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Toast } from './components/Toast';

import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Journey } from './sections/Journey';
import { TechStack } from './sections/TechStack';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { ForParents } from './sections/ForParents';
import { Goals } from './sections/Goals';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`${t.contact.copySuccess} (${text})`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-main)', color: 'var(--text-primary)' }}>
      {/* Interactive Cyber Ambient Canvas */}
      <ParticleCanvas />

      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Journey />
        <TechStack />
        <Projects />
        <Achievements />
        <ForParents />
        <Goals />
        <Contact onCopyText={handleCopy} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Notification Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
