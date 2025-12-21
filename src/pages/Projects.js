import React from 'react';
import projects from '../data/projects';
import { useLocale } from '../i18n/LocaleProvider';
import './Projects.css';

function Projects() {
  const { t } = useLocale();

  return (
    <div className="projects-page">
      <h2>{t('navbar.projects', 'Projects')}</h2>
      {projects.map(p => (
        <section className="project-section" key={p.id}>
          <h3 className="project-name">{p.name}</h3>
          {(p.role || p.date) && (
            <div className="project-meta">
              {p.role && <span className="meta-role">{p.role}</span>}
              {p.role && p.date && <span className="meta-sep" />}
              {p.date && <span className="meta-date">{p.date}</span>}
            </div>
          )}
          <p className="project-summary">{p.summary}</p>

          <div className="project-tasks">
            <strong>Tasks</strong>
            <ul>
              {p.tasks.map((task, i) => <ul key={i}>{task}</ul>)}
            </ul>
          </div>
          <div className="project-tech">
            <strong style={{ marginRight: 8 }}>Tech</strong>
            {p.tech.map((t, idx) => (
              <span className="tech-chip" key={idx}>{t}</span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Projects;