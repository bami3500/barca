import React from "react";
import "./navbar.css";

function Navbar() {
  // Data array for navbar items
  const navBarData = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#booking", label: "Room Booking" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">UH Sugar Land Student Center</div>
      <div className="navbar-right">
        <ul className="navbar-items">
          {navBarData.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="navbar-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
