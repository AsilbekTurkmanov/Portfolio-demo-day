import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { roadmapData } from '../data/goals';
import { Compass, Target, ArrowDown, ChevronRight, Sparkles, Building2 } from 'lucide-react';

export const Goals: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="goals" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>{t.goals.tag}</span>
          </div>
          <h2 className="section-title">{t.goals.title}</h2>
        </div>

        {/* Main Goal Statement Card */}
        <div
          className="stitch-card"
          style={{
            maxWidth: '900px',
            margin: '0 auto 4rem auto',
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(79, 70, 229, 0.15) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div
            style={{
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: '16px',
              background: 'rgba(99, 102, 241, 0.2)',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
            }}
          >
            <Building2 size={28} color="var(--accent-indigo)" />
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.625rem',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.4,
              maxWidth: '750px',
              margin: '0 auto'
            }}
          >
            “{t.goals.statementText}”
          </h3>
        </div>

        {/* Visual 3-Stage Roadmap */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text-secondary)',
              textAlign: 'center',
              marginBottom: '2rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            {t.goals.roadmapTitle}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
            {roadmapData.map((step, idx) => {
              const isCurrent = step.isCurrent;
              return (
                <React.Fragment key={idx}>
                  <div
                    className="stitch-card"
                    style={{
                      padding: '1.75rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.5rem',
                      background: isCurrent ? 'rgba(16, 28, 48, 0.85)' : 'rgba(13, 19, 32, 0.65)',
                      border: isCurrent ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: isCurrent ? '0 10px 30px rgba(56, 189, 248, 0.15)' : 'none'
                    }}
                  >
                    {/* Stage number circle */}
                    <div
                      style={{
                        width: '3.25rem',
                        height: '3.25rem',
                        borderRadius: '14px',
                        background: isCurrent
                          ? 'linear-gradient(135deg, #0284c7, #4f46e5)'
                          : 'rgba(15, 23, 42, 0.9)',
                        border: isCurrent ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.125rem',
                        fontWeight: 800,
                        color: '#ffffff'
                      }}
                    >
                      0{idx + 1}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.35rem' }}>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            fontFamily: 'var(--font-mono)',
                            color: isCurrent ? 'var(--accent-cyan)' : 'var(--text-muted)',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          {step.stage[language]}
                        </span>

                        {isCurrent && (
                          <span
                            style={{
                              padding: '0.2rem 0.6rem',
                              borderRadius: '9999px',
                              background: 'rgba(56, 189, 248, 0.15)',
                              border: '1px solid rgba(56, 189, 248, 0.35)',
                              color: 'var(--accent-cyan)',
                              fontSize: '0.6875rem',
                              fontWeight: 600,
                              fontFamily: 'var(--font-mono)'
                            }}
                          >
                            {t.goals.currentBadge}
                          </span>
                        )}
                      </div>

                      <h4
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          marginBottom: '0.5rem'
                        }}
                      >
                        {step.title[language]}
                      </h4>

                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.90625rem', lineHeight: 1.6 }}>
                        {step.description[language]}
                      </p>
                    </div>
                  </div>

                  {idx < roadmapData.length - 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '-0.25rem 0' }}>
                      <div
                        style={{
                          width: '2rem',
                          height: '2rem',
                          borderRadius: '50%',
                          background: 'rgba(15, 23, 42, 0.9)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-cyan)'
                        }}
                      >
                        <ArrowDown size={14} />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
