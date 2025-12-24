import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const collectionItems = [
    {
      id: 1,
      title: 'Modern Minimalist',
      description: 'Clean lines and sleek frames for contemporary spaces',
      imageUrl: 'https://i.im.ge/2025/12/24/BiWP7y.1.jpeg',
    },
    {
      id: 2,
      title: 'Elegant Classics',
      description: 'Ornate designs that bring timeless sophistication',
      imageUrl: 'https://i.im.ge/2025/12/24/BiWb0X.2.jpeg',
    },
    {
      id: 3,
      title: 'Statement Pieces',
      description: 'Bold mirrors that become the focal point of any room',
      imageUrl: 'https://i.im.ge/2025/12/24/BiWxKK.3.jpeg',
    },
    {
      id: 4,
      title: 'Full-Length Mirrors',
      description: 'Perfect for bedrooms and dressing areas',
      imageUrl: 'https://i.im.ge/2025/12/24/BiWypz.4.jpeg',
    },
    {
      id: 5,
      title: 'Decorative Wall Mirrors',
      description: 'Artistic pieces that enhance your walls',
      imageUrl: 'https://i.im.ge/2025/12/24/BiWwca.5.jpeg',
    },
    {
      id: 6,
      title: 'Custom Designs',
      description: 'Bespoke mirrors tailored to your vision',
      imageUrl: 'https://i.im.ge/2025/12/24/BiWE6F.6.jpeg',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero imageUrl="https://i.im.ge/2025/12/24/BipXtf.Untitled-design-2.png" />
      <Collection items={collectionItems} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}