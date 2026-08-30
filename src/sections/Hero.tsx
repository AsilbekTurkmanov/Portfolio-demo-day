import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { QuickStats } from '../components/QuickStats';
import { Sparkles, ArrowRight, Terminal, CheckCircle2, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleProjectsScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1
      }}
    >
      {/* Background glowing gradient blobs */}
      <div className="glow-blob glow-cyan" style={{ width: '400px', height: '400px', top: '15%', left: '5%' }} />
      <div className="glow-blob glow-indigo" style={{ width: '450px', height: '450px', top: '25%', right: '5%' }} />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.95fr)',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Hero Content */}
          <div>
            {/* Status Pill Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.4rem 1.1rem',
                borderRadius: '9999px',
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                boxShadow: '0 0 20px rgba(56, 189, 248, 0.15)',
                backdropFilter: 'blur(8px)',
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                  display: 'inline-block'
                }}
              />
              <span style={{ fontSize: '0.8125rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                {t.hero.academyBadge}
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {t.hero.experienceBadge}
              </span>
            </div>

            {/* Main Name & Title Heading */}
            <div style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '1.125rem', fontWeight: 500 }}>
              {t.hero.greeting}
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.75rem, 5vw, 4.25rem)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
                color: '#ffffff'
              }}
            >
              Asilbek <span className="gradient-text-cyan">Turkmanov</span>
            </h1>

            {/* Role Title */}
            <div
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--accent-indigo)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.01em'
              }}
            >
              {t.hero.role}
            </div>

            {/* Narrative text from prompt */}
            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '580px',
                marginBottom: '2.25rem'
              }}
            >
              {t.hero.tagline}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href="#projects"
                onClick={handleProjectsScroll}
                className="btn btn-primary"
                style={{ fontSize: '1rem', padding: '0.85rem 1.85rem' }}
              >
                <span>{t.hero.projectsBtn}</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="https://github.com/AsilbekTurkmanov"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '1rem', padding: '0.85rem 1.85rem' }}
              >
                <GithubIcon size={18} />
                <span>{t.hero.githubBtn}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Developer Visual Frame (Stitch Style) */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '420px',
                position: 'relative'
              }}
            >
              {/* Outer decorative glowing ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '32px',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.4), rgba(99, 102, 241, 0.1) 40%, rgba(168, 85, 247, 0.4))',
                  filter: 'blur(16px)',
                  opacity: 0.7,
                  zIndex: 0
                }}
              />

              {/* Main Avatar Card Frame */}
              <div
                className="stitch-card"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '2rem',
                  background: 'rgba(11, 17, 30, 0.85)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
                }}
              >
                {/* Profile Portrait / Silhouette Area */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '1/1',
                    borderRadius: '20px',
                    background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 50%, #0c4a6e 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    marginBottom: '1.5rem'
                  }}
                >
                  {/* Subtle Grid Backdrop */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'radial-gradient(rgba(56, 189, 248, 0.25) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />

                  {/* Clean Professional Avatar Visual */}
                  <div
                    style={{
                      width: '110px',
                      height: '110px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 30px rgba(56, 189, 248, 0.5)',
                      border: '3px solid rgba(255, 255, 255, 0.2)',
                      zIndex: 1
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      AT
                    </span>
                  </div>

                  <div
                    style={{
                      marginTop: '1rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      zIndex: 1
                    }}
                  >
                    ASILBEK TURKMANOV
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      zIndex: 1
                    }}
                  >
                    ITLIVE Academy • Full-Stack
                  </div>
                </div>

                {/* Developer Stats / Micro Badges */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Yo‘nalish</span>
                    <span style={{ fontSize: '0.8125rem', color: '#ffffff', fontWeight: 600 }}>Full-Stack Engineer</span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Boshlangan sana</span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--accent-cyan)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>13.05.2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Statistics Strip */}
        <QuickStats />
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
