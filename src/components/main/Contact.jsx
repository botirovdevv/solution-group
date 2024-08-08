import React, { useState } from 'react';
import img from '../../assets/images/contact.png';
import axios from 'axios';

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState('+998');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const clearErrorAfterTimeout = () => {
    setTimeout(() => {
      setError('');
    }, 3000); 
  };

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    if (/^\+998[0-9]*$/.test(inputPhoneNumber)) {
      if (inputPhoneNumber.length <= 13) {
        setPhoneNumber(inputPhoneNumber);
        setError('');
      } else {
        setError('Telefon raqami 13 tadan ortiq bo\'lmasligi kerak.');
        clearErrorAfterTimeout();
        setShow(false)
      }
    } else {

      setError('Telefon raqami +998 bilan boshlanishi kerak va faqat raqamlarni o\'z ichiga olishi kerak.');
      clearErrorAfterTimeout();
      setShow(false)

    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 13) {
      setError('Telefon raqami 13 ta raqamdan iborat bo\'lishi kerak.');
      clearErrorAfterTimeout();
      return;
    }
    try {
      const response = await axios.post('https://api.telegram.org/bot7088426255:AAG33gYdzXSmu09nwyu1FmIIHCyOOX4ON4Y/sendMessage', {
        chat_id: '5663095517',
        text: `Yangi telefon raqam: ${phoneNumber}`,
      });
      console.log('Telegramga yuborildi:', response.data);
      setPhoneNumber('+998');
      setError("Raqamingiz muvaffaqiyatli yuborilda tez orada siz bilan bog'lanamiz");
      clearErrorAfterTimeout();
      setShow(true)
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
                type="text"
                className='contact-input'
                placeholder='Telefon raqamingiz'
                maxLength={13}
              />
              <button type='submit' className='contact-btn'>Yuborish</button>
            </form>
            <span className={show ? 'contact-error show' : "contact-error"}>{error}</span>
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
