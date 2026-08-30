import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { journeyData } from '../data/journey';
import { Milestone, Sparkles, BookOpen, Layout, Server, Rocket } from 'lucide-react';

export const Journey: React.FC = () => {
  const { language, t } = useLanguage();

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles size={20} color="var(--accent-cyan)" />;
      case 'BookOpen':
        return <BookOpen size={20} color="var(--accent-cyan)" />;
      case 'Layout':
        return <Layout size={20} color="var(--accent-indigo)" />;
      case 'Server':
        return <Server size={20} color="var(--accent-purple)" />;
      case 'Rocket':
        return <Rocket size={20} color="#10b981" />;
      default:
        return <Sparkles size={20} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section id="journey" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Milestone size={14} />
            <span>{t.journey.tag}</span>
          </div>
          <h2 className="section-title">{t.journey.title}</h2>
          <p className="section-subtitle">{t.journey.subtitle}</p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
            padding: '1rem 0'
          }}
        >
          {/* Vertical Glowing Timeline Line */}
          <div
            style={{
              position: 'absolute',
              top: '2rem',
              bottom: '2rem',
              left: '28px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 50%, var(--accent-emerald) 100%)',
              boxShadow: '0 0 12px rgba(56, 189, 248, 0.4)',
              zIndex: 0
            }}
            className="timeline-track"
          />

          {/* Timeline Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
            {journeyData.map((step, idx) => {
              const isCurrent = step.status === 'current';
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.75rem'
                  }}
                  className="timeline-item"
                >
                  {/* Step Node Marker */}
                  <div
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: '16px',
                      background: isCurrent ? 'linear-gradient(135deg, #0284c7, #10b981)' : 'rgba(15, 23, 42, 0.9)',
                      border: isCurrent ? '2px solid #10b981' : '1px solid rgba(56, 189, 248, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: isCurrent ? '0 0 25px rgba(16, 185, 129, 0.5)' : '0 0 15px rgba(56, 189, 248, 0.25)',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    {getStepIcon(step.icon)}
                  </div>

                  {/* Step Card Content */}
                  <div
                    className="stitch-card"
                    style={{
                      flex: 1,
                      padding: '1.75rem',
                      background: isCurrent ? 'rgba(16, 28, 48, 0.85)' : 'rgba(13, 19, 32, 0.7)',
                      border: isCurrent ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <span
                        style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          background: isCurrent ? 'rgba(16, 185, 129, 0.15)' : 'rgba(56, 189, 248, 0.12)',
                          border: isCurrent ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(56, 189, 248, 0.3)',
                          color: isCurrent ? 'var(--accent-emerald)' : 'var(--accent-cyan)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8125rem',
                          fontWeight: 700
                        }}
                      >
                        {step.date}
                      </span>

                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                        {step.subtitle[language]}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.375rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '0.75rem'
                      }}
                    >
                      {step.title[language]}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                      {step.description[language]}
                    </p>

                    {/* Technologies */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                      {step.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-badge" style={{ fontSize: '0.75rem' }}>
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
      </div>
    </section>
  );
};
