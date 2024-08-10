import React from 'react'
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <section className='not-found'>
      <div className="container">
        <div className="not-found_content">
          <h1 className='not-found_title'>{t('notFound')}</h1>
          <a href="/" className='not-found_link'>{t('btn')}</a>
        </div>
      </div>
    </section>
  )
}

export default NotFound