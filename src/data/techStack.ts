import { TechItem } from '../types';

export const techStackData: TechItem[] = [
  // Frontend
  {
    name: 'HTML',
    category: 'Frontend',
    icon: 'html',
    description: {
      uz: 'Web sahifalarning semantik va qulay tuzilmasi',
      ru: 'Семантическая и доступная структура веб-страниц',
      en: 'Semantic and accessible webpage structuring'
    },
    color: '#e34f26'
  },
  {
    name: 'CSS',
    category: 'Frontend',
    icon: 'css',
    description: {
      uz: 'Moslashuvchan (responsive) zamonaviy dizayn va animatsiyalar',
      ru: 'Современная адаптивная верстка, анимации и стили',
      en: 'Modern responsive styling and layout animations'
    },
    color: '#1572b6'
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    icon: 'javascript',
    description: {
      uz: 'Interaktivlik, asinxron amallar va brauzer mantiqi',
      ru: 'Интерактивность, асинхронные операции и логика браузера',
      en: 'Client-side interactivity and asynchronous operations'
    },
    color: '#f7df1e'
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: 'react',
    description: {
      uz: 'Komponentlarga asoslangan zamonaviy tezkor SPA interfeyslar',
      ru: 'Быстрые компонентные SPA интерфейсы и хуки',
      en: 'Component-based modern and fast single-page apps'
    },
    color: '#61dafb'
  },

  // Backend
  {
    name: 'C#',
    category: 'Backend',
    icon: 'csharp',
    description: {
      uz: 'Kuchli tiplangan, xavfsiz va tezkor dasturlash tili',
      ru: 'Строго типизированный, безопасный и мощный язык',
      en: 'Strongly-typed, secure, and performant language'
    },
    color: '#9b4993'
  },
  {
    name: '.NET 10',
    category: 'Backend',
    icon: 'dotnet',
    description: {
      uz: 'Eng so‘nggi avlod yuqori unumdor ishlab chiqish platformasi',
      ru: 'Высокопроизводительная платформа последнего поколения',
      en: 'Cutting-edge high-performance execution framework'
    },
    color: '#512bd4'
  },
  {
    name: 'ASP.NET Core',
    category: 'Backend',
    icon: 'aspnet',
    description: {
      uz: 'Masshtablanuvchi web serverlar va RESTful API arxitekturasi',
      ru: 'Масштабируемые веб-серверы и архитектура REST API',
      en: 'Scalable web servers and secure RESTful APIs'
    },
    color: '#5c2d91'
  },

  // Database
  {
    name: 'PostgreSQL',
    category: 'Database',
    icon: 'postgresql',
    description: {
      uz: 'Kuchli va ishonchli ochiq manbali relyatsion ma’lumotlar bazasi',
      ru: 'Мощная и надежная реляционная база данных',
      en: 'Robust enterprise-grade relational database system'
    },
    color: '#4169e1'
  },
  {
    name: 'MySQL',
    category: 'Database',
    icon: 'mysql',
    description: {
      uz: 'Keng tarqalgan, samarali relyatsion ma’lumotlar bazasi',
      ru: 'Популярная и эффективная реляционная база данных',
      en: 'Widely-used relational database management system'
    },
    color: '#00758f'
  },
  {
    name: 'SQLite',
    category: 'Database',
    icon: 'sqlite',
    description: {
      uz: 'Ixcham, yengil va mustaqil o‘rnatilgan ma’lumotlar bazasi',
      ru: 'Компактная, легкая встраиваемая база данных',
      en: 'Lightweight, self-contained embedded SQL database engine'
    },
    color: '#003b57'
  },

  // Tools
  {
    name: 'Git',
    category: 'Tools',
    icon: 'git',
    description: {
      uz: 'Kodni versiyalash, tarmoqlash va o‘zgarishlarni nazorat qilish',
      ru: 'Система контроля версий и управления ветками кода',
      en: 'Distributed version control and codebase tracking'
    },
    color: '#f05032'
  },
  {
    name: 'GitHub',
    category: 'Tools',
    icon: 'github',
    description: {
      uz: 'Repozitoriylar, CI/CD, jamoaviy ishlash va loyihalar hostingi',
      ru: 'Хостинг репозиториев, CI/CD и командная работа',
      en: 'Code hosting, collaboration, and deployment platform'
    },
    color: '#f0f6fc'
  },

  // Other
  {
    name: 'Python',
    category: 'Other',
    icon: 'python',
    description: {
      uz: 'Avtomatlashtirish, botlar va algoritmlash uchun qulay til',
      ru: 'Язык для автоматизации, ботов и алгоритмических задач',
      en: 'Versatile language for bots, scripts, and algorithms'
    },
    color: '#3776ab'
  },
  {
    name: 'C++',
    category: 'Other',
    icon: 'cpp',
    description: {
      uz: 'Chuqur algoritmlash va xotira boshqaruvi poydevori',
      ru: 'Основы глубокой алгоритмизации и управления памятью',
      en: 'Low-level control, algorithms, and performance foundation'
    },
    color: '#00599c'
  }
];
