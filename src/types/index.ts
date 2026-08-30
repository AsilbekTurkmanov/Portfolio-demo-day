export type Language = 'uz' | 'ru' | 'en';

export interface ProjectItem {
  id: string;
  name: string;
  category: 'ai' | 'fullstack' | 'web';
  badge: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  simpleExplanation: {
    uz: string;
    ru: string;
    en: string;
  };
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  stats?: {
    label: { uz: string; ru: string; en: string };
    value: string;
  }[];
  highlights: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  imageGradient: string;
  iconName: string;
}

export interface JourneyStep {
  date: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  subtitle: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  technologies: string[];
  status: 'completed' | 'current';
  icon: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other';
  icon: string;
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  color: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  rank: {
    uz: string;
    ru: string;
    en: string;
  };
  rankBadge: 'gold' | 'silver' | 'bronze';
  category: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
}

export interface ParentCardItem {
  id: string;
  icon: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  simpleDescription: {
    uz: string;
    ru: string;
    en: string;
  };
  analogy: {
    uz: string;
    ru: string;
    en: string;
  };
}

export interface RoadmapStep {
  stage: {
    uz: string;
    ru: string;
    en: string;
  };
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  isCurrent?: boolean;
}
