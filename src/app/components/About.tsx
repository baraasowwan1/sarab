import { Sparkles, Award, Users } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Handpicked mirrors crafted with the finest materials and attention to detail',
    },
    {
      icon: Award,
      title: 'Expert Design',
      description: 'Curated collection featuring contemporary and classic designs',
    },
    {
      icon: Users,
      title: 'Personalized Service',
      description: 'Dedicated consultation to help you find the perfect mirror for your space',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">About Sarab</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Amman, Jordan, Sarab specializes in bringing sophistication and light to your home through our exquisite collection of designer mirrors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gray-100">
                  <Icon size={32} className="text-gray-700" />
                </div>
                <h3 className="text-2xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-gray-50 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl mb-6">Why Choose Sarab?</h3>
            <p className="text-lg text-gray-700 mb-4">
              At Sarab, we believe that mirrors are more than just functional pieces—they are art that can transform the ambiance of any room. Each mirror in our collection is carefully selected to offer both aesthetic beauty and practical functionality.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're looking to create the illusion of space, enhance natural light, or add a statement piece to your interior, our team is here to guide you through our diverse range of styles, from minimalist modern to ornate classical designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
