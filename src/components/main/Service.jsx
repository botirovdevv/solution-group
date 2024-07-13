import React from 'react'
import img from '../../assets/images/service.png'
import { serviceData } from '../../data/serviceData'

const Service = () => {
    return (
        <section className="service">
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