import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { techStackData } from '../data/techStack';
import { TechIcon } from '../components/TechIcon';
import { Code2 } from 'lucide-react';

export const TechStack: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: t.tech.categories.all },
    { key: 'Frontend', label: t.tech.categories.frontend },
    { key: 'Backend', label: t.tech.categories.backend },
    { key: 'Database', label: t.tech.categories.database },
    { key: 'Tools', label: t.tech.categories.tools },
    { key: 'Other', label: t.tech.categories.other }
  ];

  const filteredTech = activeCategory === 'all'
    ? techStackData
    : techStackData.filter(item => item.category === activeCategory);

  return (
    <section id="tech" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>{t.tech.tag}</span>
          </div>
          <h2 className="section-title">{t.tech.title}</h2>
          <p className="section-subtitle">{t.tech.subtitle}</p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  border: isActive ? '1px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isActive ? 'linear-gradient(135deg, rgba(2, 132, 199, 0.35), rgba(79, 70, 229, 0.35))' : 'rgba(15, 23, 42, 0.6)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 0 15px rgba(56, 189, 248, 0.3)' : 'none'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tech Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredTech.map((item, idx) => (
            <div
              key={idx}
              className="stitch-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                background: 'rgba(13, 19, 32, 0.7)'
              }}
            >
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: `0 4px 15px ${item.color}25`
                }}
              >
                <TechIcon name={item.name} size={24} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.0625rem',
                      fontWeight: 700,
                      color: '#ffffff'
                    }}
                  >
                    {item.name}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.04)'
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {item.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
