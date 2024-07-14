import React, { useEffect } from 'react'
import img from '../../assets/images/service.png'
import { serviceData } from '../../data/serviceData'
import ScrollReveal from 'scrollreveal';

const Service = () => {
    const sr = ScrollReveal();
    useEffect(() => {

        sr.reveal('.serivice-items', {
            duration: 1000,
            origin: 'left',
            distance: '50px',
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });

        sr.reveal('.service-img', {
            duration: 1200,
            origin: 'bottom',
            distance: '50px',
            delay: 200,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
        });
    }, [])
    return (
        <section className="service" id="service">
            <div className="container">
                <div className="service-content">
                    {
                        serviceData.map((item, index) => (
                            <div className="service-card" key={item.id}>
                                {index === 0 ? (
                                    <div className="serivice-items">
                                        <h1 className="service-card_title">
                                            {item.title}
                                        </h1>
                                        <h1 className="service-title">
                                            {item.cardTitle}
                                        </h1>
                                        <p className="service-card_subtitle" >
                                            {item.subtitle}
                                        </p>
                                        <a href="#" className="service-link">
                                            Foydalanish
                                        </a>
                                    </div>
                                ) : (
                                    <div className="service-image">
                                        <img src={item.img} className='service-img' alt="serivce image" />
                                    </div>
                                )}
                                {index === 0 ? (
                                    <div className="service-image">
                                        <img src={item.img} className='service-img' alt="serivce image" />
                                    </div>
                                ) : (
                                    <div className="serivice-items">
                                        <h1 className="service-card_title">
                                            {item.title}
                                        </h1>
                                        <h1 className="service-title">
                                            {item.cardTitle}
                                        </h1>
                                        <p className="service-card_subtitle" >
                                            {item.subtitle}
                                        </p>
                                        <a href="#" className="service-link">
                                            Foydalanish
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Service