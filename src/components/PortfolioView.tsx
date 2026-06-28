import React from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import { Project, Skill, Experience, CustomSection, ViewType } from '../types';

interface PortfolioViewProps {
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
  customSections: CustomSection[];
  onNavigate: (view: ViewType) => void;
  key?: string;
}

export default function PortfolioView({
  projects,
  skills,
  experiences,
  customSections,
  onNavigate
}: PortfolioViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#fdfcfb] text-[#1a1a1a] font-sans antialiased selection:bg-[#efeeea] selection:text-[#1a1a1a]"
    >
      {/* HEADER NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-12 h-20 bg-[#fdfcfb]/95 backdrop-blur-md border-b border-[#1a1a1a]/10">
        <div className="flex items-center space-x-8">
          <span className="text-xs tracking-[0.3em] font-bold uppercase text-[#1a1a1a]">Hibet Allah Messahel</span>
          <ul className="hidden md:flex items-center space-x-6 list-none">
            <li>
              <a href="#about" className="text-[11px] uppercase tracking-widest text-[#1a1a1a]/60 hover:text-[#1a1a1a] pb-1 transition-all">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-[11px] uppercase tracking-widest text-[#1a1a1a]/60 hover:text-[#1a1a1a] pb-1 transition-all">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-[11px] uppercase tracking-widest text-[#1a1a1a]/60 hover:text-[#1a1a1a] pb-1 transition-all">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="text-[11px] uppercase tracking-widest text-[#1a1a1a]/60 hover:text-[#1a1a1a] pb-1 transition-all">
                Education
              </a>
            </li>
            {experiences.length > 0 && (
              <li>
                <a href="#experience" className="text-[11px] uppercase tracking-widest text-[#1a1a1a]/60 hover:text-[#1a1a1a] pb-1 transition-all">
                  Experience
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="text-[11px] uppercase tracking-widest border-b border-[#1a1a1a] pb-0.5 font-bold hover:opacity-80 transition-all cursor-pointer"
            id="nav-contact"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="min-h-screen flex items-center px-8 md:px-12 pt-32 pb-16 max-w-[1100px] mx-auto relative overflow-hidden">
        <div className="max-w-[720px] z-10">
          <span className="inline-block bg-[#1a1a1a] text-white text-[9px] px-2.5 py-1 uppercase tracking-[0.2em] mb-6 font-mono">
            Available for PFE Internship
          </span>
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] tracking-tight mb-8 text-[#1a1a1a]">
            Hibet Allah <br />
            <span className="italic font-light">Messahel</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a]/70 font-serif max-w-xl mb-10 italic">
            5th-year AI student at ENSIA, Algeria, building projects at the intersection of deep learning, signal processing, and intelligent systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-[#1a1a1a] text-white uppercase text-[11px] tracking-[0.2em] hover:bg-neutral-800 transition-all text-center"
            >
              Selected Work
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 border border-[#1a1a1a] text-[#1a1a1a] uppercase text-[11px] tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all cursor-pointer text-center"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Dynamic decorative dot grid pattern */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 grid grid-cols-5 gap-3.5 opacity-[0.12] pointer-events-none select-none">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
          ))}
        </div>
      </header>

      <hr className="border-t border-[#1a1a1a]/10 max-w-[1100px] mx-auto" />

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-8 md:px-12 max-w-[1100px] mx-auto">
        <div className="font-mono text-[10px] text-[#1a1a1a]/40 tracking-[0.25em] uppercase mb-4">
          01 // About
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start mt-8">
          <div className="md:col-span-7 text-sm md:text-base text-[#1a1a1a]/80 leading-relaxed flex flex-col gap-6 font-serif">
            <p className="text-xl md:text-2xl leading-relaxed text-[#1a1a1a]/90 font-serif italic">
              "I'm a 5th-year AI engineering student at ENSIA, open to exploring all fields, roles, and opportunities within technology and engineering."
            </p>
            <p className="font-sans text-sm text-[#1a1a1a]/75">
              With a strong foundation in both theory and practice, I enjoy building systems that make sense of complex data. My work spans multiple domains — from EEG-based sleep stage classification using transformers, to agricultural planning with ML, to implementing foundational architectures like BERT and Transformers from scratch.
            </p>
            <p className="font-sans text-sm text-[#1a1a1a]/75">
              I am seeking a PFE internship where I can apply my knowledge, tackle new challenges, and contribute to solving real-world problems.
            </p>
          </div>
          
          <div className="md:col-span-5 grid grid-cols-1 gap-4 w-full">
            <div className="p-6 border border-[#1a1a1a]/10 bg-white rounded-none">
              <div className="text-[10px] uppercase opacity-40 font-mono tracking-wider mb-1">Currently</div>
              <div className="text-base font-serif italic text-[#1a1a1a]">5th year — AI Engineering, ENSIA</div>
            </div>
            <div className="p-6 border border-[#1a1a1a]/10 bg-[#f9f8f6] rounded-none">
              <div className="text-[10px] uppercase opacity-40 font-mono tracking-wider mb-1">Location</div>
              <div className="text-base font-serif italic text-[#1a1a1a]">Algiers, Algeria</div>
            </div>
            <div className="p-6 border border-[#1a1a1a]/10 bg-white rounded-none">
              <div className="text-[10px] uppercase opacity-40 font-mono tracking-wider mb-1">Seeking</div>
              <div className="text-base font-serif italic text-[#1a1a1a]">PFE Internship — AI / ML / Data Science</div>
            </div>
            <div className="p-6 border border-[#1a1a1a]/10 bg-[#f9f8f6] rounded-none">
              <div className="text-[10px] uppercase opacity-40 font-mono tracking-wider mb-1">Languages</div>
              <div className="text-base font-serif italic text-[#1a1a1a]">Arabic · French · English</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t border-[#1a1a1a]/10 max-w-[1100px] mx-auto" />

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-8 md:px-12 max-w-[1100px] mx-auto">
        <div className="font-mono text-[10px] text-[#1a1a1a]/40 tracking-[0.25em] uppercase mb-4">
          02 // Skills
        </div>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#1a1a1a] mb-12 italic">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[#1a1a1a]/10 bg-[#f9f8f6]">
          {skills.map((s, idx) => (
            <div
              key={s.id}
              className="p-8 border-r border-b border-[#1a1a1a]/10 bg-white hover:bg-[#f9f8f6]/40 transition-all duration-300 flex flex-col justify-between min-h-[250px]"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono opacity-40">0{idx + 1}</span>
                  <div className="text-xl">{s.icon}</div>
                </div>
                <h3 className="text-lg font-serif italic text-[#1a1a1a] mb-2 font-semibold">{s.name}</h3>
                <p className="text-xs text-[#1a1a1a]/60 leading-relaxed mb-6">{s.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {s.tags.map(t => (
                  <span key={t} className="text-[9px] font-mono tracking-wider uppercase bg-[#efeeea] border border-[#1a1a1a]/5 text-[#1a1a1a] px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-[#1a1a1a]/10 max-w-[1100px] mx-auto" />

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-8 md:px-12 max-w-[1100px] mx-auto">
        <div className="font-mono text-[10px] text-[#1a1a1a]/40 tracking-[0.25em] uppercase mb-4">
          03 // Projects
        </div>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#1a1a1a] mb-12 italic">
          Selected Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(p => (
            <div
              key={p.id}
              className="border border-[#1a1a1a]/10 rounded-none bg-white hover:bg-[#f9f8f6]/30 hover:border-[#1a1a1a]/40 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              <div className="p-8 pb-0 flex justify-between items-start">
                <span className="inline-block bg-[#1a1a1a] text-white text-[9px] px-2.5 py-1 uppercase tracking-widest font-mono">
                  {p.domain}
                </span>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-none border border-[#1a1a1a]/10 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white flex items-center justify-center transition-colors duration-200"
                    title="View on GitHub"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              <div className="p-8 pt-6 flex-1 flex flex-col">
                <h3 className="text-xl font-serif italic text-[#1a1a1a] mb-3 group-hover:translate-x-1 transition-transform duration-200">{p.title}</h3>
                <p className="text-xs md:text-sm text-[#1a1a1a]/60 leading-relaxed mb-6 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {p.tags.map(t => (
                    <span key={t} className="font-mono text-[9px] uppercase tracking-wider bg-[#efeeea] border border-[#1a1a1a]/5 text-[#1a1a1a] px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-[#1a1a1a]/10 max-w-[1100px] mx-auto" />

      {/* EDUCATION SECTION */}
      <section id="education" className="py-24 px-8 md:px-12 max-w-[1100px] mx-auto">
        <div className="font-mono text-[10px] text-[#1a1a1a]/40 tracking-[0.25em] uppercase mb-4">
          04 // Education
        </div>
        <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#1a1a1a] mb-12 italic">
          Academic Background
        </h2>
        <div className="relative p-8 md:p-12 border border-[#1a1a1a]/10 bg-[#f9f8f6] rounded-none">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-serif italic text-[#1a1a1a] font-semibold">Engineering Degree in Artificial Intelligence</h3>
              <div className="text-sm font-serif italic text-[#1a1a1a]/70 mt-1">ENSIA — École Nationale Supérieure d'Informatique, Algeria</div>
            </div>
            <div className="font-mono text-xs text-[#1a1a1a]/50 md:text-right">
              2022 — 2026 (Expected)
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#1a1a1a]/10 my-6"></div>
          <p className="text-xs text-[#1a1a1a]/40 tracking-wider uppercase font-mono mb-3">Core Coursework</p>
          <div className="flex flex-wrap gap-1.5">
            {[
              'Machine Learning',
              'Deep Learning',
              'Computer Vision',
              'Reinforcement Learning',
              'NLP',
              'Big Data',
              'HPC & CUDA',
              'Enterprise Computing',
              'Algorithms',
              'Statistics'
            ].map(course => (
              <span key={course} className="text-[10px] font-mono tracking-wider uppercase bg-white border border-[#1a1a1a]/10 text-[#1a1a1a] px-3 py-1">
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC WORK EXPERIENCE TIMELINE */}
      {experiences.length > 0 && (
        <>
          <hr className="border-t border-[#1a1a1a]/10 max-w-[1100px] mx-auto" />
          <section id="experience" className="py-24 px-8 md:px-12 max-w-[1100px] mx-auto">
            <div className="font-mono text-[10px] text-[#1a1a1a]/40 tracking-[0.25em] uppercase mb-4">
              05 // Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#1a1a1a] mb-12 italic">
              Work & Internships
            </h2>
            <div className="flex flex-col gap-6">
              {experiences.map(exp => (
                <div
                  key={exp.id}
                  className="p-8 border border-[#1a1a1a]/10 bg-white rounded-none hover:bg-[#f9f8f6]/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-serif italic text-[#1a1a1a] font-semibold">{exp.title}</h3>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#1a1a1a]/60 mt-0.5">{exp.company}</div>
                    </div>
                    <div className="md:text-right">
                      <div className="font-mono text-xs text-[#1a1a1a]/50">{exp.start} — {exp.end}</div>
                      {exp.location && <div className="text-xs text-[#1a1a1a]/40">{exp.location}</div>}
                    </div>
                  </div>
                  {exp.desc && <p className="text-xs md:text-sm text-[#1a1a1a]/70 leading-relaxed mb-4 whitespace-pre-line">{exp.desc}</p>}
                  {exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {exp.tags.map(t => (
                        <span key={t} className="text-[9px] font-mono tracking-wider uppercase bg-[#efeeea] border border-[#1a1a1a]/5 text-[#1a1a1a] px-2 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* DYNAMIC CUSTOM SECTIONS */}
      {customSections.map((section, idx) => {
        const orderNum = (experiences.length > 0 ? 6 : 5) + idx;
        const formattedNum = orderNum < 10 ? `0${orderNum}` : `${orderNum}`;
        return (
          <React.Fragment key={section.id}>
            <hr className="border-t border-[#1a1a1a]/10 max-w-[1100px] mx-auto" />
            <section id={`custom-${section.id}`} className="py-24 px-8 md:px-12 max-w-[1100px] mx-auto">
              <div className="font-mono text-[10px] text-[#1a1a1a]/40 tracking-[0.25em] uppercase mb-4">
                {formattedNum} // {section.title}
              </div>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#1a1a1a] mb-12 italic">
                {section.title}
              </h2>

              {section.type === 'list' && (
                <ul className="list-none p-0 flex flex-col gap-0 border-t border-[#1a1a1a]/10">
                  {section.content.split('\n').filter(l => l.trim()).map((line, i) => (
                    <li key={i} className="flex items-start gap-4 text-xs md:text-sm text-[#1a1a1a]/80 py-4 border-b border-[#1a1a1a]/10">
                      <span className="text-[#1a1a1a] font-mono text-[11px] font-bold">→</span>
                      {line.trim()}
                    </li>
                  ))}
                </ul>
              )}

              {section.type === 'text' && (
                <p className="text-xs md:text-sm text-[#1a1a1a]/70 leading-relaxed max-w-2xl whitespace-pre-wrap font-serif italic">
                  {section.content}
                </p>
              )}

              {(section.type === 'cards' || section.type === 'timeline') && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.content.split('\n').filter(l => l.trim()).map((line, i) => {
                    const [title, desc, date] = line.split('|').map(p => p.trim());
                    return (
                      <div key={i} className="p-6 border border-[#1a1a1a]/10 rounded-none bg-white hover:bg-[#f9f8f6]/30 transition-colors">
                        <div className="text-base font-serif italic text-[#1a1a1a] mb-1 font-semibold">{title}</div>
                        {desc && <div className="text-xs text-[#1a1a1a]/60 leading-relaxed">{desc}</div>}
                        {date && <div className="font-mono text-[10px] text-[#1a1a1a]/40 mt-3">{date}</div>}
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </React.Fragment>
        );
      })}

      <hr className="border-t border-[#1a1a1a]/10 max-w-[1100px] mx-auto" />

      {/* CONTACT CTA BANNER */}
      <section id="contact" className="py-24 px-8 md:px-12 max-w-[1100px] mx-auto">
        <div className="font-mono text-[10px] text-[#1a1a1a]/40 tracking-[0.25em] uppercase mb-4">
          Contact
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight text-[#1a1a1a] mb-6 italic">
              Let's build <br />something together
            </h2>
            <p className="text-sm text-[#1a1a1a]/60 leading-relaxed mb-8 max-w-[480px]">
              I'm actively looking for a PFE internship in AI, ML, or Data Science. If you have an interesting challenge or opportunity, I'd love to hear from you.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-[#1a1a1a] text-white uppercase text-[11px] tracking-[0.2em] hover:bg-neutral-800 transition-all cursor-pointer text-center"
            >
              Open Contact Form
            </button>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4 w-full">
            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center gap-4 p-5 border border-[#1a1a1a]/10 bg-white hover:bg-[#f9f8f6] transition-all text-left cursor-pointer"
            >
              <div className="w-9 h-9 rounded-none bg-[#efeeea] flex items-center justify-center text-[#1a1a1a] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-[#1a1a1a]/40 font-mono">Email</div>
                <div className="text-xs md:text-sm font-medium text-[#1a1a1a] truncate">hibet.allah.messahel@ensia.edu.dz</div>
              </div>
            </button>

            <a
              href="https://github.com/messahelhibetallah"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 border border-[#1a1a1a]/10 bg-white hover:bg-[#f9f8f6] transition-all text-left"
            >
              <div className="w-9 h-9 rounded-none bg-[#efeeea] flex items-center justify-center text-[#1a1a1a] shrink-0">
                <Github className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-[#1a1a1a]/40 font-mono">GitHub</div>
                <div className="text-xs md:text-sm font-medium text-[#1a1a1a] truncate">github.com/messahelhibetallah</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/hibet-allah-messahel-96279b259/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 border border-[#1a1a1a]/10 bg-white hover:bg-[#f9f8f6] transition-all text-left"
            >
              <div className="w-9 h-9 rounded-none bg-[#efeeea] flex items-center justify-center text-[#1a1a1a] shrink-0">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-[#1a1a1a]/40 font-mono">LinkedIn</div>
                <div className="text-xs md:text-sm font-medium text-[#1a1a1a] truncate">linkedin.com/in/hibet-allah-messahel</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER STATUS BAR */}
      <footer className="bg-[#1a1a1a] text-[#efeeea] flex flex-col md:flex-row items-center px-12 py-8 justify-between gap-4 font-mono">
        <div className="flex flex-wrap gap-6 justify-center">
          <span className="text-[9px] uppercase tracking-[0.2em] opacity-60">System Node: 12.0.44-b</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-green-400">Network: Stable</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.2em] opacity-60">© 2026 Hibet Allah Messahel</span>
        </div>
      </footer>
    </motion.div>
  );
}
