import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TechIcon } from './TechIcon';
import { X, ExternalLink, CheckCircle, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        background: 'rgba(3, 7, 18, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        animation: 'modalBackdropFade 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'rgba(13, 19, 32, 0.95)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.2)',
          position: 'relative',
          animation: 'modalContentScale 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '2.25rem',
            height: '2.25rem',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label={t.projects.closeModal}
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span
            style={{
              padding: '0.3rem 0.85rem',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: 'var(--accent-cyan)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600
            }}
          >
            {project.badge[language]}
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.875rem',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}
        >
          {project.name}
        </h3>

        {/* Full description */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.96875rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
          {project.description[language]}
        </p>

        {/* Parent-friendly note box */}
        <div
          style={{
            background: 'rgba(56, 189, 248, 0.05)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            borderRadius: '16px',
            padding: '1.25rem',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.875rem' }}>
            <Sparkles size={16} />
            <span>{t.projects.simpleExpTitle}</span>
          </div>
          <p style={{ color: 'var(--text-primary)', fontSize: '0.90625rem', lineHeight: 1.55 }}>
            {project.simpleExplanation[language]}
          </p>
        </div>

        {/* Key highlights */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.9375rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={16} color="var(--accent-indigo)" />
            {t.projects.highlightsTitle}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {project.highlights[language].map((hl, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <CheckCircle size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Badges */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {t.projects.techUsedTitle}
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech, idx) => (
              <div key={idx} className="tech-badge" style={{ padding: '0.35rem 0.85rem' }}>
                <TechIcon name={tech} size={14} />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ flex: '1 1 200px' }}
          >
            <ExternalLink size={16} />
            <span>{t.projects.liveBtn}</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ flex: '1 1 200px' }}
          >
            <GithubIcon size={16} />
            <span>{t.projects.githubBtn}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
