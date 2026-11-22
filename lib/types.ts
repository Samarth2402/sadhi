export interface PhotoItem {
  id: string;
  filename: string;
  title: string;
  alt: string;
  orientation: 'landscape' | 'portrait';
  caption: string;
  dateTag: string;
  locationTag: string;
  scrapbookRotation: string;
  scrapbookTapeColor: 'terracotta' | 'sage' | 'dustyrose' | 'warmgold' | 'mutedblue';
  people: string[];
  storyNote?: string;
}

export interface MemoryKeepsake {
  id: string;
  name: string;
  iconName: string;
  emoji: string;
  storyContext: string;
  details: string;
  quote?: string;
  color: string;
}

export interface StoryChapter {
  id: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  theme: string;
  mood: string;
  dateBadge?: string;
  location?: string;
  paragraphs: string[];
  keyHighlights: string[];
  scrapbookNotes: {
    text: string;
    author: 'Samarth' | 'Riddhi' | 'Both';
    tapeColor: 'terracotta' | 'sage' | 'dustyrose' | 'warmgold' | 'mutedblue';
    rotation?: string;
  }[];
  photos: PhotoItem[];
  keepsake?: MemoryKeepsake;
  easterEgg?: {
    prompt: string;
    secretText: string;
  };
}

export interface TimelineEvent {
  year: string;
  period: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}
