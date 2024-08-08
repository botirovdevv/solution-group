import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        setIsOpen(true)
        document.body.classList.add('scroll')
    }

    const closeMenu = () => {
        setIsOpen(false)
        document.body.classList.remove('scroll')
    }
    return (
        <nav className='nav'>
            <div className={isOpen ? "nav-bg show" : "nav-bg"} onClick={closeMenu}></div>
            <div className="container">
                <div className="nav-content">
                    <a href="/" className="nav-logo">
                        <img src={logo} className='nav-logo_img' alt="" />
                    </a>

                    <ul className={isOpen ? "nav-links show" : "nav-links"}>
                        <a href='/' className="nav-link" onClick={closeMenu}>Bosh sahifa</a>
                        <a href="#service" className="nav-link" onClick={closeMenu}>Xizmatlar</a>
                        <a href="#projects" className="nav-link" onClick={closeMenu}>Loyihalar</a>
                        <a href="#" className="nav-link" onClick={closeMenu}>Hamkorlar</a>
                        <button className="nav-close_btn" onClick={closeMenu}>
                            <IoClose />
                        </button>
                    </ul>

                    <div className="nav-items">

                        <a href='#contact' className="nav-btn">
                            Hozir Boshlash
                        </a>

                        <button className="nav-menu_btn" onClick={openMenu}>
                            <RiMenu3Fill />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar