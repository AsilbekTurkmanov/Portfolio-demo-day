import { Language } from '../types';

export interface Translations {
  nav: {
    home: string;
    about: string;
    journey: string;
    tech: string;
    projects: string;
    achievements: string;
    parents: string;
    goals: string;
    contact: string;
    statusBadge: string;
    academy: string;
  };
  hero: {
    greeting: string;
    role: string;
    specialization: string;
    tagline: string;
    projectsBtn: string;
    githubBtn: string;
    experienceBadge: string;
    academyBadge: string;
  };
  stats: {
    durationVal: string;
    durationLabel: string;
    projectsVal: string;
    projectsLabel: string;
    tracksVal: string;
    tracksLabel: string;
    awardsVal: string;
    awardsLabel: string;
  };
  about: {
    tag: string;
    title: string;
    p1: string;
    p2: string;
    whyTitle: string;
    whyDesc: string;
    academyTitle: string;
    academyDesc: string;
  };
  journey: {
    tag: string;
    title: string;
    subtitle: string;
  };
  tech: {
    tag: string;
    title: string;
    subtitle: string;
    categories: {
      all: string;
      frontend: string;
      backend: string;
      database: string;
      tools: string;
      other: string;
    };
  };
  projects: {
    tag: string;
    title: string;
    subtitle: string;
    categories: {
      all: string;
      ai: string;
      fullstack: string;
      web: string;
    };
    liveBtn: string;
    githubBtn: string;
    modalDetailsBtn: string;
    modalTitle: string;
    highlightsTitle: string;
    simpleExpTitle: string;
    techUsedTitle: string;
    closeModal: string;
    visitLive: string;
    openRepo: string;
  };
  achievements: {
    tag: string;
    title: string;
    subtitle: string;
    celebrateBtn: string;
    verifiedBadge: string;
  };
  parents: {
    tag: string;
    title: string;
    subtitle: string;
    question: string;
    answer: string;
    guideSummaryTitle: string;
    summaryQuestions: {
      who: { q: string; a: string };
      whatLearned: { q: string; a: string };
      whatBuilt: { q: string; a: string };
      whatWon: { q: string; a: string };
      whatNext: { q: string; a: string };
    };
  };
  goals: {
    tag: string;
    title: string;
    statementTitle: string;
    statementText: string;
    roadmapTitle: string;
    currentBadge: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    telegram: string;
    instagram: string;
    email: string;
    phone: string;
    github: string;
    copySuccess: string;
    openDirect: string;
    callNow: string;
    sendEmail: string;
  };
  footer: {
    rights: string;
    demoDayNote: string;
    backToTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Men haqimda',
      journey: 'O‘rganish yo‘li',
      tech: 'Texnologiyalar',
      projects: 'Loyihalar',
      achievements: 'Yutuqlar',
      parents: 'Ota-onalar uchun',
      goals: 'Maqsadlar',
      contact: 'Aloqa',
      statusBadge: 'Ishga tayyor',
      academy: 'ITLIVE Academy bitiruvchisi'
    },
    hero: {
      greeting: 'Assalomu alaykum, men',
      role: 'Full-Stack Developer',
      specialization: 'C# • .NET 10 • React • AI Integratsiya',
      tagline: 'Dasturlashni o‘zim qiziqib boshladim va 1 yil 4 oy davomida real loyihalar yaratib, Full-Stack yo‘nalishida rivojlandim.',
      projectsBtn: '🚀 Loyihalarimni ko‘rish',
      githubBtn: '⌘ GitHub profilim',
      experienceBadge: '1 yil 4 oy amaliy tajriba',
      academyBadge: 'ITLIVE Academy'
    },
    stats: {
      durationVal: '1 yil 4 oy',
      durationLabel: 'Dasturlashni o‘rganish',
      projectsVal: '10+',
      projectsLabel: 'Amaliy loyiha',
      tracksVal: '3',
      tracksLabel: 'Foundation • Frontend • Backend',
      awardsVal: '4',
      awardsLabel: 'Musobaqa va olimpiada yutuqlari'
    },
    about: {
      tag: 'Tanishuv',
      title: 'Men haqimda',
      p1: 'Men dasturlashni 2025-yil 13-mayda o‘zimning qiziqishim sababli boshlaganman. Shu vaqt davomida Foundation, Frontend va Backend yo‘nalishlarini o‘rgandim va amaliy loyihalar yaratdim.',
      p2: 'Maqsadim — bilim va tajribamni yanada rivojlantirib, kelajakda yirik IT kompaniyalarda professional dasturchi sifatida faoliyat yuritish.',
      whyTitle: 'Nega dasturlash?',
      whyDesc: 'Yangi texnologiyalarni o‘rganish, o‘z g‘oyalarimni dasturga aylantirish va real loyihalar yaratish menga qiziq.',
      academyTitle: 'ITLIVE Academy',
      academyDesc: 'Foundation, Frontend va Backend kurslarini muvaffaqiyatli tamomlab, mustaqil amaliy loyihalar yaratish darajasiga yetdim.'
    },
    journey: {
      tag: 'Vaqt xaritasi',
      title: 'Nimalarni o‘rgandim',
      subtitle: 'Dasturlashga ilk qiziqishdan boshlab to‘liq Full-Stack loyihalarni ishlab chiqishgacha bo‘lgan bosqichlar.'
    },
    tech: {
      tag: 'Ko‘nikmalar',
      title: 'Texnologiyalar & Asboblar',
      subtitle: 'Loyihalarni yaratishda faol qo‘llaydigan dasturlash tillari, freymvorklar va ma’lumotlar bazalari.',
      categories: {
        all: 'Barchasi',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Ma’lumotlar bazasi',
        tools: 'Asboblar & Git',
        other: 'Boshqa'
      }
    },
    projects: {
      tag: 'Portfolio',
      title: 'Amaliy Loyihalarim',
      subtitle: 'O‘rgangan bilimlarim asosida yaratilgan, ishchi holatdagi real web ilovalar va tizimlar.',
      categories: {
        all: 'Barchasi',
        ai: 'AI & Sun’iy Intellekt',
        fullstack: 'Full-Stack Tizimlar',
        web: 'Web Ilovalar'
      },
      liveBtn: '🚀 Sinab ko‘rish',
      githubBtn: '⌘ GitHub kodini ko‘rish',
      modalDetailsBtn: 'Tafsilotlar',
      modalTitle: 'Loyiha haqida batafsil',
      highlightsTitle: 'Asosiy imkoniyatlari:',
      simpleExpTitle: 'Oddiy tilda tushuntirish:',
      techUsedTitle: 'Qo‘llanilgan texnologiyalar:',
      closeModal: 'Yopish',
      visitLive: 'Saytga o‘tish',
      openRepo: 'Kodni GitHubda ko‘rish'
    },
    achievements: {
      tag: 'Natijalar',
      title: 'Yutuqlar va G‘alabalar',
      subtitle: 'Olimpiada va dasturlash musobaqalarida qo‘lga kiritilgan faxrli o‘rinlar.',
      celebrateBtn: '🎉 G‘alabalarni nishonlash',
      verifiedBadge: 'Tasdiqlangan natija'
    },
    parents: {
      tag: 'Sodda tilda',
      title: 'Ota-onalar uchun',
      subtitle: 'Dasturlash va axborot texnologiyalari nima ekanligini sodda va tushunarli tilda bilib oling.',
      question: 'Full-Stack Developer nima?',
      answer: 'Full-Stack Developer — web saytning foydalanuvchi ko‘radigan qismini ham, saytning ichki ishlashini ta’minlaydigan qismini ham yaratishni biladigan dasturchi.',
      guideSummaryTitle: 'Xulosa: 5 muhim savolga javob',
      summaryQuestions: {
        who: { q: 'Kim?', a: 'Asilbek Turkmanov — 1 yil 4 oy davomida jiddiy o‘qigan Full-Stack dasturchi.' },
        whatLearned: { q: 'Nimalarni o‘rgandi?', a: 'Web saytlarning ko‘rinishi (Frontend), ichki miyasi (Backend) va ma’lumotlar bazasini.' },
        whatBuilt: { q: 'Nima yaratdi?', a: 'AI sotuvchi, Telegram botlar yaratuvchi tizim, SavdoX va MedAI kabi 5 ta to‘liq ishchi loyiha.' },
        whatWon: { q: 'Qanday yutuqlarga ega?', a: 'Normativ Challenge, Digital Mind, Algoritmlash (1-o‘rin) va Shahar IT Olimpiadasi (3-o‘rin).' },
        whatNext: { q: 'Kelajakdagi maqsadi nima?', a: 'Bilimlarini yanada oshirib, yirik IT kompaniyalarda professional dasturchi bo‘lib ishlash.' }
      }
    },
    goals: {
      tag: 'Kelajak',
      title: 'Kelajakdagi Maqsadim',
      statementTitle: 'Asosiy maqsad bayonoti',
      statementText: 'Kelajakda o‘z bilim va tajribamni yanada rivojlantirib, yirik IT kompaniyalarda professional dasturchi sifatida faoliyat yuritishni maqsad qilganman.',
      roadmapTitle: 'Rivojlanish bosqichlari',
      currentBadge: 'Hozirgi bosqich'
    },
    contact: {
      tag: 'Bog‘lanish',
      title: 'Men bilan aloqa',
      subtitle: 'Savollaringiz, takliflaringiz yoki hamkorlik uchun to‘g‘ridan-to‘g‘ri murojaat qilishingiz mumkin.',
      telegram: 'Telegram',
      instagram: 'Instagram',
      email: 'Email pochtasi',
      phone: 'Telefon raqam',
      github: 'GitHub profili',
      copySuccess: 'Nusxalandi!',
      openDirect: 'Ochish',
      callNow: 'Qo‘ng‘iroq qilish',
      sendEmail: 'Xat yozish'
    },
    footer: {
      rights: 'Barcha huquqlar himoyalangan.',
      demoDayNote: 'Demo Day taqdimoti uchun tayyorlandi.',
      backToTop: 'Yuqoriga qaytish'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      journey: 'Путь обучения',
      tech: 'Технологии',
      projects: 'Проекты',
      achievements: 'Достижения',
      parents: 'Для родителей',
      goals: 'Цели',
      contact: 'Контакты',
      statusBadge: 'Открыт к предложениям',
      academy: 'Выпускник ITLIVE Academy'
    },
    hero: {
      greeting: 'Здравствуйте, я',
      role: 'Full-Stack Developer',
      specialization: 'C# • .NET 10 • React • Интеграция ИИ',
      tagline: 'Начал программировать по собственному интересу и за 1 год и 4 месяца создал реальные проекты, развиваясь в направлении Full-Stack.',
      projectsBtn: '🚀 Посмотреть проекты',
      githubBtn: '⌘ Профиль GitHub',
      experienceBadge: '1 год 4 месяца опыта',
      academyBadge: 'ITLIVE Academy'
    },
    stats: {
      durationVal: '1 год 4 мес',
      durationLabel: 'Обучение программированию',
      projectsVal: '10+',
      projectsLabel: 'Практических проектов',
      tracksVal: '3',
      tracksLabel: 'Foundation • Frontend • Backend',
      awardsVal: '4',
      awardsLabel: 'Награды олимпиад и конкурсов'
    },
    about: {
      tag: 'Знакомство',
      title: 'Обо мне',
      p1: 'Я начал изучать программирование 13 мая 2025 года из собственного интереса. За это время освоил направления Foundation, Frontend и Backend и создал реальные практические проекты.',
      p2: 'Моя цель — непрерывно развивать свои знания и опыт, чтобы в будущем работать профессиональным разработчиком в крупных IT-компаниях.',
      whyTitle: 'Почему программирование?',
      whyDesc: 'Мне искренне интересно изучать передовые технологии, воплощать идеи в реальные программы и создавать полезные цифровые продукты.',
      academyTitle: 'ITLIVE Academy',
      academyDesc: 'Успешно окончил курсы Foundation, Frontend и Backend, выйдя на уровень самостоятельной разработки сложных систем.'
    },
    journey: {
      tag: 'Таймлайн',
      title: 'Что я изучил',
      subtitle: 'Путь от первого интереса к коду до самостоятельной разработки полноценных Full-Stack систем.'
    },
    tech: {
      tag: 'Навыки',
      title: 'Технологии и стек',
      subtitle: 'Языки программирования, фреймворки и базы данных, которые я активно применяю в проектах.',
      categories: {
        all: 'Все',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Базы данных',
        tools: 'Инструменты и Git',
        other: 'Другое'
      }
    },
    projects: {
      tag: 'Портфолио',
      title: 'Практические Проекты',
      subtitle: 'Реальные работающие веб-приложения и сервисы, разработанные на базе полученных знаний.',
      categories: {
        all: 'Все',
        ai: 'ИИ и Боты',
        fullstack: 'Full-Stack Системы',
        web: 'Веб-приложения'
      },
      liveBtn: '🚀 Попробовать демо',
      githubBtn: '⌘ Код на GitHub',
      modalDetailsBtn: 'Подробнее',
      modalTitle: 'О проекте подробно',
      highlightsTitle: 'Ключевые возможности:',
      simpleExpTitle: 'Простыми словами:',
      techUsedTitle: 'Использованные технологии:',
      closeModal: 'Закрыть',
      visitLive: 'Открыть проект',
      openRepo: 'Посмотреть репозиторий'
    },
    achievements: {
      tag: 'Результаты',
      title: 'Достижения и победы',
      subtitle: 'Призовые места на олимпиадах и профильных соревнованиях по программированию.',
      celebrateBtn: '🎉 Отпраздновать победы',
      verifiedBadge: 'Подтвержденный результат'
    },
    parents: {
      tag: 'Простым языком',
      title: 'Для родителей',
      subtitle: 'Понятное объяснение того, чем занимается Асилбек и что означают сложные термины.',
      question: 'Кто такой Full-Stack Developer?',
      answer: 'Full-Stack Developer — это программист, который умеет создавать как видимую пользователю часть сайта, так и внутреннюю серверную систему, обеспечивающую его работу.',
      guideSummaryTitle: 'Итог: ответы на 5 главных вопросов',
      summaryQuestions: {
        who: { q: 'Кто?', a: 'Асилбек Туркманов — увлеченный Full-Stack разработчик с опытом интенсивного обучения 1 год и 4 месяца.' },
        whatLearned: { q: 'Что изучил?', a: 'Интерфейсы (Frontend), серверную логику (Backend) и базы данных.' },
        whatBuilt: { q: 'Что создал?', a: '5 работающих проектов: ИИ-продавец, конструктор ботов, систему SavdoX и MedAI.' },
        whatWon: { q: 'Чего достиг?', a: '1-е места в конкурсах Normativ, Digital Mind, Алгоритмы и 3-е место в Городской IT Олимпиаде.' },
        whatNext: { q: 'Какая цель?', a: 'Стать профессиональным инженером-разработчиком в ведущих IT-корпорациях.' }
      }
    },
    goals: {
      tag: 'Перспективы',
      title: 'Моя цель на будущее',
      statementTitle: 'Главная цель',
      statementText: 'Моя цель — непрерывно углублять свои знания и опыт, чтобы в будущем работать профессиональным разработчиком в крупных IT-компаниях.',
      roadmapTitle: 'Этапы развития',
      currentBadge: 'Текущий этап'
    },
    contact: {
      tag: 'Связь',
      title: 'Контакты',
      subtitle: 'Всегда открыт для новых идей, предложений и профессионального сотрудничества.',
      telegram: 'Telegram',
      instagram: 'Instagram',
      email: 'Электронная почта',
      phone: 'Телефон',
      github: 'Профиль GitHub',
      copySuccess: 'Скопировано!',
      openDirect: 'Открыть',
      callNow: 'Позвонить',
      sendEmail: 'Написать'
    },
    footer: {
      rights: 'Все права защищены.',
      demoDayNote: 'Подготовлено специально для презентации Demo Day.',
      backToTop: 'Наверх'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      journey: 'Learning Path',
      tech: 'Technologies',
      projects: 'Projects',
      achievements: 'Achievements',
      parents: 'For Parents',
      goals: 'Goals',
      contact: 'Contact',
      statusBadge: 'Available for work',
      academy: 'ITLIVE Academy Graduate'
    },
    hero: {
      greeting: 'Hello, I am',
      role: 'Full-Stack Developer',
      specialization: 'C# • .NET 10 • React • AI Integration',
      tagline: 'I started programming out of genuine interest and dedicated 1 year and 4 months to creating real-world projects and mastering Full-Stack engineering.',
      projectsBtn: '🚀 View My Projects',
      githubBtn: '⌘ GitHub Profile',
      experienceBadge: '1 year 4 months experience',
      academyBadge: 'ITLIVE Academy'
    },
    stats: {
      durationVal: '1 yr 4 mos',
      durationLabel: 'Programming Journey',
      projectsVal: '10+',
      projectsLabel: 'Practical Projects',
      tracksVal: '3',
      tracksLabel: 'Foundation • Frontend • Backend',
      awardsVal: '4',
      awardsLabel: 'Competition & Olympiad Awards'
    },
    about: {
      tag: 'Overview',
      title: 'About Me',
      p1: 'I started programming on May 13, 2025, driven by personal curiosity and passion for technology. During this time, I completed Foundation, Frontend, and Backend tracks while building production-ready projects.',
      p2: 'My career goal is to continuously advance my knowledge and practical expertise to work as a professional software engineer at major IT companies.',
      whyTitle: 'Why Programming?',
      whyDesc: 'I am fascinated by exploring emerging technologies, turning creative concepts into working code, and building real-world solutions.',
      academyTitle: 'ITLIVE Academy',
      academyDesc: 'Successfully mastered the Foundation, Frontend, and Backend curriculums, reaching the level of independent system architecture.'
    },
    journey: {
      tag: 'Timeline',
      title: 'What I Learned',
      subtitle: 'The step-by-step evolution from introductory computer science to engineering production-grade Full-Stack solutions.'
    },
    tech: {
      tag: 'Skills',
      title: 'Technologies & Tools',
      subtitle: 'Programming languages, enterprise frameworks, and database engines actively utilized in my applications.',
      categories: {
        all: 'All',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        tools: 'Tools & Git',
        other: 'Other'
      }
    },
    projects: {
      tag: 'Portfolio',
      title: 'Practical Projects',
      subtitle: 'Live, fully functioning web applications and systems engineered with modern technology stacks.',
      categories: {
        all: 'All',
        ai: 'AI & Automation',
        fullstack: 'Full-Stack Systems',
        web: 'Web Applications'
      },
      liveBtn: '🚀 Try Live Demo',
      githubBtn: '⌘ View on GitHub',
      modalDetailsBtn: 'Details',
      modalTitle: 'Project Specifications',
      highlightsTitle: 'Key Architecture Highlights:',
      simpleExpTitle: 'Plain Language Explanation:',
      techUsedTitle: 'Technologies Used:',
      closeModal: 'Close',
      visitLive: 'Open Live Demo',
      openRepo: 'View Source Code'
    },
    achievements: {
      tag: 'Milestones',
      title: 'Achievements & Honors',
      subtitle: 'Top rankings and awards earned at competitive programming olympiads and tech challenges.',
      celebrateBtn: '🎉 Celebrate Victories',
      verifiedBadge: 'Verified Award'
    },
    parents: {
      tag: 'Plain Language',
      title: 'For Parents',
      subtitle: 'A straightforward, jargon-free guide to understanding what software engineering entails.',
      question: 'What is a Full-Stack Developer?',
      answer: 'A Full-Stack Developer is an engineer capable of creating both the visible visual part of a website and the backend server engine that powers all its operations.',
      guideSummaryTitle: 'Summary: 5 Core Questions Answered',
      summaryQuestions: {
        who: { q: 'Who is he?', a: 'Asilbek Turkmanov — a dedicated Full-Stack developer with 1 year 4 months of intensive training.' },
        whatLearned: { q: 'What did he learn?', a: 'User interfaces (Frontend), server architecture (Backend), and database management.' },
        whatBuilt: { q: 'What did he build?', a: '5 verified production projects including AI sales agents, bot builders, SavdoX ERP, and MedAI.' },
        whatWon: { q: 'What did he achieve?', a: '1st place in Normativ, Digital Mind, Algorithmic contests, and 3rd in the City IT Olympiad.' },
        whatNext: { q: 'What is his goal?', a: 'To work as a professional software engineer in top-tier global IT enterprises.' }
      }
    },
    goals: {
      tag: 'Future',
      title: 'My Career Goals',
      statementTitle: 'Core Objective',
      statementText: 'My career goal is to continuously advance my knowledge and practical expertise to work as a professional software engineer at major IT companies.',
      roadmapTitle: 'Development Roadmap',
      currentBadge: 'Current Phase'
    },
    contact: {
      tag: 'Connect',
      title: 'Get In Touch',
      subtitle: 'Feel free to reach out directly for questions, collaborative opportunities, or project discussions.',
      telegram: 'Telegram',
      instagram: 'Instagram',
      email: 'Email Address',
      phone: 'Phone Number',
      github: 'GitHub Profile',
      copySuccess: 'Copied to clipboard!',
      openDirect: 'Open',
      callNow: 'Call',
      sendEmail: 'Send Email'
    },
    footer: {
      rights: 'All rights reserved.',
      demoDayNote: 'Crafted specifically for Demo Day Presentation.',
      backToTop: 'Back to Top'
    }
  }
};
