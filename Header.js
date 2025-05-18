import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: var(--transition);
  background: ${props => props.scrolled ? 'rgba(17, 34, 64, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: 1px solid ${props => props.scrolled ? 'rgba(100, 255, 218, 0.2)' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.3)' : 'none'};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-text);
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-color);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--accent-color);
    transform: translateY(-2px);
  }

  &:hover::before {
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--text-primary);
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: var(--transition);
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary-color);
    transition: var(--transition);
  }

  &:hover {
    color: var(--secondary-color);
    &::after {
      width: 100%;
    }
  }
`;

const MobileButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  transition: var(--transition);

  &:hover {
    color: var(--secondary-color);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(17, 34, 64, 0.98);
  padding: 6rem 2rem 2rem;
  z-index: 1000;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const MobileNavLink = styled.a`
  color: var(--text-primary);
  font-size: 1.2rem;
  font-weight: 500;
  transition: var(--transition);
  padding: 0.5rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--secondary-color);
    transition: var(--transition);
  }

  &:hover {
    color: var(--secondary-color);
    &::after {
      width: 100%;
    }
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <HeaderContainer
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav>
        <Logo
          onClick={() => scrollToSection('home')}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Aman Chauhan
        </Logo>
        <NavLinks>
          {navLinks.map((link, index) => (
            <NavLink
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`animate-fadeInUp delay-${(index + 1) * 100}`}
            >
              {link.label}
            </NavLink>
          ))}
        </NavLinks>
        <MobileButton 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="animate-fadeInUp delay-800"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileButton>
      </Nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <MobileNavLink
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`animate-fadeInLeft delay-${(index + 1) * 100}`}
              >
                {link.label}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header; 