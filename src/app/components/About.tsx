import { Sparkles, Award, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Sparkles,
      titleKey: 'about.features.quality.title',
      descriptionKey: 'about.features.quality.description',
    },
    {
      icon: Award,
      titleKey: 'about.features.design.title',
      descriptionKey: 'about.features.design.description',
    },
    {
      icon: Users,
      titleKey: 'about.features.service.title',
      descriptionKey: 'about.features.service.description',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('about.description')}</p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gray-100">
                  <Icon size={32} className="text-gray-700" />
                </div>
                <h3 className="text-2xl mb-3">{t(feature.titleKey)}</h3>
                <p className="text-gray-600">{t(feature.descriptionKey)}</p>
              </div>
            );
          })}
        </div>

        {/* Why Choose */}
        <div className="mt-20 p-8 md:p-12 bg-gray-50 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl mb-6">{t('about.whyChoose.title')}</h3>
            <p className="text-lg text-gray-700 mb-4">{t('about.whyChoose.paragraph1')}</p>
            <p className="text-lg text-gray-700">{t('about.whyChoose.paragraph2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
