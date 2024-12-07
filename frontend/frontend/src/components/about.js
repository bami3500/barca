import React from "react";
import StudyCenter from "../images/study.png";
import "./about.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>About Our Student Center</h2>
      <p>
        The UH Sugar Land Student Center is a vibrant hub for academic and
        social activities. Our modern facilities provide students with spaces
        for studying, collaboration, and relaxation.
      </p>
      <img src={StudyCenter} alt="UH Sugar Land Student Center" />
    </section>
  );
}

export default About;
