import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import logo from '../../assets/images/logo2.png';
import logo2 from '../../assets/images/logo.png';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next'; 
import { MdTranslate } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const openMenu = () => {
        setIsOpen(true);
        document.body.classList.add('scroll');
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.classList.remove('scroll');
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        handleClose();
    };

    return (
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <div className={isOpen ? "nav-bg show" : "nav-bg"} onClick={closeMenu}></div>
            <div className="container">
                <div className="nav-content">
                    <a href="/" className="nav-logo">
                        <img src={logo} className='nav-logo_img' alt="Logo" />
                        <h1 className={scrolled ? 'nav-logo_title active' : "nav-logo_title"}>Solution Group</h1>
                    </a>

                    <ul className={isOpen ? "nav-links show" : "nav-links"}>
                        <a href="/" className="nav-logo_mobile" onClick={closeMenu}>
                            <img src={logo2} className='nav-mobile_logo' alt="Logo" />
                        </a>
                        <a href="/" className="nav-link" onClick={closeMenu}>{t('link1')}</a>
                        <a href="#service" className="nav-link" onClick={closeMenu}>{t('link2')}</a>
                        <a href="#projects" className="nav-link" onClick={closeMenu}>{t('link3')}</a>
                        <a href="#partners" className="nav-link" onClick={closeMenu}>{t('link4')}</a>
                        <button className="nav-close_btn" onClick={closeMenu}>
                            <IoClose />
                        </button>
                    </ul>

                    <div className="nav-items">
                        <div>
                            <IconButton
                                aria-controls={open ? 'language-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                color={scrolled ? '#000' : '#fff'}
                            >
                                <MdTranslate color={scrolled ? '#000' : '#fff'}/>
                            </IconButton>
                            <Menu
                                id="language-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'language-button',
                                }}
                                sx={{zIndex: 9999999999}}
                            >
                                <MenuItem onClick={() => changeLanguage('uz')}>O'zbek</MenuItem>
                                <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
                                <MenuItem onClick={() => changeLanguage('ru')}>Русский</MenuItem>
                            </Menu>
                        </div>
                        <a href='#contact' className="nav-btn">
                            {t('button')}
                        </a>

                        <button className="nav-menu_btn" onClick={openMenu}>
                            <RiMenu3Fill color={scrolled ? '#000' : '#fff'} />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
