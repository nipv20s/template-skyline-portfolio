import { create } from 'zustand';

export interface Section {
  id: string;
  title: string;
  icon: string;
  position: number;
}

interface PortfolioState {
  currentSection: number;
  carPosition: number;
  isMoving: boolean;
  sections: Section[];
  setCurrentSection: (section: number) => void;
  setCarPosition: (position: number) => void;
  setIsMoving: (moving: boolean) => void;
  nextSection: () => void;
  previousSection: () => void;
}

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  currentSection: 0,
  carPosition: 0,
  isMoving: false,
  sections: [
    { id: 'welcome', title: 'Welcome', icon: 'Home', position: 0 },
    { id: 'about', title: 'About Me', icon: 'User', position: 25 },
    { id: 'projects', title: 'Projects', icon: 'Code', position: 50 },
    { id: 'resume', title: 'Resume', icon: 'FileText', position: 75 },
    { id: 'contact', title: 'Contact', icon: 'Mail', position: 100 },
  ],
  setCurrentSection: (section) => set({ currentSection: section }),
  setCarPosition: (position) => set({ carPosition: position }),
  setIsMoving: (moving) => set({ isMoving: moving }),
  nextSection: () => {
    const { currentSection, sections } = get();
    if (currentSection < sections.length - 1) {
      const nextSection = currentSection + 1;
      set({ 
        currentSection: nextSection, 
        carPosition: sections[nextSection].position,
        isMoving: true 
      });
      setTimeout(() => set({ isMoving: false }), 2000);
    }
  },
  previousSection: () => {
    const { currentSection, sections } = get();
    if (currentSection > 0) {
      const prevSection = currentSection - 1;
      set({ 
        currentSection: prevSection, 
        carPosition: sections[prevSection].position,
        isMoving: true 
      });
      setTimeout(() => set({ isMoving: false }), 2000);
    }
  },
}));