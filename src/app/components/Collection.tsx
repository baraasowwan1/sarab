import { ImageWithFallback } from './figma/ImageWithFallback';

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
  return (
    <section id="collection" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of designer mirrors that transform any space into a masterpiece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
