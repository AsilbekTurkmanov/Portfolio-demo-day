import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { achievementsData } from '../data/achievements';
import confetti from 'canvas-confetti';
import { Trophy, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  const { language, t } = useLanguage();

  const handleCelebrate = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#fbbf24', '#a855f7', '#6366f1', '#10b981']
    });
  };

  return (
    <section id="achievements" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>{t.achievements.tag}</span>
          </div>
          <h2 className="section-title">{t.achievements.title}</h2>
          <p className="section-subtitle">{t.achievements.subtitle}</p>
        </div>

        {/* Achievements Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          {achievementsData.map((item) => {
            const isGold = item.rankBadge === 'gold';
            return (
              <div
                key={item.id}
                className="stitch-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: isGold
                    ? 'linear-gradient(145deg, rgba(15, 23, 42, 0.85) 0%, rgba(35, 27, 10, 0.4) 100%)'
                    : 'linear-gradient(145deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 20, 20, 0.4) 100%)',
                  border: isGold ? '1px solid rgba(245, 158, 11, 0.35)' : '1px solid rgba(205, 127, 50, 0.35)',
                  boxShadow: isGold ? '0 10px 25px rgba(245, 158, 11, 0.1)' : '0 10px 25px rgba(205, 127, 50, 0.08)'
                }}
              >
                <div>
                  {/* Top Rank Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '9999px',
                        background: isGold ? 'rgba(245, 158, 11, 0.15)' : 'rgba(205, 127, 50, 0.15)',
                        border: isGold ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(205, 127, 50, 0.4)',
                        color: isGold ? '#fbbf24' : '#f97316',
                        fontWeight: 700,
                        fontSize: '0.875rem'
                      }}
                    >
                      <span style={{ fontSize: '1.125rem' }}>{isGold ? '🥇' : '🥉'}</span>
                      <span>{item.rank[language]}</span>
                    </div>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.6875rem',
                        color: 'var(--accent-emerald)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      <CheckCircle2 size={12} />
                      <span>{t.achievements.verifiedBadge}</span>
                    </span>
                  </div>

                  {/* Competition Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.375rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                      lineHeight: 1.25
                    }}
                  >
                    {item.title}
                  </h3>

                  <div style={{ fontSize: '0.8125rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '1rem' }}>
                    {item.category[language]}
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {item.description[language]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Celebrate Confetti Trigger */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleCelebrate}
            className="btn btn-secondary"
            style={{
              padding: '0.75rem 1.75rem',
              borderRadius: '9999px',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: '#fbbf24'
            }}
          >
            <Sparkles size={18} color="#fbbf24" />
            <span>{t.achievements.celebrateBtn}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
