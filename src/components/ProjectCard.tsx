import React from 'react';
import { ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TechIcon } from './TechIcon';
import { ExternalLink, Info, Sparkles, Bot, Database, Activity, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const { language, t } = useLanguage();

  const getProjectIcon = () => {
    switch (project.iconName) {
      case 'Bot':
        return <Bot size={28} color="var(--accent-cyan)" />;
      case 'Sparkles':
        return <Sparkles size={28} color="var(--accent-indigo)" />;
      case 'Database':
        return <Database size={28} color="var(--accent-emerald)" />;
      case 'Activity':
        return <Activity size={28} color="var(--accent-purple)" />;
      case 'CheckCircle2':
        return <CheckCircle2 size={28} color="var(--accent-gold)" />;
      default:
        return <Sparkles size={28} color="var(--accent-cyan)" />;
    }
  };

  return (
    <div
      className="stitch-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '0',
        background: 'rgba(13, 19, 32, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Project Visual Header Banner */}
      <div
        style={{
          height: '180px',
          background: project.imageGradient,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '16px 16px',
            opacity: 0.35
          }}
        />

        {/* Central visual icon node */}
        <div
          style={{
            width: '4.5rem',
            height: '4.5rem',
            borderRadius: '20px',
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.2)',
            zIndex: 1,
            transition: 'transform 0.3s ease'
          }}
          className="card-icon-node"
        >
          {getProjectIcon()}
        </div>

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            right: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 2
          }}
        >
          <span
            style={{
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              color: 'var(--accent-cyan)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.71875rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              backdropFilter: 'blur(8px)'
            }}
          >
            {project.badge[language]}
          </span>

          <button
            onClick={() => onOpenDetails(project)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.25rem 0.65rem',
              borderRadius: '9999px',
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'var(--text-secondary)',
              fontSize: '0.71875rem',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s ease'
            }}
            title={t.projects.modalTitle}
          >
            <Info size={13} />
            <span>{t.projects.modalDetailsBtn}</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.375rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.625rem',
            lineHeight: 1.25
          }}
        >
          {project.name}
        </h3>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            lineHeight: 1.6,
            marginBottom: '1.25rem',
            flex: 1
          }}
        >
          {project.simpleExplanation[language]}
        </p>

        {/* Tech Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.5rem' }}>
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <div key={idx} className="tech-badge">
              <TechIcon name={tech} size={13} />
              <span>{tech}</span>
            </div>
          ))}
          {project.technologies.length > 4 && (
            <div className="tech-badge" style={{ color: 'var(--accent-cyan)' }}>
              +{project.technologies.length - 4}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {/* Primary Button */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ width: '100%', fontSize: '0.875rem', padding: '0.65rem 1rem' }}
          >
            <ExternalLink size={15} />
            <span>{t.projects.liveBtn}</span>
          </a>

          {/* Secondary Button */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ width: '100%', fontSize: '0.84375rem', padding: '0.6rem 1rem' }}
          >
            <GithubIcon size={15} />
            <span>{t.projects.githubBtn}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
