import React from 'react'
import img from '../../assets/images/header-img.png'

const Header = () => {
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