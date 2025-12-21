import React from 'react';
import { useLocale } from '../i18n/LocaleProvider';

function Home() {
  const { t } = useLocale();

  return (
    <div className="home-page">
      <img loading="lazy" src="/assets/images/YathinFull.jpeg" alt="Yathin" className="profile-photo" />
      <h1>{t('home.title', 'Yathin Kullachana Somaiah')}</h1>
      <p>{t('home.subtitle', 'Passionate software engineer dedicated to creating elegant, high-performance applications that solve real-world problems. Specializing in full-stack development with a focus on scalable architecture and exceptional user experiences.')}</p>
    </div>
  );
}

export default Home;