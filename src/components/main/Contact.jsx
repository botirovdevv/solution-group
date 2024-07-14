import React from 'react'
import img from '../../assets/images/contact.png'

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-items">
            <div className="contact-title_items">
              <h3 className="contact-title">Hozir boshlang</h3>
              <div className='contact-title_line'></div>
            </div>
            <h1 className="contact-main_title">
              Biz bilan hamkorlikni hozir boshlang
            </h1>
            <div className="contact-inputs">
              <input type="text" className='contact-input' placeholder='Telefon raqamingiz' />
              <button className='contact-btn'>Yuborish</button>
            </div>
              <p className="contact-subtitle">
                Bizga telefon raqamingizni qoldiring biz siz bilan bog'lanamiz
              </p>
          </div>
          <div className="contact-image">
            <img src={img} className='contact-img' alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact