import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslation } from 'react-i18next';

interface CollectionItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface CollectionProps {
  items: CollectionItem[];
}

export function Collection({ items }: CollectionProps) {
  const { t } = useTranslation();

  return (
    <section id="collection" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">{t('collection.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={item.id} className="group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={t(`collection.items.${idx}`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-2">{t(`collection.items.${idx}`)}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
