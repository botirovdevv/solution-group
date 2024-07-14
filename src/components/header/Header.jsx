import React, { useEffect } from 'react'
import img from '../../assets/images/header-img.png'
import ScrollReveal from 'scrollreveal';

const Header = () => {
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

        sr.reveal('.header-img', {
            duration: 1200,
            origin: 'top',
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
                            <span className='header-separate'>Raqamli</span> yechimlar taklif qilamiz    
                        </h1>
                        <p className="header-subtitle">
                            Biz berayotgan raqamli yechimlar orqali biznesingizni keyingi bosqichga olib chiqing
                        </p>
                        <a href="#" className='header-link'>Loyihani Boshlash</a>
                    </div>
                    <div className="header-image">
                        <img src={img} className='header-img' alt="Solution Group Chart Photo" />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header