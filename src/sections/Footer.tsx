import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, ArrowUp } from 'lucide-react';
import { GithubIcon, InstagramIcon, TelegramIcon } from '../components/SocialIcons';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'rgba(6, 8, 13, 0.95)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '3.5rem 0 2rem 0',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          {/* Brand Logo & Bio */}
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(56, 189, 248, 0.4)'
                }}
              >
                <Terminal size={16} color="#ffffff" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.125rem', color: '#ffffff' }}>
                Asilbek Turkmanov
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Full-Stack Developer • C#, .NET 10, React & AI Integratsiyalari.
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://github.com/AsilbekTurkmanov"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease'
              }}
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://t.me/htpAsilbek"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease'
              }}
              title="Telegram"
            >
              <TelegramIcon size={18} />
            </a>

            <a
              href="https://instagram.com/uzb.programmer"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s ease'
              }}
              title="Instagram"
            >
              <InstagramIcon size={18} />
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              title={t.footer.backToTop}
            >
              <ArrowUp size={15} />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.75rem',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Asilbek Turkmanov. {t.footer.rights}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
            ✨ {t.footer.demoDayNote}
          </div>
        </div>
      </div>
    </footer>
  );
};
