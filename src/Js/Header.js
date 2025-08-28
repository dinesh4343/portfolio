import React, { useState, useEffect } from 'react';

// --- SVG Icons for Menu ---
const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
       viewBox="0 0 24 24" fill="none" stroke="currentColor" 
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
       viewBox="0 0 24 24" fill="none" stroke="currentColor" 
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6L6 18" />
    <path d="M6 6L18 18" />
  </svg>
);

// --- Header Component ---
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#');

  // Update active link based on window hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || '#');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu and set active link when clicking a nav link
  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#about", label: "About" },
     { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
   
    { href: "#projects", label: "Projects" },
    { href: "#Certificates", label: "Certificates" },
  ];

  return (
    <header className="portfolio-header">
      <div className="header-container">
        <div className="header-content">

          {/* Left side: Logo */}
          <div className="logo-container">
            <a href="#" onClick={() => handleLinkClick('#')} className="logo-link" aria-label="Home">
              <img
                src="https://placehold.co/120x40/transparent/ffffff?text=Your+Logo"
                alt="Your Logo"
                className="logo-image"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/120x40/000000/ffffff?text=Logo+Error'; }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => handleLinkClick(href)}
                className={`nav-link ${activeLink === href ? 'active' : ''}`}
                aria-current={activeLink === href ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="mobile-menu-button-container">
            <button
              onClick={toggleMenu}
              className="mobile-menu-button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              type="button"
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation menu"
      >
        <div className="mobile-nav-links">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => handleLinkClick(href)}
              className={`mobile-nav-link ${activeLink === href ? 'active' : ''}`}
              aria-current={activeLink === href ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
