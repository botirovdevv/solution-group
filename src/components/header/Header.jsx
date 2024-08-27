import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();
    const sr = ScrollReveal();
    const [offset, setOffset] = useState({ x: 0, y: 0 });

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

        const handleMouseMove = (event) => {
            const x = (event.clientX - window.innerWidth / 2) * 0.02;
            const y = (event.clientY - window.innerHeight / 2) * 0.02;
            setOffset({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [sr]);

    return (
        <header className='header'>
            <div className="container">
                <div className="header-content">
                    <div className="header-texts" style={{
                        transform: `translate(${offset.x}px, ${offset.y}px)`,
                        transition: 'transform 0.2s ease-out',
                    }}>
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

export default Header;
