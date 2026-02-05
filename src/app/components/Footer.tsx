import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl mb-1">سراب • SARAB</h3>
          <p className="text-gray-400">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
