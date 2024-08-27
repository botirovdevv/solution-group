import React from 'react'
import img from '../../assets/images/header-img.png'
import { FaReact } from "react-icons/fa";
import { GiStrong } from "react-icons/gi";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useTranslation } from 'react-i18next'
import { FaUserTie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";



const Service = () => {
    const { t } = useTranslation();

    return (
        <section className='service' id='service'>
            <div className="container">
                <div className="service-content">
                    <div className='service-images'>
                        <img src={img} className='service-image' alt="" />
                    </div>
                    <div className="service-texts">
                        <h1 className='service-title'>{t('serviceTitle')}</h1>
                        <p className="service-subtitle">{t('serviceSubtitle')}</p>

                        <a href="#contact" className='service-link'>{t('headerBtn')} <MdOutlineArrowOutward color='#fff' fontSize={28} /></a>

                        <div className="service-items">
                            <div className="service-item">
                                <FaReact fontSize={45} color='#01A0DA' />
                                <h1 className="service-item_title">
                                    {t('serviceItemTitle1')}
                                </h1>
                            </div>

                            <div className="service-item">
                                <FaUserTie fontSize={45} color='#01A0DA' />

                                <h1 className="service-item_title">
                                    {t('serviceItemTitle2')}
                                </h1>
                            </div>

                            <div className="service-item">
                                <FaChartLine fontSize={45} color='#01A0DA'/>


                                <h1 className="service-item_title">
                                    {t('serviceItemTitle3')}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service