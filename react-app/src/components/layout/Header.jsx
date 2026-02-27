import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Ana Sayfa" },
  { id: "about", label: "Hakkımda" },
  { id: "skills", label: "Yetenekler" },
  { id: "projects", label: "Projeler" },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setIsSticky(window.scrollY > 100);
    setIsMenuOpen(false);

    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (id && top >= offset && top < offset + height) {
        setActiveSection(id);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header${isSticky ? " sticky" : ""}`}>
      <a
        className="logo"
        onClick={() => scrollTo("home")}
        style={{ cursor: "pointer" }}
      >
        B<span>.</span>CAN
      </a>

      <i
        className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}
        id="menu-icon"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />

      <nav className={`navbar${isMenuOpen ? " active" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
