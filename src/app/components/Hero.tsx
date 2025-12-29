import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  return (
    <section id="home" className="relative w-full flex items-center justify-center">
      <div className="relative w-full">
        <ImageWithFallback
          src={imageUrl}
          alt="Luxury mirror decor"
          className="w-full object-cover h-[60vh] sm:h-[80vh] md:h-[100vh]"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl mb-4 tracking-wider">سراب</h1>
              <h2 className="text-4xl md:text-6xl tracking-widest opacity-90">SARAB</h2>
            </div>

            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
              مرايات بتفصيل أنيق، جودة عالية، ولمسة بتشبه ذوقك 
            </p>

            <p className="text-lg md:text-xl opacity-80">
              سراب مش بس مرايات… سراب تفصيل، فخامة، ولمسة تميز 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
