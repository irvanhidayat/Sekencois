import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaRegBell, FaCartShopping, FaCircleQuestion, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import Logo from './logo';
import Button from '../elements/button';
import NavItem from './ItemNav';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        // Scrolling down
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const navItems = [
    { id: 1, icon: <FaRegBell />, alt: 'Notifikasi', link: '/notifikasi' },
    { id: 2, icon: <FaCircleQuestion />, alt: 'Bantuan', link: '/bantuan' },
    { id: 3, icon: <FaCartShopping />, alt: 'Keranjang', link: '/keranjang' },
  ];

  return (
    <nav className={`bg-white flex justify-between items-center h-16 px-12 shadow-md fixed top-0 left-0 right-0 z-10 transition-transform duration-300 ${isScrollingUp ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <Logo img={'./img/Logo.png'} />

      <div className="hidden md:flex">
        <div className='flex'>
          {navItems.map(item => (
            <NavLink key={item.id} to={item.link} className={({ isActive }) => isActive ? 'text-[#33a49d]' : 'text-[#44C6BE]'}>
              <NavItem icon={item.icon} alt={item.alt} />
            </NavLink>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
          className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className='flex flex-col items-center'>
            {navItems.map(item => (
              <NavLink key={item.id} to={item.link} className={({ isActive }) => isActive ? 'text-[#33a49d] py-2' : 'text-[#44C6BE] py-2'} onClick={() => setIsMenuOpen(false)}>
                <NavItem icon={item.icon} alt={item.alt} />
              </NavLink>
            ))}
          </div>
        </div>
      )}

      <Link to="/login" className="hidden md:block">
        <Button className="p-3 font-semibold rounded-xl m-2 px-8 bg-[#44C6BE] text-white">
          Masuk
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;