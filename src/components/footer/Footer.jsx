import React from 'react'
import logo from '../../assets/images/logo2.png'
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} className='footer-img' alt="Web site logo" />
                    </div>
                    <div>
                        <h1 className='footer-title'>Solution jamoasi haqida va yangi loyihalar haqida ko'proq ma'lumotga ega bo'lmoqchi bo'lsangiz bizni ijtimoiy tarmoqlarga obuna bo'ling</h1>
                    </div>

                    <div className="footer-links">
                        <a href="https://t.me/group_solution">
                            <FaTelegram fontSize={27} />
                        </a>
                        <a href="https://www.instagram.com/solution_.group?igsh=MW9jODNlNnVwNjZyaA==">
                            <FaInstagram fontSize={27} /> 
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer