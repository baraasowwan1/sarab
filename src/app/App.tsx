import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Collection } from "./components/Collection";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const { t, i18n } = useTranslation();

  // ضبط اتجاه الصفحة RTL / LTR حسب اللغة
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const collectionItems = [
    {
      id: 1,
      title: t("collection.modern.title"),
      description: t("collection.modern.desc"),
      imageUrl: "https://i.im.ge/2025/12/24/BiWP7y.1.jpeg",
    },
    {
      id: 2,
      title: t("collection.classic.title"),
      description: t("collection.classic.desc"),
      imageUrl: "https://i.im.ge/2025/12/24/BiWb0X.2.jpeg",
    },
    {
      id: 3,
      title: t("collection.statement.title"),
      description: t("collection.statement.desc"),
      imageUrl: "https://i.im.ge/2025/12/24/BiWxKK.3.jpeg",
    },
    {
      id: 4,
      title: t("collection.full.title"),
      description: t("collection.full.desc"),
      imageUrl: "https://i.im.ge/2025/12/24/BiWypz.4.jpeg",
    },
    {
      id: 5,
      title: t("collection.wall.title"),
      description: t("collection.wall.desc"),
      imageUrl: "https://i.im.ge/2025/12/24/BiWwca.5.jpeg",
    },
    {
      id: 6,
      title: t("collection.custom.title"),
      description: t("collection.custom.desc"),
      imageUrl: "https://i.im.ge/2025/12/24/BiWE6F.6.jpeg",
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
