import React from 'react';
import { Link } from 'react-router-dom';
import { useLang, usePageTitle } from '../i18n';

const NotFound: React.FC = () => {
  const { t } = useLang();
  usePageTitle(t.pageTitles.notFound);
  return (
    <div className="pt-40 pb-32 px-4 text-center">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">{t.notFound.title}</h1>
      <Link to="/" className="text-primary font-bold hover:underline">
        {t.notFound.back}
      </Link>
    </div>
  );
};

export default NotFound;
