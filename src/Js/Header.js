import React, { useState, useEffect } from 'react';


// --- SVG Icons for Menu ---
const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

// --- Header Component ---
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#');

  // Effect to set active link on initial load and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || '#');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href) => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#Services", label: "Services"},
    { href: "#projects", label: "Projects" },

    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="portfolio-header">
      <div className="header-container">
        <div className="header-content">

          {/* Left side: Logo Image */}
          <div className="logo-container">
            <a href="#" onClick={() => handleLinkClick('#')} className="logo-link">
              {/* Replace this placeholder with your actual logo image */}
              <img
                src="https://placehold.co/120x40/transparent/ffffff?text=Your+Logo"
                alt="Your Logo"
                className="logo-image"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/120x40/000000/ffffff?text=Logo+Error'; }}
              />
            </a>
          </div>

          {/* Right side: Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button-container">
            <button
              onClick={toggleMenu}
              className="mobile-menu-button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}
        id="mobile-menu"
      >
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`mobile-nav-link ${activeLink === link.href ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
