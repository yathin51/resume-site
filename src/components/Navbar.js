import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleProvider';
import './Navbar.css';

function Navbar() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">{t('navbar.home', 'Home')}</Link></li>
        <li><Link to="/experience">{t('navbar.experience', 'Experience')}</Link></li>
        <li><Link to="/skills">{t('navbar.skills', 'Skills')}</Link></li>
        <li><Link to="/projects">{t('navbar.projects', 'Projects')}</Link></li>
        <li><Link to="/certifications">{t('navbar.certifications', 'Certifications')}</Link></li>
        <li><Link to="/about">{t('navbar.aboutContact', 'About & Contact')}</Link></li>
      </ul>
      <div style={{ padding: '10px' }}>
        <button onClick={() => setLocale('en')} disabled={locale === 'en'}>EN</button>
        <button onClick={() => setLocale('de')} disabled={locale === 'de'} style={{ marginLeft: 8 }}>DE</button>
      </div>
    </div>
  );
}

export default Navbar;