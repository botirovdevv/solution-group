import React, { useState } from 'react';
import img from '../../assets/images/contact.png';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [phoneNumber, setPhoneNumber] = useState('+998 ');

 

  const handleInputChange = (e) => {
    let input = e.target.value.replace(/\D/g, '').substring(3); // faqat raqamlarni olish va "998" ni olib tashlash
    let formattedNumber = '+998 ';

    switch (true) {
      case input.length <= 2:
        formattedNumber += `(${input})`;
        break;
      case input.length <= 5:
        formattedNumber += `(${input.slice(0, 2)}) ${input.slice(2)}`;
        break;
      case input.length <= 7:
        formattedNumber += `(${input.slice(0, 2)}) ${input.slice(2, 5)} ${input.slice(5)}`;
        break;
      default:
        formattedNumber += `(${input.slice(0, 2)}) ${input.slice(2, 5)} ${input.slice(5, 7)} ${input.slice(7)}`;
        break;
    }

    setPhoneNumber(formattedNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 19) {
      setError('Telefon raqami to\'liq formatda kiritilishi kerak.');
      return;
    }
    try {
      const response = await axios.post('https://api.telegram.org/bot7088426255:AAG33gYdzXSmu09nwyu1FmIIHCyOOX4ON4Y/sendMessage', {
        chat_id: '5663095517',
        text: `Yangi telefon raqam: ${phoneNumber}`,
      });
      console.log('Telegramga yuborildi');
      setPhoneNumber('')
    } catch (error) {
      console.error('Telegramga yuborishda xatolik yuz berdi:', error);
    }
  };

  return (
    <section className="contact" id='contact'>
      <div className="container">
        <div className="contact-content">
          <div className="contact-items">
            <div className="contact-title_items">
              <h3 className="contact-title">{t('contact')}</h3>
              <div className='contact-title_line'></div>
            </div>
            <h1 className="contact-main_title">
              {t('contactTitle')}
            </h1>
            <form onSubmit={handleSubmit} className="contact-inputs">
              <input
                value={phoneNumber}
                onChange={handleInputChange}
                type="text"
                className='contact-input'
                placeholder='Telefon raqamingiz'
                maxLength={19}
              />
              <button type='submit' className='contact-btn'>{t('send')}</button>
            </form>
            <p className="contact-subtitle">
              {t('connect')}
            </p>
          </div>
          <div className="contact-image">
            <img src={img} className='contact-img' alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
