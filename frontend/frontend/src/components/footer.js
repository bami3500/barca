/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";

function Footer() {
  const socials = ["FaceBook", "Twitter", "Instagram"];

  return (
    <footer>
      <div className="footer-content">
        <span>&copy; 2024 UH Sugar Land Student Center</span>
        <div id="contact" className="social-links">
          {socials.map((social, index) => (
            <a href="#" className="social-icon" key={index}>
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
