import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Uz from '../language/Uz.json';
import En from '../language/En.json';
import Ru from '../language/Ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {    
      uz: { translation: Uz },
      en: { translation: En },
      ru: { translation: Ru },
    },
    lng: 'uz', // default til
    fallbackLng: 'uz', 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
