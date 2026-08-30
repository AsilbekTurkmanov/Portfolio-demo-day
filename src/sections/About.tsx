import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { User, HelpCircle, GraduationCap, Target, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>{t.about.tag}</span>
          </div>
          <h2 className="section-title">{t.about.title}</h2>
          <div
            style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-indigo))',
              borderRadius: '2px',
              margin: '0 auto'
            }}
          />
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
            gap: '2rem',
            alignItems: 'stretch'
          }}
          className="about-grid"
        >
          {/* Main Narrative Card */}
          <div
            className="stitch-card"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'rgba(13, 19, 32, 0.75)'
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-cyan)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <Sparkles size={16} />
                <span>ASILBEK TURKMANOV</span>
              </div>

              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                  fontWeight: 400
                }}
              >
                {t.about.p1}
              </p>

              <p
                style={{
                  fontSize: '1.0625rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem'
                }}
              >
                {t.about.p2}
              </p>
            </div>

            {/* Completed Tracks Checklist */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '0.75rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#ffffff' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" />
                <span>Foundation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#ffffff' }}>
                <CheckCircle2 size={16} color="var(--accent-indigo)" />
                <span>Frontend (React)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#ffffff' }}>
                <CheckCircle2 size={16} color="var(--accent-purple)" />
                <span>Backend (.NET 10)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Why Programming & ITLIVE Academy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Why Programming Card */}
            <div
              className="stitch-card"
              style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(20, 27, 45, 0.8) 100%)',
                border: '1px solid rgba(56, 189, 248, 0.25)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <HelpCircle size={20} color="var(--accent-cyan)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                  {t.about.whyTitle}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65 }}>
                {t.about.whyDesc}
              </p>
            </div>

            {/* ITLIVE Academy Card */}
            <div
              className="stitch-card"
              style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 27, 75, 0.4) 100%)',
                border: '1px solid rgba(99, 102, 241, 0.25)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '10px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <GraduationCap size={20} color="var(--accent-indigo)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                  {t.about.academyTitle}
                </h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65 }}>
                {t.about.academyDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
