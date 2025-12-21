import React from 'react';
import skills from '../data/skills';
import { useLocale } from '../i18n/LocaleProvider';

function Skills() {
    const { t } = useLocale();

    return (
        <div>
            <h2>{t('navbar.skills', 'Skills')}</h2>
            {skills.map((cat) => (
                <section key={cat.category} className="category-section" style={{ marginTop: 16 }}>
                    <h3 style={{ marginBottom: 8 }}>{cat.category}</h3>
                    <div className="skill-grid">
                        {cat.items.map((s) => (
                            <div className="skill-card" key={s.name}>
                                <img loading="lazy" className="skill-logo" src={s.logo || '/assets/logos/generic.svg'} alt={s.name} />
                                <div className="skill-name">{s.name}</div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default Skills;