import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Project, Skill, Experience, CustomSection, ViewType } from './types';
import { initialProjects, initialSkills } from './initialData';
import PortfolioView from './components/PortfolioView';
import ContactView from './components/ContactView';

export default function App() {
  const [view, setView] = useState<ViewType>('portfolio');

  // --- PERSISTENT STATE LOADING ---
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('hm_portfolio_projects');
      if (saved) {
        const parsed: Project[] = JSON.parse(saved);
        const initialIds = new Set(initialProjects.map(p => p.id));
        const customProjects = parsed.filter(p => !initialIds.has(p.id) && p.id.startsWith('proj_'));
        return [...initialProjects, ...customProjects];
      }
      return initialProjects;
    } catch {
      return initialProjects;
    }
  });

  const [skills, setSkills] = useState<Skill[]>(() => {
    try {
      const saved = localStorage.getItem('hm_portfolio_skills');
      if (saved) {
        const parsed: Skill[] = JSON.parse(saved);
        const initialIds = new Set(initialSkills.map(s => s.id));
        const customSkills = parsed.filter(s => !initialIds.has(s.id) && s.id.startsWith('skill_'));
        return [...initialSkills, ...customSkills];
      }
      return initialSkills;
    } catch {
      return initialSkills;
    }
  });

  const [experiences, setExperiences] = useState<Experience[]>(() => {
    try {
      const saved = localStorage.getItem('hm_portfolio_experiences');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [customSections, setCustomSections] = useState<CustomSection[]>(() => {
    try {
      const saved = localStorage.getItem('hm_portfolio_customSections');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // --- STATE SYNCHRONIZATION ---
  useEffect(() => {
    localStorage.setItem('hm_portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('hm_portfolio_skills', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('hm_portfolio_experiences', JSON.stringify(experiences));
  }, [experiences]);

  useEffect(() => {
    localStorage.setItem('hm_portfolio_customSections', JSON.stringify(customSections));
  }, [customSections]);

  // --- HANDLERS ---
  const handleNavigate = (targetView: ViewType) => {
    setView(targetView);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  return (
    <div className="min-h-screen bg-white text-[#2c2c2a]">
      <AnimatePresence mode="wait">
        {view === 'portfolio' && (
          <PortfolioView
            key="portfolio"
            projects={projects}
            skills={skills}
            experiences={experiences}
            customSections={customSections}
            onNavigate={handleNavigate}
          />
        )}

        {view === 'contact' && (
          <ContactView
            key="contact"
            onBack={() => handleNavigate('portfolio')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
