import { AchievementItem } from '../types';

export const achievementsData: AchievementItem[] = [
  {
    id: 'normativ-challenge',
    title: 'Normativ Challenge',
    rank: {
      uz: '1-o‘rin',
      ru: '1-е место',
      en: '1st Place'
    },
    rankBadge: 'gold',
    category: {
      uz: 'Amaliy Dasturlash Musobaqasi',
      ru: 'Практическое соревнование по программированию',
      en: 'Practical Programming Challenge'
    },
    description: {
      uz: 'Amaliy dasturiy talablar va texnik topshiriqlarni tezkor va to‘g‘ri bajarish bo‘yicha 1-o‘rin g‘olibi.',
      ru: 'Победитель 1-го места за быстрое и безошибочное выполнение технических требований и нормативов.',
      en: '1st place winner for rapid and compliant implementation of technical programming benchmarks.'
    }
  },
  {
    id: 'shahar-it-olimpiadasi',
    title: 'Shahar IT Olimpiadasi',
    rank: {
      uz: '3-o‘rin',
      ru: '3-е место',
      en: '3rd Place'
    },
    rankBadge: 'bronze',
    category: {
      uz: 'Shahar Miqyosidagi IT Olimpiada',
      ru: 'Городская олимпиада по IT',
      en: 'City IT Olympiad'
    },
    description: {
      uz: 'Shahar miqyosida o‘tkazilgan nufuzli IT olimpiadasida kuchli dasturchilar orasida faxrli 3-o‘rin sohibi.',
      ru: 'Призер 3-го места на престижной городской олимпиаде среди сильнейших молодых специалистов.',
      en: '3rd place medalist at the competitive city-wide Information Technology Olympiad.'
    }
  },
  {
    id: 'digital-mind',
    title: 'Digital Mind musobaqasi',
    rank: {
      uz: '1-o‘rin',
      ru: '1-е место',
      en: '1st Place'
    },
    rankBadge: 'gold',
    category: {
      uz: 'Raqamli Fikrlash & IT Challenge',
      ru: 'Цифровое мышление и IT-хакатон',
      en: 'Digital Mind & Tech Contest'
    },
    description: {
      uz: 'Raqamli yechimlar, zamonaviy mantiqiy vazifalar va dasturiy loyihalash bo‘yicha mutlaq 1-o‘rin egasi.',
      ru: 'Абсолютный победитель 1-го места по цифровым технологиям, логическим задачам и проектированию.',
      en: '1st place champion in digital problem solving, analytical challenges, and software logic.'
    }
  },
  {
    id: 'algoritmlash',
    title: 'Algoritmlash musobaqasi',
    rank: {
      uz: '1-o‘rin',
      ru: '1-е место',
      en: '1st Place'
    },
    rankBadge: 'gold',
    category: {
      uz: 'Algoritmik Masalalar Yechish',
      ru: 'Алгоритмическое программирование',
      en: 'Competitive Algorithmic Contest'
    },
    description: {
      uz: 'Murakkab matematik va algoritmik masalalarni samarali hamda optimallashgan usulda yechish bo‘yicha 1-o‘rin.',
      ru: '1-е место за эффективное и оптимизированное решение сложных алгоритмических задач.',
      en: '1st place award for crafting optimized and efficient algorithmic problem solutions.'
    }
  }
];
