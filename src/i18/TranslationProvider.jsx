import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18/i18'; 

function TranslationProvider({ children }) {
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export default TranslationProvider;
