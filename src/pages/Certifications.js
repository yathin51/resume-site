import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from '../i18n/LocaleProvider';
import certificates from '../data/certificates';


function Certifications() {
  const { t } = useLocale();
  const [openId, setOpenId] = useState(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target)) setOpenId(null);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <div ref={wrapperRef}>
      <h2>{t('navbar.certifications', 'Education & Certifications')}</h2>

      <section style={{ marginBottom: 20 }}>
        <h3>{t('about.educationTitle', 'Education')}</h3>
        <div className="education-list">
          <p><strong>Bachelors in Electronics & Communication Engineering</strong> — <bold>[Visvesvaraya Technological University]</bold>, [2013]</p>
        </div>
      </section>

      <div className="certificates-list">
        {certificates.map((c) => (
          <div key={c.id} className="cert-item">
            <div className="cert-meta">
              <div className="cert-text">
                <h3 className="cert-title">{c.title}</h3>
                <p className="cert-desc">{c.desc}</p>
              </div>

              <div className="cert-actions">
                <button
                  className="cert-icon"
                  aria-expanded={openId === c.id}
                  onClick={(e) => { e.stopPropagation(); setOpenId(openId === c.id ? null : c.id); }}
                >
                  📜 Show certificate
                </button>
              </div>
            </div>

            <div className={`cert-popover ${openId === c.id ? 'open' : ''}`} role="dialog" aria-hidden={openId !== c.id}>
              <div className="cert-grid single">
                <a href={c.img} target="_blank" rel="noopener noreferrer">
                  <img loading="lazy" src={c.img} alt={c.title} />
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>

      <section style={{ marginTop: 16 }}>
        <h3 className="languages-title">{t('certifications.languagesTitle', 'Languages')}</h3>
        <ul className="languages-list">
          <li>Österreichisches Sprachdiplom Deutsch (A1)</li>
        </ul>
      </section>
    </div>
  );
}

export default Certifications;