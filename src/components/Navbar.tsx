import { useState, useEffect } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, "hero")}>
          <span>KG</span>
        </a>
        <div
          className={`navbar-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, "experience")}>Experience</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</a>
          <a href="#services" onClick={(e) => handleNavClick(e, "services")}>Services</a>
          <a
            href="#contact"
            className="navbar-cta"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
