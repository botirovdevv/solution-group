import React from 'react'
import img1 from '../../assets/images/row-1-column-1.png'
import img2 from '../../assets/images/row-1-column-2.png'
import img3 from '../../assets/images/row-1-column-3.png'
import img4 from '../../assets/images/row-2-column-1.png'
import img5 from '../../assets/images/row-2-column-2.png'
import img6 from '../../assets/images/row-2-column-3.png'
import img7 from '../../assets/images/row-3-column-1.png'
import img8 from '../../assets/images/row-3-column-2.png'
import img9 from '../../assets/images/row-3-column-3.png'
import { FaReact } from "react-icons/fa";
import { GiStrong } from "react-icons/gi";
import { AiOutlineSolution } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useTranslation } from 'react-i18next'


const Service = () => {
    const { t } = useTranslation();

    return (
        <section className='service' id='service'>
            <div className="container">
                <div className="service-content">
                    <div className='service-images'>
                        <div className="service-images_group">
                            <img src={img1} className='service-img' alt="" />
                            <img src={img2} className='service-img' alt="" />
                            <img src={img3} className='service-img' alt="" />
                        </div>
                        <div className="service-images_group">
                            <img src={img4} className='service-img' alt="" />
                            <img src={img5} className='service-img' alt="" />
                            <img src={img6} className='service-img' alt="" />
                        </div>
                        <div className="service-images_group">
                            <img src={img7} className='service-img' alt="" />
                            <img src={img8} className='service-img' alt="" />
                            <img src={img9} className='service-img' alt="" />

                        </div>
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
                                <GiStrong fontSize={45} color='#01A0DA' />
                                <h1 className="service-item_title">
                                    {t('serviceItemTitle2')}
                                </h1>
                            </div>

                            <div className="service-item">
                                <AiOutlineSolution fontSize={45} color='#01A0DA' />

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