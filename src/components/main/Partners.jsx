import React from 'react'
import img from '../../assets/images/gerb.png'

const Partners = () => {
  return (
    <section className='partners' id='partners'>
      <div className="container">
        <h1 className="partners-title">Bizning hamkorlarimiz</h1>
        <div className="partners-content">
          <a href="https://xorazmvbsks.uz/">
            <img src={img} className='partners-img' alt="Uzbekistan gerb" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Partners