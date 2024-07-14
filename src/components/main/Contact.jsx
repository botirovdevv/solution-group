import React, { useState } from 'react';
import img from '../../assets/images/contact.png';
import axios from 'axios';

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    if (/^[0-9]*$/.test(inputPhoneNumber)) {
      setPhoneNumber(inputPhoneNumber);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://api.telegram.org/bot7088426255:AAG33gYdzXSmu09nwyu1FmIIHCyOOX4ON4Y/sendMessage', {
        chat_id: '5663095517',
        text: `Yangi telefon raqam: ${phoneNumber}`,
      });
      console.log('Telegramga yuborildi:', response.data);
      setPhoneNumber('')
    } catch (error) {
      console.error('Telegramga yuborishda xatolik yuz berdi:', error);
    }
  };

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
            <form onSubmit={handleSubmit} className="contact-inputs">
              <input
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                type="number"
                className='contact-input'
                placeholder='Telefon raqamingiz'
                maxLength={12}
                minLength={12}
                onInput={(e) => {
                  if (e.target.value.length > e.target.maxLength) {
                    e.target.value = e.target.value.slice(0, e.target.maxLength);
                  }
                }}
              />
              <button type='submit' className='contact-btn'>Yuborish</button>
            </form>
            <p className="contact-subtitle">
              Bizga telefon raqamingizni qoldiring va biz siz bilan bog'lanamiz
            </p>
          </div>
          <div className="contact-image">
            <img src={img} className='contact-img' alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
