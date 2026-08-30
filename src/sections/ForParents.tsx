import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { parentCardsData } from '../data/parentFaq';
import { Heart, Globe, Cpu, Database, Rocket, Code2, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const ForParents: React.FC = () => {
  const { language, t } = useLanguage();

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe size={24} color="var(--accent-cyan)" />;
      case 'Cpu':
        return <Cpu size={24} color="var(--accent-indigo)" />;
      case 'Database':
        return <Database size={24} color="var(--accent-emerald)" />;
      case 'Rocket':
        return <Rocket size={24} color="var(--accent-purple)" />;
      case 'Code2':
        return <Code2 size={24} color="var(--accent-gold)" />;
      default:
        return <Globe size={24} color="var(--accent-cyan)" />;
    }
  };

  const summary = t.parents.summaryQuestions;
  const summarySteps = [
    { num: '01', q: summary.who.q, a: summary.who.a, color: 'var(--accent-cyan)' },
    { num: '02', q: summary.whatLearned.q, a: summary.whatLearned.a, color: 'var(--accent-indigo)' },
    { num: '03', q: summary.whatBuilt.q, a: summary.whatBuilt.a, color: 'var(--accent-purple)' },
    { num: '04', q: summary.whatWon.q, a: summary.whatWon.a, color: 'var(--accent-gold)' },
    { num: '05', q: summary.whatNext.q, a: summary.whatNext.a, color: 'var(--accent-emerald)' }
  ];

  return (
    <section id="parents" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Heart size={14} />
            <span>{t.parents.tag}</span>
          </div>
          <h2 className="section-title">{t.parents.title}</h2>
          <p className="section-subtitle">{t.parents.subtitle}</p>
        </div>

        {/* Featured Card: Full-Stack Developer Nima? */}
        <div
          className="stitch-card"
          style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(2, 132, 199, 0.15) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            marginBottom: '3rem',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div
              style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '10px',
                background: 'rgba(56, 189, 248, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <HelpCircle size={22} color="var(--accent-cyan)" />
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#ffffff'
              }}
            >
              {t.parents.question}
            </h3>
          </div>

          <p
            style={{
              fontSize: '1.1875rem',
              color: 'var(--text-primary)',
              lineHeight: 1.7,
              fontWeight: 500
            }}
          >
            {t.parents.answer}
          </p>
        </div>

        {/* 5 Concept Explanation Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem'
          }}
        >
          {parentCardsData.map((card) => (
            <div
              key={card.id}
              className="stitch-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(13, 19, 32, 0.7)'
              }}
            >
              <div>
                <div
                  style={{
                    width: '3.25rem',
                    height: '3.25rem',
                    borderRadius: '14px',
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  {getCardIcon(card.icon)}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1875rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3
                  }}
                >
                  {card.title[language]}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.90625rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {card.simpleDescription[language]}
                </p>
              </div>

              <div
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '0.8125rem',
                  color: 'var(--accent-cyan)',
                  fontStyle: 'italic'
                }}
              >
                💡 {card.analogy[language]}
              </div>
            </div>
          ))}
        </div>

        {/* 5 Seconds Quick Summary Strip (Kim? -> Nimalarni o'rgandi? -> Nima yaratdi? -> Yutuqlar? -> Maqsad?) */}
        <div
          className="stitch-card"
          style={{
            padding: '2.5rem',
            background: 'rgba(11, 16, 28, 0.9)',
            border: '1px solid rgba(99, 102, 241, 0.3)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700, color: '#ffffff' }}>
              {t.parents.guideSummaryTitle}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Kim? → Nimalarni o‘rgandi? → Nima yaratdi? → Qanday yutuqlarga ega? → Kelajakdagi maqsadi nima?
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}
          >
            {summarySteps.map((s, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.25rem',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: s.color, fontWeight: 700 }}>
                    {s.num}
                  </span>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: s.color }}>
                    {s.q}
                  </span>
                </div>
                <p style={{ fontSize: '0.84375rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {s.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
