import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./ar.json";
import en from "./en.json";

// تحديد اللغة:
// 1) لغة محفوظة
// 2) لغة الجهاز
// 3) العربية افتراضيًا
const savedLang = localStorage.getItem("lang");
const browserLang = navigator.language.startsWith("ar") ? "ar" : "en";

const defaultLang = savedLang || browserLang || "ar";

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    en: { translation: en }
  },
  lng: defaultLang,
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
