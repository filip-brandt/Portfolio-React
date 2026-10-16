import React, { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Hem', href: '#hem' },
  { label: 'Om mig', href: '#om-mig' },
  { label: 'Projekt', href: '#projekt' },
  { label: 'Kontakt', href: '#kontakt' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="navbar-logo">Portfolio - Filip Brandt</div>

        <button 
          className="navbar-toggle" 
          onClick={toggleMenu}
          aria-label="Meny"
          type="button"
        >
          ☰
        </button>

        <ul className="navbar-links-desktop">
          {navLinks.map((link: NavLink) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {isOpen && (
          <ul className="navbar-links-mobile">
            {navLinks.map((link: NavLink) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;