import { JourneyStep } from '../types';

export const journeyData: JourneyStep[] = [
  {
    date: '13.05.2025',
    title: {
      uz: 'Dasturlashni boshladim',
      ru: 'Начало пути в программировании',
      en: 'Started Programming'
    },
    subtitle: {
      uz: 'ITLIVE Academy',
      ru: 'ITLIVE Academy',
      en: 'ITLIVE Academy'
    },
    description: {
      uz: 'Dasturlashga bo‘lgan kuchli shaxsiy qiziqishim sababli o‘rganishni boshladim va maqsadli ravishda birinchi qadamlarni qo‘ydim.',
      ru: 'Начал изучать программирование из искреннего личного интереса, поставив цель стать профессиональным разработчиком.',
      en: 'Began learning software development driven by personal curiosity and enthusiasm for technology.'
    },
    technologies: ['Algoritmlash', 'C++', 'Mantiqiy fikrlash'],
    status: 'completed',
    icon: 'Sparkles'
  },
  {
    date: 'Foundation',
    title: {
      uz: 'Asosiy bilimlar (Foundation)',
      ru: 'Фундаментальные основы (Foundation)',
      en: 'Core Fundamentals (Foundation)'
    },
    subtitle: {
      uz: 'Algoritmlar & Mantiq',
      ru: 'Алгоритмы и Логика',
      en: 'Algorithms & Problem Solving'
    },
    description: {
      uz: 'Dasturlashning fundamental tushunchalarini, ma’lumotlar tuzilmalari, algoritmlar va kompyuter mantiqiy asoslarini chuqur o‘rgandim.',
      ru: 'Глубоко освоил фундаментальные концепции программирования, структуры данных, алгоритмы и алгоритмическое мышление.',
      en: 'Mastered the core programming principles, basic data structures, algorithms, and computational logic.'
    },
    technologies: ['C++', 'Python Asoslari', 'Data Structures', 'Git'],
    status: 'completed',
    icon: 'BookOpen'
  },
  {
    date: 'Frontend',
    title: {
      uz: 'Web interfeyslar (Frontend)',
      ru: 'Пользовательские интерфейсы (Frontend)',
      en: 'Modern Interfaces (Frontend)'
    },
    subtitle: {
      uz: 'HTML, CSS, JS & React',
      ru: 'HTML, CSS, JS и React',
      en: 'HTML, CSS, JS & React'
    },
    description: {
      uz: 'HTML5, CSS3, zamonaviy JavaScript va React yordamida har qanday qurilmaga moslashuvchan, chiroyli va tezkor web sahifalar yaratishni o‘rgandim.',
      ru: 'Изучил разработку адаптивных, красивых и производительных веб-интерфейсов с помощью HTML5, CSS3, современного JavaScript и React.',
      en: 'Learned to build responsive, aesthetically refined, and fast interactive web interfaces using HTML, CSS, JavaScript, and React.'
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'TypeScript', 'TailwindCSS'],
    status: 'completed',
    icon: 'Layout'
  },
  {
    date: 'Backend',
    title: {
      uz: 'Web ilovalarning ichki qismi (Backend)',
      ru: 'Серверная часть приложений (Backend)',
      en: 'Server & Application Core (Backend)'
    },
    subtitle: {
      uz: 'C#, .NET 10 & ASP.NET Core',
      ru: 'C#, .NET 10 и ASP.NET Core',
      en: 'C#, .NET 10 & ASP.NET Core'
    },
    description: {
      uz: 'C#, zamonaviy .NET 10 va ASP.NET Core yordamida xavfsiz backend, RESTful API va ma’lumotlar bazalari bilan ishlashni o‘rgandim.',
      ru: 'Освоил разработку масштабируемого бэкенда, безопасных RESTful API и работы с базами данных на C#, .NET 10 и ASP.NET Core.',
      en: 'Acquired backend engineering skills with C#, .NET 10, and ASP.NET Core to construct secure REST APIs and database interactions.'
    },
    technologies: ['C#', '.NET 10', 'ASP.NET Core', 'PostgreSQL', 'MySQL', 'SQLite', 'Node.js'],
    status: 'completed',
    icon: 'Server'
  },
  {
    date: 'Hozir',
    title: {
      uz: 'Full-Stack loyihalar',
      ru: 'Full-Stack разработка и реальные проекты',
      en: 'Full-Stack Projects & Production'
    },
    subtitle: {
      uz: 'Frontend + Backend + Database',
      ru: 'Фронтенд + Бэкенд + Базы данных',
      en: 'Frontend + Backend + Database'
    },
    description: {
      uz: 'Frontend, Backend va Database bilimlarini birlashtirib, sun’iy intellekt (AI) integratsiyasiga ega real amaliy loyihalar yaratmoqdaman.',
      ru: 'Объединяю фронтенд, бэкенд и базы данных, создавая реальные практические проекты с интеграцией искусственного интеллекта.',
      en: 'Combining frontend, backend, and database expertise to develop end-to-end practical applications with AI capabilities.'
    },
    technologies: ['Full-Stack', 'AI Integratsiya', 'Docker', 'VPS Deployment', 'Git/GitHub'],
    status: 'current',
    icon: 'Rocket'
  }
];
