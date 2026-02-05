import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl mb-1">{t('footer.title')}</h3>
          <p className="text-gray-400">{t('footer.subtitle')}</p>
        </div>
        <div className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-gray-400">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
