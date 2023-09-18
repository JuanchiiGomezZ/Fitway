import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import es from "../locales/es.json";
import fr from "../locales/fr.json";
import kr from "../locales/kr.json";
import * as Localization from "expo-localization";

export const languageResources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  kr: { translation: kr },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en", //Localization.locale
  fallbackLng: "en",
  resources: languageResources,
});

export default i18next;
