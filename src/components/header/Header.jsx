import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    const sr = ScrollReveal();
    useEffect(() => {

        sr.reveal('.header-title', {
            duration: 1000,
            origin: 'bottom',
            distance: '50px',
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });

        sr.reveal('.header-subtitle', {
            duration: 1200,
            origin: 'bottom',
            distance: '50px',
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });

    }, [])
    return (
        <header className='header'>
            <div className="container">
                <div className="header-content">
                    <div className="header-texts">
                        <h1 className="header-title">
                            {t('headerTitle')}
                        </h1>
                            <p className="header-subtitle">
                                {t('headerSubtitle')}
                            </p>
                                
                        <a href="#contact" className='header-link'>{t('headerBtn')}</a>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header