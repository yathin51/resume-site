import React from 'react';
import experiences from '../data/experience';
import { useLocale } from '../i18n/LocaleProvider';

function Experience() {
  const { t } = useLocale();

  return (
    <div>
      <h2>{t('navbar.experience', 'Experience')}</h2>
      {experiences.map(exp => (
        <section className="experience-section" key={exp.id} aria-labelledby={`exp-${exp.id}`}>
          <div className="experience-header">
            {exp.companyLogo && (
              <img src={exp.companyLogo} alt={`${exp.company} logo`} className="company-logo" />
            )}
            <div>
              <h3 id={`exp-${exp.id}`} className="experience-role">{exp.role}</h3>
              <div className="experience-meta">{exp.company} — {exp.period}{exp.location ? ` — ${exp.location}` : ''}</div>
            </div>
          </div>

          {exp.background && <p className="experience-background">{exp.background}</p>}

          {exp.achievements && (
            <div className="experience-achievements">
              <strong>Key achievements:</strong>
              <ul className="achievement-list">
                {exp.achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}

          {exp.bullets && (
            <ul className="experience-bullets">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}

          {exp.tech && (
            <div className="experience-tech">Tech:
              {exp.tech.map((tech, idx) => (
                <span className="tech-chip" key={idx}>{tech}</span>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

export default Experience;