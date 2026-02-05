import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://i.im.ge/2026/02/05/ehw9hC.logo-png.png"
            alt="Sarab Logo"
            className="h-10 w-auto object-contain"
            loading="lazy"
          />
        </div>

        <ul className="hidden md:flex items-center gap-8">
          <li><button onClick={() => scrollToSection("home")}>{t("nav.home")}</button></li>
          <li><button onClick={() => scrollToSection("collection")}>{t("nav.collection")}</button></li>
          <li><button onClick={() => scrollToSection("about")}>{t("nav.about")}</button></li>
          <li><button onClick={() => scrollToSection("contact")}>{t("nav.contact")}</button></li>
          <li>
            <button
              onClick={toggleLanguage}
              className="border px-3 py-1 rounded text-sm hover:bg-gray-100 transition"
            >
              {i18n.language === "ar" ? "EN" : "AR"}
            </button>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <ul className="flex flex-col p-4 gap-4 text-start">
              <li><button onClick={() => scrollToSection("home")}>{t("nav.home")}</button></li>
              <li><button onClick={() => scrollToSection("collection")}>{t("nav.collection")}</button></li>
              <li><button onClick={() => scrollToSection("about")}>{t("nav.about")}</button></li>
              <li><button onClick={() => scrollToSection("contact")}>{t("nav.contact")}</button></li>
              <li>
                <button onClick={toggleLanguage} className="w-full border mt-2 py-2 rounded">
                  {i18n.language === "ar" ? "English" : "العربية"}
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
