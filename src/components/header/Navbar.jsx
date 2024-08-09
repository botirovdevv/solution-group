import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import logo from '../../assets/images/logo.png';
import { Menu, MenuItem, IconButton } from '@mui/material';
import i18n from '../../i18/i18';
import { MdOutlineTranslate } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { t } = useTranslation();

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
        i18n.changeLanguage(lng)
            .then(() => {
                console.log(`Language changed to ${lng}`);
            })
            .catch((err) => {
                console.error('Error changing language:', err);
            });
        handleClose();
    };

    return (
        <nav className='nav'>
            <div className={isOpen ? "nav-bg show" : "nav-bg"} onClick={closeMenu}></div>
            <div className="container">
                <div className="nav-content">
                    <a href="/" className="nav-logo">
                        <img src={logo} className='nav-logo_img' alt="Logo" />
                    </a>
                    <ul className={isOpen ? "nav-links show" : "nav-links"}>
                        <a href="/" className="nav-logo_mobile" onClick={closeMenu}>
                            <img src={logo} className='nav-logo_img' alt="Logo" />
                        </a>
                        <a href='/' className="nav-link" onClick={closeMenu}>{t('link1')}</a>
                        <a href="#service" className="nav-link" onClick={closeMenu}> {t('link2')}</a>
                        <a href="#projects" className="nav-link" onClick={closeMenu}>{t('link3')}</a>
                        <a href="#" className="nav-link" onClick={closeMenu}>{t('link4')}</a>
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
                                color="inherit"
                            >
                                <MdOutlineTranslate fontSize={30}/>

                            </IconButton>
                            <Menu
                                id="language-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'language-button',
                                }}
                            >
                                <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
                                <MenuItem onClick={() => changeLanguage('uz')}>O'zbek</MenuItem>
                                <MenuItem onClick={() => changeLanguage('ru')}>Русский</MenuItem>
                            </Menu>
                        </div>
                        <a href='#contact' className="nav-btn">
                            {t('button')}
                        </a>
                        <button className="nav-menu_btn" onClick={openMenu}>
                            <RiMenu3Fill />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
