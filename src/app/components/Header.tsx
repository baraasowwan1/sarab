import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

// غيّر المسار حسب مكان الشعار
import logo from "../assets/logo.png";

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
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Sarab Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button onClick={() => scrollToSection("home")} className="hover:text-gray-600 transition-colors">
              {t("nav.home")}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("collection")} className="hover:text-gray-600 transition-colors">
              {t("nav.collection")}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")} className="hover:text-gray-600 transition-colors">
              {t("nav.about")}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")} className="hover:text-gray-600 transition-colors">
              {t("nav.contact")}
            </button>
          </li>

          {/* Language Switch */}
          <li>
            <button
              onClick={toggleLanguage}
              className="border px-3 py-1 rounded text-sm hover:bg-gray-100 transition"
            >
              {i18n.language === "ar" ? "EN" : "AR"}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <ul className="flex flex-col p-4 gap-4">
              <li>
                <button onClick={() => scrollToSection("home")} className="w-full text-start py-2">
                  {t("nav.home")}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("collection")} className="w-full text-start py-2">
                  {t("nav.collection")}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="w-full text-start py-2">
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="w-full text-start py-2">
                  {t("nav.contact")}
                </button>
              </li>
              <li>
                <button
                  onClick={toggleLanguage}
                  className="w-full border mt-2 py-2 rounded"
                >
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
