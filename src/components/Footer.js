import React from 'react';
import { useLocale } from '../i18n/LocaleProvider';

function Footer() {
  const { t } = useLocale();

  return (
    <footer className="footer">
      <p>{t('footer.copyright', '© 2025 Yathin Kullachana Somaiah')}</p>
    </footer>
  );
}

export default Footer;