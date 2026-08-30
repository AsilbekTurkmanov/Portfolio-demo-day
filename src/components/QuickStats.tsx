import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, Briefcase, Layers, Award } from 'lucide-react';

export const QuickStats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      value: t.stats.durationVal,
      label: t.stats.durationLabel,
      icon: Clock,
      color: 'var(--accent-cyan)',
      glow: 'rgba(56, 189, 248, 0.25)'
    },
    {
      value: t.stats.projectsVal,
      label: t.stats.projectsLabel,
      icon: Briefcase,
      color: 'var(--accent-indigo)',
      glow: 'rgba(99, 102, 241, 0.25)'
    },
    {
      value: t.stats.tracksVal,
      label: t.stats.tracksLabel,
      icon: Layers,
      color: 'var(--accent-purple)',
      glow: 'rgba(168, 85, 247, 0.25)'
    },
    {
      value: t.stats.awardsVal,
      label: t.stats.awardsLabel,
      icon: Award,
      color: 'var(--accent-gold)',
      glow: 'rgba(245, 158, 11, 0.3)'
    }
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.25rem',
        marginTop: '3.5rem'
      }}
    >
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className="stitch-card"
            style={{
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              background: 'rgba(13, 19, 32, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div
              style={{
                width: '3.25rem',
                height: '3.25rem',
                borderRadius: '14px',
                background: `radial-gradient(circle, ${stat.glow} 0%, rgba(15, 23, 42, 0.8) 100%)`,
                border: `1px solid ${stat.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: `0 0 15px ${stat.glow}`
              }}
            >
              <Icon size={24} color={stat.color} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: '#ffffff',
                  letterSpacing: '-0.02em'
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.84375rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.25rem',
                  fontWeight: 500
                }}
              >
                {stat.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
