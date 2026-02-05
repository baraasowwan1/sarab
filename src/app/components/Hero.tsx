import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

interface HeroProps {
  imageUrl: string;
}

export function Hero({ imageUrl }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center"
    >
      <div className="relative w-full">
        <ImageWithFallback
          src={imageUrl}
          alt={t("hero.imageAlt")}
          className="w-full object-cover h-[60vh] sm:h-[80vh] md:h-[100vh]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-wide">
              {t("hero.title")}
            </h1>

            <p className="text-xl md:text-2xl mb-6 opacity-90">
              {t("hero.subtitle")}
            </p>

            <p className="text-lg md:text-xl opacity-80">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
