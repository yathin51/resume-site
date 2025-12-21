import React from 'react';
import { useLocale } from '../i18n/LocaleProvider';

function Contact() {
  const { t } = useLocale();

  return (
    <div>
      <h2>{t('contact.title', 'Contact')}</h2>
      <p>{t('contact.emailLabel', 'Email')}: <a href="mailto:yathin.ksomaiah@gmail.com">yathin51@gmail.com</a></p>
      <p>{t('contact.linkedInLabel', 'LinkedIn')}: <a href="https://www.linkedin.com/in/yathin-somaiah-kullachana51/?locale=de_DE"
        target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      <p>{t('contact.gitHubLabel', 'GitHub')}: <a href="https://github.com/yathin51" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    </div>
  );
}

export default Contact;