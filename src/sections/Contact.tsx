import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, Copy, ExternalLink, MessageCircle } from 'lucide-react';
import { GithubIcon, InstagramIcon, TelegramIcon } from '../components/SocialIcons';

interface ContactProps {
  onCopyText: (text: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyText }) => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      id: 'telegram',
      name: t.contact.telegram,
      value: '@htpAsilbek',
      actionUrl: 'https://t.me/htpAsilbek',
      actionLabel: t.contact.openDirect,
      icon: TelegramIcon,
      color: '#229ED9',
      glow: 'rgba(34, 158, 217, 0.3)'
    },
    {
      id: 'phone',
      name: t.contact.phone,
      value: '+998 99 199 20 12',
      actionUrl: 'tel:+998991992012',
      actionLabel: t.contact.callNow,
      icon: Phone,
      color: '#10b981',
      glow: 'rgba(16, 185, 129, 0.3)'
    },
    {
      id: 'email',
      name: t.contact.email,
      value: 'asilbekturkmanov12@gmail.com',
      actionUrl: 'mailto:asilbekturkmanov12@gmail.com',
      actionLabel: t.contact.sendEmail,
      icon: Mail,
      color: '#ea4335',
      glow: 'rgba(234, 67, 53, 0.3)'
    },
    {
      id: 'instagram',
      name: t.contact.instagram,
      value: '@uzb.programmer',
      actionUrl: 'https://instagram.com/uzb.programmer',
      actionLabel: t.contact.openDirect,
      icon: InstagramIcon,
      color: '#E4405F',
      glow: 'rgba(228, 64, 95, 0.3)'
    },
    {
      id: 'github',
      name: t.contact.github,
      value: 'github.com/AsilbekTurkmanov',
      actionUrl: 'https://github.com/AsilbekTurkmanov',
      actionLabel: t.contact.openDirect,
      icon: GithubIcon,
      color: '#f0f6fc',
      glow: 'rgba(240, 246, 252, 0.25)'
    }
  ];

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageCircle size={14} />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        {/* Contact Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1080px',
            margin: '0 auto'
          }}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.id}
                className="stitch-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: 'rgba(13, 19, 32, 0.75)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '3.25rem',
                        height: '3.25rem',
                        borderRadius: '14px',
                        background: `radial-gradient(circle, ${method.glow} 0%, rgba(15, 23, 42, 0.9) 100%)`,
                        border: `1px solid ${method.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 0 15px ${method.glow}`
                      }}
                    >
                      <Icon size={22} color={method.color} />
                    </div>

                    <button
                      onClick={() => onCopyText(method.value.replace(/\s+/g, ''))}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'var(--text-secondary)',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      title="Nusxa olish"
                    >
                      <Copy size={13} />
                      <span>Copy</span>
                    </button>
                  </div>

                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.25rem' }}>
                    {method.name}
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      marginBottom: '1.5rem',
                      wordBreak: 'break-all'
                    }}
                  >
                    {method.value}
                  </div>
                </div>

                <a
                  href={method.actionUrl}
                  target={method.id === 'phone' || method.id === 'email' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    fontSize: '0.875rem',
                    padding: '0.65rem 1rem',
                    borderColor: `${method.color}40`
                  }}
                >
                  <ExternalLink size={15} color={method.color} />
                  <span>{method.actionLabel}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
