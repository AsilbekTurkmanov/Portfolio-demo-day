import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 300,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.625rem',
        padding: '0.75rem 1.25rem',
        background: 'rgba(15, 23, 42, 0.95)',
        border: '1px solid rgba(16, 185, 129, 0.4)',
        borderRadius: '12px',
        color: '#ffffff',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.875rem',
        fontWeight: 600,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 20px rgba(16, 185, 129, 0.3)',
        backdropFilter: 'blur(12px)',
        animation: 'fadeIn 0.25s ease-out'
      }}
      role="status"
    >
      <CheckCircle2 size={18} color="var(--accent-emerald)" />
      <span>{message}</span>
    </div>
  );
};
