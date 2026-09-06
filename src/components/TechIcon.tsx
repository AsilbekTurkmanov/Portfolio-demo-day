import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = '', size = 20 }) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normalized) {
    case 'react':
      return (
        <svg className={className} width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#F7DF1E" d="M3 3h18v18H3V3z"/>
          <path fill="#000000" d="M12.5 15.5c0 1.8-1.1 2.5-2.7 2.5-1.5 0-2.3-.7-2.7-1.5l1.6-.9c.3.5.6.8 1.1.8.6 0 .9-.3.9-1v-5.2h1.8v5.3zm4.7-.2c.4.6.9 1 1.7 1 .7 0 1.2-.4 1.2-.9 0-.6-.5-.8-1.4-1.2-1.3-.5-2.2-1.2-2.2-2.4 0-1.2.9-2.1 2.3-2.1 1 0 1.8.4 2.3 1.3l-1.5.9c-.3-.5-.5-.7-.8-.7-.4 0-.7.3-.7.6 0 .4.3.6 1.1 1 1.4.6 2.5 1.1 2.5 2.6 0 1.5-1.2 2.3-2.7 2.3-1.5 0-2.5-.7-3-1.8l1.5-.7z"/>
        </svg>
      );
    case 'typescript':
    case 'ts':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#3178C6" d="M3 3h18v18H3V3z"/>
          <path fill="#ffffff" d="M7 9h6v1.8h-2.1v6.2h-1.9v-6.2H7V9zm7.3 5.4c.4.5.9.8 1.6.8.6 0 1-.3 1-.7 0-.5-.4-.7-1.2-1-1.1-.4-1.8-1-1.8-2 0-1.1.9-1.9 2.2-1.9 1 0 1.6.4 2.1 1.1l-1.3.9c-.2-.4-.4-.6-.7-.6-.3 0-.5.2-.5.5 0 .3.3.5.9.7 1.3.5 2.1 1 2.1 2.2 0 1.3-1 2.1-2.5 2.1-1.3 0-2.2-.6-2.6-1.5l1.4-.6z"/>
        </svg>
      );
    case 'html':
    case 'html5':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#E34F26" d="M4.2 3.2l1.4 16.3 6.4 1.8 6.4-1.8 1.4-16.3H4.2zm13.1 4.5l-.2 2.3H8.3l.2 2.3h8.3l-.6 6.3-4.2 1.2-4.2-1.2-.3-3.2h2.2l.1 1.6 2.2.6 2.2-.6.3-2.7H6.2l-.7-8.9h12l-.2 2.3z"/>
        </svg>
      );
    case 'css':
    case 'css3':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#1572B6" d="M4.2 3.2l1.4 16.3 6.4 1.8 6.4-1.8 1.4-16.3H4.2zm13 4.5l-.2 2.3H8.3l.2 2.3h8.3l-.6 6.3-4.2 1.2-4.2-1.2-.3-3.2h2.2l.1 1.6 2.2.6 2.2-.6.3-2.7H6.2l-.7-8.9h12l-.2 2.3z"/>
        </svg>
      );
    case 'csharp':
    case 'c':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#9B4993" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.2 14.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5c1.45 0 2.74.69 3.55 1.76l-1.6 1.2c-.46-.62-1.18-1.02-1.95-1.02-1.41 0-2.56 1.15-2.56 2.56s1.15 2.56 2.56 2.56c.77 0 1.49-.4 1.95-1.02l1.6 1.2c-.81 1.07-2.1 1.76-3.55 1.76zm6.7-3.8h-.8v.8h-.8v-.8h-.8v-.8h.8v-.8h.8v.8h.8v.8zm-1.8-2h-.8v.8h-.8v-.8h-.8v-.8h.8v-.8h.8v.8h.8v.8z"/>
        </svg>
      );
    case 'dotnet':
    case 'dotnet10':
    case 'net10':
    case 'net':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <rect width="24" height="24" rx="5" fill="#512BD4"/>
          <text x="12" y="16" fill="#ffffff" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">.NET</text>
        </svg>
      );
    case 'aspnet':
    case 'aspnetcore':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <rect width="24" height="24" rx="5" fill="#5C2D91"/>
          <text x="12" y="15.5" fill="#ffffff" fontSize="8.5" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">ASP</text>
        </svg>
      );
    case 'postgresql':
    case 'postgres':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#4169E1" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 16.5c-3 0-5.5-2.2-5.5-5s2.5-5 5.5-5c1.8 0 3.3.8 4.3 2l-1.6 1.4c-.6-.7-1.6-1.2-2.7-1.2-1.9 0-3.3 1.3-3.3 2.8s1.4 2.8 3.3 2.8c1.1 0 2.1-.5 2.7-1.2l1.6 1.4c-1 1.2-2.5 2-4.3 2z"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#00758F" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 14h-2v-8h2v8zm5 0h-2v-5c0-.6-.4-1-1-1s-1 .4-1 1v5h-2v-8h2v1.2c.5-.8 1.4-1.2 2.3-1.2 1.5 0 2.7 1.2 2.7 2.7v5.3z"/>
        </svg>
      );
    case 'sqlite':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <rect width="24" height="24" rx="5" fill="#003B57"/>
          <text x="12" y="15" fill="#00A2D3" fontSize="8" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">SQL</text>
        </svg>
      );
    case 'git':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#F05032" d="M21.7 10.9L13.1 2.3c-.4-.4-1.1-.4-1.5 0L9.4 4.5l2.2 2.2c.4-.1.9 0 1.2.3.4.4.5 1 .3 1.5l2.1 2.1c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1s-1.5.6-2.1 0c-.4-.4-.5-1-.3-1.5l-2-2v4.4c.2.2.3.5.3.8 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.7.4-1l-.1-5.7c-.2-.3-.4-.6-.4-1 0-.6.4-1.2 1-1.4L7.3 4.8 2.3 9.8c-.4.4-.4 1.1 0 1.5l8.6 8.6c.4.4 1.1.4 1.5 0l9.3-9.3c.4-.4.4-1.1 0-1.7z"/>
        </svg>
      );
    case 'github':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#f0f6fc" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );
    case 'python':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#3776AB" d="M11.9 2c-3 0-5 1.2-5 3.3v1.8h5.1v.6H5.4C3.4 7.7 2 9.5 2 12.2s1.4 4.5 3.4 4.5h1.7v-2.3c0-2 1.7-3.7 3.7-3.7h5.1c1.5 0 2.8-1.3 2.8-2.8V5.3C18.7 3.2 16.7 2 11.9 2zm-1.8 1.8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/>
          <path fill="#FFD43B" d="M12.1 22c3 0 5-1.2 5-3.3v-1.8H12v-.6h6.6c2 0 3.4-1.8 3.4-4.5s-1.4-4.5-3.4-4.5h-1.7v2.3c0 2-1.7 3.7-3.7 3.7H8.1c-1.5 0-2.8 1.3-2.8 2.8v2.6c0 2.1 2 3.3 6.8 3.3zm1.8-1.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
        </svg>
      );
    case 'cpp':
    case 'cplusplus':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#00599C" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 13.8c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8c1.2 0 2.3.6 3 1.5l-1.4 1c-.4-.5-1-.8-1.6-.8-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2c.6 0 1.2-.3 1.6-.8l1.4 1c-.7.9-1.8 1.5-3 1.5zm6.5-3.1h-.9v.9h-.8v-.9h-.9v-.8h.9v-.9h.8v.9h.9v.8zm3 0h-.9v.9h-.8v-.9h-.9v-.8h.9v-.9h.8v.9h.9v.8z"/>
        </svg>
      );
    case 'docker':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path fill="#2496ED" d="M13.98 10.37h1.96v1.96h-1.96zm-2.45 0h1.96v1.96h-1.96zm-2.45 0h1.96v1.96H9.08zm-2.45 0h1.96v1.96H6.63zm4.9-2.45h1.96v1.96h-1.96zm-2.45 0h1.96v1.96H9.08zm4.9 0h1.96v1.96h-1.96zm0-2.45h1.96v1.96h-1.96zM22.5 11.5c-.38-.28-1.25-.38-1.9-.3-.1-.66-.48-1.28-1.07-1.63l-.43-.25-.28.42c-.4.6-.48 1.34-.3 2-.43.2-.95.3-1.4.3H1.7c-.38 0-.7.3-.7.68 0 2.8 1.3 5.4 3.5 7.1 2.1 1.6 4.8 2.2 7.5 1.7 5.2-.9 9.3-5.2 9.9-10.4.1-.1.1-.2.1-.3z"/>
        </svg>
      );
    case 'telegram':
    case 'telegrambot':
    case 'telegrambotapi':
      return (
        <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#229ED9" />
          <path d="M7 11.8l9-3.7c.4-.2.8.1.6.6l-1.6 7.5c-.1.4-.4.5-.7.3l-2.1-1.6-1 1c-.1.1-.2.2-.4.2l.1-2.2 4.1-3.7c.2-.2 0-.3-.2-.1L9.8 13l-2.1-.7c-.5-.1-.5-.5.1-.7z" fill="#ffffff" />
        </svg>
      );
    default:
      return (
        <div style={{ width: size, height: size, borderRadius: '4px', background: 'rgba(56, 189, 248, 0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#38bdf8', fontWeight: 'bold' }}>
          {name.substring(0, 2).toUpperCase()}
        </div>
      );
  }
};
