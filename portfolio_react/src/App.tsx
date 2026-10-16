import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { projectsData } from './data/projects';
import type { Project } from './data/projects';
import selfPortrait from './assets/SelfPortrait.png';
import './index.css';

export default function App() {
  const [selectedTag, setSelectedTag] = useState<string>('Alla');

  const tags = useMemo<string[]>(() => {
    const uniqueTags = new Set<string>();

    projectsData.forEach((project) => {
      project.tags.forEach((tag) => uniqueTags.add(tag));
    });

    return ['Alla', ...Array.from(uniqueTags)];
  }, []);

  const filteredProjects = useMemo<Project[]>(() => {
    if (selectedTag === 'Alla') {
      return projectsData;
    }

    return projectsData.filter((project) => project.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <section id="hem" className="content-section">
          <h1>Välkommen till min Portfolio</h1>
          <img src={selfPortrait} alt="Filip Brandt" className="self-portrait" />
          <p>Hej! Jag heter Filip och jag är Studerande Frontend-utvecklare med fullstack-kompetens</p>
        </section>

        <section id="om-mig" className="content-section">
          <h2>Om mig</h2>
          <p>Front-End Developer-student med en extrem inlärningsförmåga och hög uthållighet. Med ett starkt logiskt tänkande och förståelse för både
            klient- och serversidan (React/TypeScript/Node.js) sätter jag mig snabbt
            in i komplexa kodbaser. Söker nu en LIA-plats där min noggrannhet kan
            avlasta ert team från dag ett. Jag har B-körkort och kan jobba på plats i
            större delen av Skåne, hybrid eller helt remote.</p>
        </section>

        <section id="projekt" className="content-section">
          <h2>Mina projekt</h2>

          <div className="project-filter" aria-label="Filtrera projekt efter teknik">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={tag === selectedTag ? 'filter-button active' : 'filter-button'}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="projects-list">
            {filteredProjects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="kontakt" className="content-section">
          <h2>Kontakt</h2>
          <div className="contact-info">
            <p>
              <strong>E-post:</strong>{' '}
              <a href="mailto:filipb1@live.se">filipb1@live.se</a>
            </p>
            <p><strong>Telefon:</strong> 073-739 51 70</p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a href="https://www.linkedin.com/in/filip-brandt-a53603233/" target="_blank" rel="noopener noreferrer">
                filip-brandt
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a href="https://github.com/filip-brandt" target="_blank" rel="noopener noreferrer">
                filip-brandt
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}