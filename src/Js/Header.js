// src/Js/Header.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const location = useLocation();
  const navigate = useNavigate();
  const mobileNavRef = useRef(null);

  // Update currentHash whenever hash changes
  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  const navLinks = [
    { href: "/#about", label: "About", isRoute: false },
    { href: "/#services", label: "Services", isRoute: false },
    { href: "/#skills", label: "Skills", isRoute: false },
    { href: "/projects", label: "Projects", isRoute: true },
    { href: "/certifications", label: "Certifications", isRoute: false },
  ];

  const handleDesktopHashClick = (e, href) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        // Navigate to home, then scroll after navigation
        navigate("/", { replace: false });
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            window.history.replaceState(null, "", href);
            setCurrentHash(`#${id}`);
          }
        }, 100);
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", href);
          setCurrentHash(`#${id}`); // ✅ update manually
        }
      }
    }
  };

  const handleMobileClick = (href, isRoute) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      if (isRoute) {
        navigate(href);
      } else {
        window.location.href = href;
      }
    }, 50);
  };

  const isHashActive = (href) => {
    if (!href.startsWith("/#")) return false;
    return currentHash === `#${href.split("#")[1]}`;
  };

  return (
    <header className="portfolio-header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="logo-link" onClick={() => setIsMenuOpen(false)}>
              <img
                src="/Png/logo1.png"
                alt="Logo"
                className="logo-image"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map(({ href, label, isRoute }) =>
              isRoute ? (
                <Link
                  key={href}
                  to={href}
                  className={`nav-link ${location.pathname === href ? "active" : ""}`}
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={href}
                  href={href}
                  className={`nav-link ${isHashActive(href) ? "active" : ""}`}
                  onClick={(e) => handleDesktopHashClick(e, href)}
                >
                  {label}
                </a>
              )
            )}
          </nav>

          {/* Mobile button */}
          <div className="mobile-menu-button-container">
            <button
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        ref={mobileNavRef}
        className={`mobile-nav${isMenuOpen ? " open" : ""}`}
        style={{
          position: "fixed",
          top: "64px",
          left: 0,
          width: "100%",
          zIndex: 100,
          boxShadow: isMenuOpen ? "0 8px 32px rgba(0,0,0,0.2)" : "none",
          color: "#fff",
        }}
      >
        <div className="mobile-nav-links">
          {navLinks.map(({ href, label, isRoute }) => {
            const isActive = isRoute
              ? location.pathname === href
              : isHashActive(href);

            return (
              <button
                key={href}
                className={`mobile-nav-link${isActive ? " active" : ""}`}
                onClick={() => handleMobileClick(href, isRoute)}
                style={{
                  background: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                  color: "#fff",
                  border: "none",
                  width: "100%",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
