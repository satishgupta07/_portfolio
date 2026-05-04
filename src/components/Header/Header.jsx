import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import "./Header.css";

const navLinks = [
  { href: "#home",      Icon: FaHome,      label: "Home"     },
  { href: "#about",     Icon: FaUser,      label: "About"    },
  { href: "#skills",    Icon: FaCode,      label: "Skills"   },
  { href: "#portfolio", Icon: FaBriefcase, label: "Projects" },
  { href: "#contact",   Icon: FaEnvelope,  label: "Contact"  },
];

const Header = () => {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeNav,  setActiveNav]  = useState("#home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => {
      if (!e.target.closest(".nav")) setMenuOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [menuOpen]);

  // Active nav via scroll
  useEffect(() => {
    const observers = [];
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.replace("#", ""));
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveNav(href); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href) => {
    setActiveNav(href);
    setMenuOpen(false);
  };

  return (
    <header className={`header${scrolled ? " scroll-header" : ""}`}>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <span className="nav__logo-bracket">&lt;</span>
          Satish
          <span className="nav__logo-bracket"> /&gt;</span>
        </a>

        {/* Nav links */}
        <div className={`nav__menu${menuOpen ? " show-menu" : ""}`}>
          <ul className="nav__list">
            {navLinks.map(({ href, Icon, label }) => (
              <li className="nav__item" key={href}>
                <a
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className={`nav__link${activeNav === href ? " active-link" : ""}`}
                >
                  <span className="nav__icon-wrap">
                    <Icon className="nav__icon" />
                  </span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right-side actions */}
        <div className="nav__actions">
          <button
            className="nav__theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className={`nav__hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="nav__hamburger-line" />
            <span className="nav__hamburger-line" />
            <span className="nav__hamburger-line" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
