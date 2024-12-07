import React from "react";
import "./features.css";

function Features() {
  // Data array for features
  const featuresData = [
    {
      title: "Room Booking",
      href: "#booking",
      buttonText: "Book Now",
    },
    {
      title: "FAQ",
      href: "#faq",
      buttonText: "Learn More",
    },
    {
      title: "Contact Us",
      href: "#contact",
      buttonText: "Get in Touch",
    },
  ];

  return (
    <section className="featured-links">
      {featuresData.map((feature, index) => (
        <div className="link-box" key={index}>
          <h2>{feature.title}</h2>
          <a href={feature.href} className="btn">
            {feature.buttonText}
          </a>
        </div>
      ))}
    </section>
  );
}

export default Features;
