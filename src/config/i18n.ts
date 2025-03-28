import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../../public/locale/en/translation.json";
import esTranslations from "../../public/locale/es/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    fr: { translation: esTranslations },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;