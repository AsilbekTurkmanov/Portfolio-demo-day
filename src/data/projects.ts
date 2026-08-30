import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'ai-sotuvchi',
    name: 'AI Sotuvchi',
    category: 'ai',
    badge: {
      uz: 'AI & Smart CRM',
      ru: 'ИИ & Умная CRM',
      en: 'AI & Smart CRM'
    },
    description: {
      uz: 'Online va offline savdo qiluvchi bizneslar uchun avtonom AI savdo agenti va intellektual mini-CRM platformasi. ChatGPT 4o va Gemini orqali o‘zbek tilida tabiiy muloqot hamda ovozli sotuvni amalga oshiradi.',
      ru: 'Автономный ИИ-агент продаж и интеллектуальная мини-CRM платформа для онлайн и офлайн бизнеса. Естественный диалог и голосовые продажи на узбекском языке с помощью ChatGPT 4o и Gemini.',
      en: 'Autonomous AI Sales Agent & Smart Mini-CRM Platform for e-commerce and retail. Conducts natural voice and text sales dialogues in Uzbek using ChatGPT 4o & Gemini.'
    },
    simpleExplanation: {
      uz: 'Mijozlar bilan xuddi insondek gaplashib, tovarlarni tavsiya qiluvchi va buyurtmalarni avtomatik qabul qiluvchi aqlli sun’iy intellekt sotuvchi.',
      ru: 'Умный ИИ-продавец, который общается с клиентами как живой консультант, рекомендует товары и автоматически принимает заказы.',
      en: 'A smart AI sales assistant that chats naturally with customers, recommends products, and manages automated orders.'
    },
    technologies: ['React', 'JavaScript', 'TailwindCSS', 'Gemini AI', 'ChatGPT 4o', 'Voice STT/TTS', 'Lead CRM'],
    githubUrl: 'https://github.com/AsilbekTurkmanov/Ai-sotuvchi',
    liveUrl: 'https://asilbekturkmanov.github.io/Ai-sotuvchi/',
    highlights: {
      uz: [
        'Ikki tomonlama ovozli muloqot (Speech-to-Text va Text-to-Speech)',
        'O‘zbek tili va shevalarida tabiiy maslahat va savdo jarayoni',
        'Intellektual Lead Scoring va mijozlar hisobi (Mini-CRM)'
      ],
      ru: [
        'Двусторонняя голосовая связь (Speech-to-Text и Text-to-Speech)',
        'Консультации и продажи на узбекском языке и диалектах',
        'Интеллектуальный Lead Scoring и учет клиентов (Mini-CRM)'
      ],
      en: [
        'Bidirectional voice interactions (Speech-to-Text & Text-to-Speech)',
        'Natural product consultation and sales in Uzbek',
        'Intelligent Lead Scoring and client CRM pipeline'
      ]
    },
    stats: [
      { label: { uz: 'AI Model', ru: 'ИИ Модель', en: 'AI Model' }, value: 'GPT-4o / Gemini' },
      { label: { uz: 'Ovoz turi', ru: 'Тип голоса', en: 'Voice Type' }, value: 'Voice Cloning' }
    ],
    imageGradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #065f46 100%)',
    iconName: 'Bot'
  },
  {
    id: 'ai-telegram-bot-builder',
    name: 'AI Telegram Bot Builder',
    category: 'ai',
    badge: {
      uz: 'No-Code IDE & AI',
      ru: 'No-Code IDE и ИИ',
      en: 'No-Code IDE & AI'
    },
    description: {
      uz: 'AI yordamida dasturlashni bilmasdan ham murakkab Telegram botlar yaratish, Monaco Editor orqali kodni tahrirlash va interaktiv Telegram simulyatorida botni sinash platformasi.',
      ru: 'Платформа для визуального создания Telegram-ботов с помощью ИИ, редактирования кода в Monaco Editor и тестирования в симуляторе Telegram.',
      en: 'Visual web platform to generate intelligent Telegram bots using AI, inspect & edit code in Monaco Editor, and test live in a Telegram simulator.'
    },
    simpleExplanation: {
      uz: 'Telegramda avtomatik xizmat ko‘rsatuvchi botlarni hech qanday qiyinchiliksiz va dasturlash kodini yozmasdan turib yaratish dasturi.',
      ru: 'Инструмент для быстрого создания работающих Telegram-ботов без необходимости писать сложный код вручную.',
      en: 'An intuitive platform for building interactive Telegram bots without needing prior coding knowledge.'
    },
    technologies: ['React', 'TypeScript', 'Vite', 'Monaco Editor', 'Lucide React', 'Zip Exporter'],
    githubUrl: 'https://github.com/AsilbekTurkmanov/AI-Telegram-Bot-Builder',
    liveUrl: 'https://asilbekturkmanov.github.io/AI-Telegram-Bot-Builder/',
    highlights: {
      uz: [
        'Interaktiv Telegram ekrani simulyatori',
        'Monaco Code Editor orqali to‘liq kodni ko‘rish va o‘zgartirish',
        'Tayyor loyihani ZIP arxiv sifatida yuklab olish'
      ],
      ru: [
        'Интерактивный симулятор интерфейса Telegram',
        'Редактор кода Monaco с подсветкой синтаксиса',
        'Экспорт готового проекта в формате ZIP архива'
      ],
      en: [
        'Interactive real-time Telegram client simulator',
        'Full code viewing and customization in Monaco Editor',
        'Instant ZIP export of complete bot code architecture'
      ]
    },
    stats: [
      { label: { uz: 'Editor', ru: 'Редактор', en: 'Editor' }, value: 'Monaco IDE' },
      { label: { uz: 'Eksport', ru: 'Экспорт', en: 'Export' }, value: 'ZIP Package' }
    ],
    imageGradient: 'linear-gradient(135deg, #0f172a 0%, #0369a1 50%, #312e81 100%)',
    iconName: 'Sparkles'
  },
  {
    id: 'savdox',
    name: 'SavdoX',
    category: 'fullstack',
    badge: {
      uz: 'Full-Stack ERP & VPS',
      ru: 'Full-Stack ERP и VPS',
      en: 'Full-Stack ERP & VPS'
    },
    description: {
      uz: 'Do‘konlar va savdo markazlari uchun to‘liq savdo, ombor va tovarlar hisobini yuritish platformasi. Contabo VPS serverida Docker containerlari orqali professional joylashtirilgan.',
      ru: 'Полнофункциональная система автоматизации торговли, складского учета и управления магазином. Развернута на Contabo VPS через Docker контейнеры.',
      en: 'Comprehensive retail & inventory management ERP. Deployed on high-performance Contabo VPS using production Docker containers.'
    },
    simpleExplanation: {
      uz: 'Do‘kon egalari tovarlar qoldig‘i, kunlik savdo va foydani kompyuter yoki telefondan kuzatib boradigan qulay dastur.',
      ru: 'Система для магазинов, которая помогает легко вести учет товаров, отслеживать продажи и прибыль с любого устройства.',
      en: 'A digital point-of-sale and warehouse system enabling business owners to monitor real-time stock and revenue.'
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'Contabo VPS'],
    githubUrl: 'https://github.com/AsilbekTurkmanov/SavdoX',
    liveUrl: 'https://savdox.169.58.161.223.sslip.io',
    highlights: {
      uz: [
        'PostgreSQL ma’lumotlar bazasi bilan mustahkam xavfsiz arxitektura',
        'Docker va Docker Compose orqali serverda mustaqil ishlash',
        'Tovarlar qoldig‘i va kassa amaliyotlari hisob-kitobi'
      ],
      ru: [
        'Надежная архитектура с базой данных PostgreSQL',
        'Автономная работа в Docker и Docker Compose контейнерах',
        'Контроль складских остатков и кассовых операций'
      ],
      en: [
        'Robust PostgreSQL database architecture',
        'Fully containerized with Docker & Docker Compose on VPS',
        'Complete inventory tracking and cash register operations'
      ]
    },
    stats: [
      { label: { uz: 'Server', ru: 'Сервер', en: 'Server' }, value: 'Contabo VPS' },
      { label: { uz: 'DevOps', ru: 'DevOps', en: 'DevOps' }, value: 'Docker Compose' }
    ],
    imageGradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #064e3b 100%)',
    iconName: 'Database'
  },
  {
    id: 'medai',
    name: 'MedAI',
    category: 'fullstack',
    badge: {
      uz: 'Telehealth & .NET 10',
      ru: 'Телемедицина и .NET 10',
      en: 'Telehealth & .NET 10'
    },
    description: {
      uz: 'Klinik intellekt va telemeditsina platformasi. C# .NET 10 ASP.NET Core backend, ovozli AI shifokor konsultatsiyasi, dori vositalari o‘zaro ta’siri tahlili va GPS klinika xaritasi.',
      ru: 'Интеллектуальная медицинская телемедицинская платформа с бэкендом на C# .NET 10, голосовым ИИ-консультантом и интерактивной картой клиник с GPS.',
      en: 'Enterprise-grade clinical telehealth platform powered by C# .NET 10 Web API, voice-assisted AI consultations, and GPS clinic locator.'
    },
    simpleExplanation: {
      uz: 'Bemorlarga shifokor maslahatini olish, dorilar to‘g‘ri kelishini tekshirish va eng yaqin shifoxonani topishda yordam beruvchi tibbiy dastur.',
      ru: 'Медицинское приложение, которое помогает получить предварительную консультацию, проверить совместимость лекарств и найти ближайшую больницу.',
      en: 'A modern medical helper assisting users with preliminary health advice, drug safety checks, and clinic finding.'
    },
    technologies: ['React', 'TypeScript', 'C#', '.NET 10', 'ASP.NET Core', 'Voice STT/TTS', 'GPS Maps'],
    githubUrl: 'https://github.com/AsilbekTurkmanov/MedAi-Stitch-version',
    liveUrl: 'https://asilbekturkmanov.github.io/MedAi-Stitch-version/',
    highlights: {
      uz: [
        'Yuqori unumdor C# .NET 10 ASP.NET Core Web API',
        'Ovozli shifokor konsultatsiyasi va dori ta’sirlari baholash',
        'GPS geolokatsiya orqali yaqin shifoxonalar masofasini hisoblash'
      ],
      ru: [
        'Высокопроизводительный Web API на C# .NET 10',
        'Голосовая консультация и оценка взаимодействия препаратов',
        'GPS-навигация и расчет расстояний до ближайших клиник'
      ],
      en: [
        'High-performance C# .NET 10 ASP.NET Core Web API',
        'Voice consultation and pharmaceutical interaction engine',
        'GPS live distance calculation to emergency medical centers'
      ]
    },
    stats: [
      { label: { uz: 'Backend', ru: 'Бэкенд', en: 'Backend' }, value: 'C# .NET 10' },
      { label: { uz: 'Ovoz', ru: 'Голос', en: 'Voice' }, value: '3 Tilli STT/TTS' }
    ],
    imageGradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #4c0519 100%)',
    iconName: 'Activity'
  },
  {
    id: 'testplatform',
    name: 'TestPlatform',
    category: 'web',
    badge: {
      uz: 'EdTech & Analytics',
      ru: 'EdTech и Аналитика',
      en: 'EdTech & Analytics'
    },
    description: {
      uz: 'Zamonaviy bilim va baholash tizimi. Server bilan sinxron taymer, javoblarni avtomatik saqlash (autosave), Recharts interaktiv grafik tahlili va Google Stitch dizayn tizimi.',
      ru: 'Современная система тестирования и оценки знаний. Синхронизированный таймер, автосохранение ответов, графическая аналитика Recharts.',
      en: 'State-of-the-art knowledge testing and analytics system featuring server-synced countdown timer, instant autosave, and Recharts statistics.'
    },
    simpleExplanation: {
      uz: 'O‘quvchi va talabalar uchun test topshirish, xatolarni ko‘rish va natijalarni chiroyli grafiklarda tahlil qilish imkonini beruvchi tizim.',
      ru: 'Интерактивная система для прохождения тестов, детального разбора ошибок и наглядного анализа результатов в графиках.',
      en: 'An educational testing portal allowing students to take timed exams and review visual score breakdowns.'
    },
    technologies: ['React', 'TypeScript', 'Vite', 'Recharts', 'Confetti FX', 'Stitch Design'],
    githubUrl: 'https://github.com/AsilbekTurkmanov/TestPlatform-Demo-day',
    liveUrl: 'https://asilbekturkmanov.github.io/TestPlatform-Demo-day/',
    highlights: {
      uz: [
        'Server vaqti bilan sinxron taymer (qalloblikdan himoya)',
        'Har bir javobda lahzali saqlash (Autosave)',
        'Interaktiv grafiklar va har bir savol tahlili'
      ],
      ru: [
        'Синхронизированный с сервером таймер тестирования',
        'Мгновенное автосохранение ответов (Autosave)',
        'Интерактивные графики и детальный разбор ошибок'
      ],
      en: [
        'Anti-cheat server-synchronized countdown timer',
        'Instant autosave on every question selection',
        'Comprehensive Recharts visual score breakdown'
      ]
    },
    stats: [
      { label: { uz: 'Tahlil', ru: 'Аналитика', en: 'Analytics' }, value: 'Recharts' },
      { label: { uz: 'Dizayn', ru: 'Дизайн', en: 'Design' }, value: 'Google Stitch' }
    ],
    imageGradient: 'linear-gradient(135deg, #0f172a 0%, #3b0764 50%, #1e3a5f 100%)',
    iconName: 'CheckCircle2'
  }
];
